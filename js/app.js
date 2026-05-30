const storagePrefix = "aptiverbal-attempts:";
        let activeCategory = "aptitude";
        let activeTopic = topicData.aptitude.topics[0];
        let quizSetIndex = 0;
        let activeQuiz = [];
        let questionIndex = 0;
        let selectedOption = null;
        let locked = false;
        let score = 0;
        let answered = 0;
        let answers = [];
        let quizSubmitted = false;

        const categoryTabs = document.getElementById("categoryTabs");
        const topicGrid = document.getElementById("topicGrid");
        const companyGrid = document.getElementById("companyGrid");
        const selectedTitle = document.getElementById("selectedTitle");
        const selectedSubtitle = document.getElementById("selectedSubtitle");
        const selectedCategory = document.getElementById("selectedCategory");
        const materialTitle = document.getElementById("materialTitle");
        const materialSummary = document.getElementById("materialSummary");
        const materialMatter = document.getElementById("materialMatter");
        const materialPoints = document.getElementById("materialPoints");
        const materialExample = document.getElementById("materialExample");
        const interviewList = document.getElementById("interviewList");
        const quizSetBadge = document.getElementById("quizSetBadge");
        const quizCounter = document.getElementById("quizCounter");
        const progressFill = document.getElementById("progressFill");
        const questionNav = document.getElementById("questionNav");
        const questionText = document.getElementById("questionText");
        const optionsList = document.getElementById("optionsList");
        const questionSource = document.getElementById("questionSource");
        const explanationBox = document.getElementById("explanationBox");
        const checkBtn = document.getElementById("checkBtn");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const submitBtn = document.getElementById("submitBtn");
        const restartBtn = document.getElementById("restartBtn");
        const resultBox = document.getElementById("resultBox");
        const statCategory = document.getElementById("statCategory");
        const statTopic = document.getElementById("statTopic");
        const statAttempts = document.getElementById("statAttempts");
        const statQuizSet = document.getElementById("statQuizSet");

        function attemptKey(topicId) {
            return `${storagePrefix}${topicId}`;
        }

        function completedAttempts(topicId) {
            return Number(localStorage.getItem(attemptKey(topicId)) || "0");
        }

        function setCompletedAttempts(topicId, value) {
            localStorage.setItem(attemptKey(topicId), String(value));
        }

        function isCompleted(topicId) {
            return completedAttempts(topicId) > 0;
        }

        function currentQuiz() {
            return activeQuiz;
        }

        function escapeHTML(value) {
            return String(value).replace(/[&<>"']/g, (character) => ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            }[character]));
        }

        function renderQuestionNav() {
            questionNav.innerHTML = "";
            currentQuiz().forEach((_, index) => {
                const savedAnswer = answers[index] || { selected: null, checked: false };
                const button = document.createElement("button");
                button.className = "question-jump";
                button.type = "button";
                button.textContent = index + 1;
                if (index === questionIndex) button.classList.add("active");
                if (savedAnswer.selected !== null || savedAnswer.checked) button.classList.add("answered");
                button.addEventListener("click", () => {
                    questionIndex = index;
                    renderQuestion();
                });
                questionNav.appendChild(button);
            });
        }

        function buildResult() {
            const quiz = currentQuiz();
            return quiz.reduce((summary, item, index) => {
                const selected = answers[index]?.selected;
                const isSkipped = selected === null || selected === undefined;
                const isCorrect = !isSkipped && selected === item.answer;
                if (isSkipped) summary.skipped += 1;
                else if (isCorrect) summary.correct += 1;
                else summary.incorrect += 1;
                summary.details.push({ item, index, selected, isSkipped, isCorrect });
                return summary;
            }, { correct: 0, incorrect: 0, skipped: 0, details: [] });
        }

        function renderCategories() {
            categoryTabs.innerHTML = "";
            Object.entries(topicData).forEach(([key, category]) => {
                const button = document.createElement("button");
                button.className = `tab ${key === activeCategory ? "active" : ""}`;
                button.type = "button";
                button.innerHTML = `<i class="fa-solid ${category.icon}"></i> ${category.label}`;
                button.addEventListener("click", () => {
                    activeCategory = key;
                    activeTopic = topicData[key].topics[0];
                    startQuizForTopic(true);
                    renderCategories();
                    renderTopics();
                    renderMaterial();
                    document.getElementById("learn").scrollIntoView({ behavior: "smooth" });
                });
                categoryTabs.appendChild(button);
            });
        }

        function renderTopics() {
            topicGrid.innerHTML = "";
            topicData[activeCategory].topics.forEach((topic) => {
                const attempts = completedAttempts(topic.id);
                const completed = attempts > 0;
                const questionCount = topic.questions?.length || 15;
                const button = document.createElement("button");
                button.className = `topic-card ${topic.id === activeTopic.id ? "active" : ""} ${completed ? "completed" : ""}`;
                button.type = "button";
                button.innerHTML = `
                    <span class="topic-icon"><i class="fa-solid ${topicData[activeCategory].icon}"></i></span>
                    <h3>${topic.title}</h3>
                    <p>${topic.summary}</p>
                    <div class="topic-meta"><span>${questionCount} questions</span><span>${completed ? "Completed" : `${attempts} done`}</span></div>
                `;
                button.addEventListener("click", () => {
                    activeTopic = topic;
                    startQuizForTopic(true);
                    renderTopics();
                    renderMaterial();
                    document.getElementById("learn").scrollIntoView({ behavior: "smooth" });
                });
                topicGrid.appendChild(button);
            });
        }

        function renderCompanyPapers() {
            companyGrid.innerHTML = "";
            companyPapers.forEach((paper) => {
                const completedRounds = paper.rounds.filter((round) => isCompleted(slugify(`company-${paper.company}-${round.name}`))).length;
                const card = document.createElement("article");
                card.className = "company-card";
                card.innerHTML = `
                    <div class="company-head">
                        <div>
                            <h3>${paper.company} Model Paper</h3>
                            <p>Written test, technical MCQ, coding, and interview preparation.</p>
                        </div>
                        <span class="company-status">${completedRounds}/${paper.rounds.length} completed</span>
                    </div>
                    <div class="round-list"></div>
                `;
                const roundList = card.querySelector(".round-list");
                paper.rounds.forEach((round) => {
                    const roundId = slugify(`company-${paper.company}-${round.name}`);
                    const completed = isCompleted(roundId);
                    const row = document.createElement("div");
                    row.className = "round-card";
                    row.innerHTML = `
                        <div>
                            <h4>${round.name}</h4>
                            <p>${round.label} - ${round.count} questions - ${round.time} minutes ${completed ? "- Completed" : ""}</p>
                        </div>
                        <button class="btn ${completed ? "btn-outline" : "btn-primary"}" type="button">
                            <i class="fa-solid ${completed ? "fa-circle-check" : "fa-play"}"></i> ${completed ? "Review / Retake" : "Start"}
                        </button>
                    `;
                    row.querySelector("button").addEventListener("click", () => {
                        activeCategory = "placement";
                        activeTopic = {
                            id: roundId,
                            title: `${paper.company}: ${round.name}`,
                            summary: `${round.label} model paper with ${round.count} company-based practice questions and a ${round.time}-minute target.`,
                            matter: `This is an original ${paper.company} model paper for placement preparation. Round focus: ${round.label}. Try to complete all questions within ${round.time} minutes, then review correct, incorrect, and skipped answers.`,
                            points: [
                                `Company: ${paper.company}`,
                                `Round: ${round.name}`,
                                `Question count: ${round.count}`,
                                `Target time: ${round.time} minutes`,
                                "Questions are original practice questions based on common MNC placement patterns."
                            ],
                            example: `Example flow: complete ${round.name}, submit the paper, review every answer, and retake until your score improves.`,
                            interviewRefs: [
                                { company: paper.company, year: 2026, question: `${round.name} model paper`, info: `${round.label} with clear explanations and final score details.` },
                                { company: paper.company, year: 2026, question: "Interview preparation", info: "Includes structured HR and project-based interview practice where applicable." }
                            ],
                            companyRound: true,
                            companyName: paper.company,
                            timeLimit: round.time,
                            questions: makeCompanyRoundQuestions(paper.company, round, round.count)
                        };
                        startQuizForTopic(true);
                        renderCategories();
                        renderTopics();
                        renderMaterial();
                        document.getElementById("learn").scrollIntoView({ behavior: "smooth" });
                    });
                    roundList.appendChild(row);
                });
                companyGrid.appendChild(card);
            });
        }

        function renderMaterial() {
            const category = topicData[activeCategory] || { label: activeTopic.categoryLabel || "Company Paper" };
            selectedTitle.textContent = activeTopic.title;
            selectedSubtitle.textContent = activeTopic.companyRound
                ? `${activeTopic.companyName} company model paper with ${activeTopic.questions.length} questions and a ${activeTopic.timeLimit}-minute target.`
                : `${category.label} topic with study matter, content quiz, and answer explanation.`;
            selectedCategory.innerHTML = `<i class="fa-solid fa-tag"></i> ${category.label}`;
            materialTitle.textContent = activeTopic.title;
            materialSummary.textContent = activeTopic.summary;
            materialMatter.textContent = activeTopic.matter;
            materialExample.textContent = activeTopic.example;
            materialPoints.innerHTML = activeTopic.points.map((point) => `<li>${point}</li>`).join("");
            interviewList.innerHTML = activeTopic.interviewRefs.map((item) => `
                <li>
                    <strong>${item.company} - ${item.year}</strong>
                    ${item.question}<br>
                    <span>${item.info}</span>
                </li>
            `).join("");
            updateStats();
        }

        function startQuizForTopic(resetScore) {
            const attempts = completedAttempts(activeTopic.id);
            quizSetIndex = attempts;
            activeQuiz = activeTopic.questions ? activeTopic.questions : buildExamSet(activeTopic, quizSetIndex);
            answers = Array.from({ length: activeQuiz.length }, () => ({ selected: null, checked: false, correct: false }));
            questionIndex = 0;
            selectedOption = null;
            locked = false;
            quizSubmitted = false;
            if (resetScore) {
                score = 0;
                answered = 0;
            }
            resultBox.classList.remove("show");
            renderQuestion();
            updateStats();
        }

        function renderQuestion() {
            const quiz = currentQuiz();
            const item = quiz[questionIndex];
            const savedAnswer = answers[questionIndex] || { selected: null, checked: false, correct: false };
            selectedOption = savedAnswer.selected;
            locked = quizSubmitted || savedAnswer.checked;
            quizSetBadge.innerHTML = `<i class="fa-solid fa-rotate"></i> Quiz Set ${quizSetIndex + 1}`;
            quizCounter.textContent = `Question ${questionIndex + 1} / ${quiz.length}`;
            progressFill.style.width = `${((questionIndex + 1) / quiz.length) * 100}%`;
            questionText.textContent = item.q;
            questionSource.innerHTML = item.source ? `<strong>${item.source.company} - ${item.source.year}</strong><br>${item.source.info}` : "";
            questionSource.classList.remove("show");
            explanationBox.textContent = item.exp;
            explanationBox.classList.remove("show");
            optionsList.innerHTML = "";
            if (!quizSubmitted) resultBox.classList.remove("show");
            prevBtn.disabled = questionIndex === 0;
            nextBtn.disabled = questionIndex === quiz.length - 1;
            nextBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i> Next Question';
            submitBtn.className = questionIndex === quiz.length - 1 ? "btn btn-primary" : "btn btn-outline";
            submitBtn.disabled = false;
            checkBtn.disabled = quizSubmitted || savedAnswer.checked || savedAnswer.selected === null;
            renderQuestionNav();

            item.options.forEach((option, index) => {
                const button = document.createElement("button");
                button.className = "option";
                button.type = "button";
                button.textContent = option;
                if (savedAnswer.selected === index) button.classList.add("selected");
                if ((savedAnswer.checked || quizSubmitted) && index === item.answer) button.classList.add("correct");
                if ((savedAnswer.checked || quizSubmitted) && index === savedAnswer.selected && savedAnswer.selected !== item.answer) button.classList.add("wrong");
                button.addEventListener("click", () => {
                    if (locked) return;
                    selectedOption = index;
                    answers[questionIndex].selected = index;
                    checkBtn.disabled = false;
                    document.querySelectorAll(".option").forEach((node) => node.classList.remove("selected"));
                    button.classList.add("selected");
                    renderQuestionNav();
                });
                optionsList.appendChild(button);
            });

            if (savedAnswer.checked || quizSubmitted) {
                questionSource.classList.add("show");
                explanationBox.classList.add("show");
            }
        }

        function updateStats() {
            const attempts = completedAttempts(activeTopic.id);
            statCategory.textContent = activeTopic.companyRound ? "Company Paper" : topicData[activeCategory].label;
            statTopic.textContent = activeTopic.title;
            statAttempts.textContent = attempts;
            statQuizSet.textContent = attempts + 1;
        }

        function finishQuiz() {
            const result = buildResult();
            score = result.correct;
            answered = result.correct + result.incorrect;
            const attempts = completedAttempts(activeTopic.id) + (quizSubmitted ? 0 : 1);
            if (!quizSubmitted) {
                setCompletedAttempts(activeTopic.id, attempts);
            }
            quizSubmitted = true;
            answers = answers.map((answer, index) => ({
                ...answer,
                checked: answer.selected !== null,
                correct: answer.selected === currentQuiz()[index].answer
            }));
            const detailRows = result.details.map(({ item, index, selected, isSkipped, isCorrect }) => {
                const status = isSkipped ? "Skipped" : isCorrect ? "Correct" : "Incorrect";
                const statusClass = isSkipped ? "result-skipped" : isCorrect ? "result-correct" : "result-wrong";
                const selectedText = isSkipped ? "Not answered" : item.options[selected];
                return `
                    <div class="result-item">
                        <h4>Question ${index + 1}: ${escapeHTML(item.q)}</h4>
                        <p>Status: <span class="${statusClass}">${status}</span></p>
                        <p>Your Answer: ${escapeHTML(selectedText)}</p>
                        <p>Correct Answer: ${escapeHTML(item.options[item.answer])}</p>
                        <p>Explanation: ${escapeHTML(item.exp)}</p>
                    </div>
                `;
            }).join("");
            resultBox.innerHTML = `
                <h3>Quiz completed</h3>
                <p>You scored <strong>${result.correct} / ${currentQuiz().length}</strong> in ${activeTopic.title}. ${activeTopic.companyRound ? "This company round will now show as completed when you open the app again." : `Next time this topic opens, a new 15-question Quiz Set <strong>${attempts + 1}</strong> will appear.`}</p>
                <div class="result-summary">
                    <div class="result-stat"><span>Total Questions</span><strong>${currentQuiz().length}</strong></div>
                    <div class="result-stat"><span>Correct</span><strong>${result.correct}</strong></div>
                    <div class="result-stat"><span>Incorrect</span><strong>${result.incorrect}</strong></div>
                    <div class="result-stat"><span>Skipped</span><strong>${result.skipped}</strong></div>
                </div>
                <h3>Question Details</h3>
                <div class="result-details">${detailRows}</div>
            `;
            resultBox.classList.add("show");
            renderQuestion();
            resultBox.classList.add("show");
            resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
            renderTopics();
            renderCompanyPapers();
            updateStats();
        }

        checkBtn.addEventListener("click", () => {
            if (selectedOption === null || locked) return;

            const item = currentQuiz()[questionIndex];
            const optionButtons = document.querySelectorAll(".option");
            locked = true;
            if (!answers[questionIndex].checked) answered += 1;
            answers[questionIndex].selected = selectedOption;
            answers[questionIndex].checked = true;
            answers[questionIndex].correct = selectedOption === item.answer;

            optionButtons.forEach((button, index) => {
                if (index === item.answer) button.classList.add("correct");
                if (index === selectedOption && selectedOption !== item.answer) button.classList.add("wrong");
            });

            if (selectedOption === item.answer) score += 1;
            checkBtn.disabled = true;
            renderQuestionNav();
            questionSource.classList.add("show");
            explanationBox.classList.add("show");
        });

        prevBtn.addEventListener("click", () => {
            if (questionIndex > 0) {
                questionIndex -= 1;
                renderQuestion();
            }
        });

        nextBtn.addEventListener("click", () => {
            if (questionIndex < currentQuiz().length - 1) {
                questionIndex += 1;
                renderQuestion();
            }
        });

        submitBtn.addEventListener("click", () => {
            finishQuiz();
        });

        restartBtn.addEventListener("click", () => {
            score = 0;
            answered = 0;
            answers = Array.from({ length: activeQuiz.length }, () => ({ selected: null, checked: false, correct: false }));
            questionIndex = 0;
            quizSubmitted = false;
            resultBox.classList.remove("show");
            renderQuestion();
        });

        renderCategories();
        renderTopics();
        renderCompanyPapers();
        renderMaterial();
        startQuizForTopic(true);

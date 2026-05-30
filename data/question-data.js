const topicData = {
            aptitude: {
                label: "Aptitude",
                icon: "fa-square-root-variable",
                topics: [
                    {
                        id: "percentages",
                        title: "Percentages",
                        summary: "Learn how parts are compared to a whole using 100 as the base.",
                        matter: "Percentage means per hundred. In placement aptitude, percentage questions usually ask for increase, decrease, marks, population, price change, discount, or comparison between two values. First identify the original value, then apply the percentage change carefully.",
                        points: [
                            "x% of y = (x / 100) x y.",
                            "Percentage change = (change / original value) x 100.",
                            "If a value increases by a%, new value = original x (100 + a) / 100.",
                            "If a value decreases by a%, new value = original x (100 - a) / 100."
                        ],
                        example: "If a student scores 72 out of 90, percentage = (72 / 90) x 100 = 80%. This same idea appears in the quiz below.",
                        quizzes: [
                            [
                                {
                                    q: "A student scored 72 marks out of 90. What is the percentage?",
                                    options: ["75%", "78%", "80%", "82%"],
                                    answer: 2,
                                    exp: "Percentage = (72 / 90) x 100 = 80%."
                                },
                                {
                                    q: "The price of a book increases from Rs. 200 to Rs. 250. Find the percentage increase.",
                                    options: ["20%", "25%", "30%", "40%"],
                                    answer: 1,
                                    exp: "Increase = 50. Percentage increase = (50 / 200) x 100 = 25%."
                                },
                                {
                                    q: "What is 15% of 600?",
                                    options: ["60", "75", "90", "120"],
                                    answer: 2,
                                    exp: "15% of 600 = (15 / 100) x 600 = 90."
                                }
                            ],
                            [
                                {
                                    q: "A number is decreased by 20% and becomes 160. What was the original number?",
                                    options: ["180", "190", "200", "220"],
                                    answer: 2,
                                    exp: "After 20% decrease, value is 80% of original. Original = 160 x 100 / 80 = 200."
                                },
                                {
                                    q: "In an exam, 36 students passed out of 45. What percentage passed?",
                                    options: ["70%", "75%", "80%", "85%"],
                                    answer: 2,
                                    exp: "Passed percentage = (36 / 45) x 100 = 80%."
                                },
                                {
                                    q: "A shirt marked Rs. 800 is sold at 10% discount. Selling price is:",
                                    options: ["Rs. 700", "Rs. 720", "Rs. 760", "Rs. 780"],
                                    answer: 1,
                                    exp: "Discount = 10% of 800 = 80. Selling price = 800 - 80 = Rs. 720."
                                }
                            ],
                            [
                                {
                                    q: "If 40% of a number is 120, find the number.",
                                    options: ["240", "260", "300", "320"],
                                    answer: 2,
                                    exp: "Number = 120 x 100 / 40 = 300."
                                },
                                {
                                    q: "The population of a town rises from 50,000 to 55,000. What is the increase percentage?",
                                    options: ["5%", "8%", "10%", "12%"],
                                    answer: 2,
                                    exp: "Increase = 5,000. Percentage = (5,000 / 50,000) x 100 = 10%."
                                },
                                {
                                    q: "A candidate gets 180 marks out of 240. What percentage did the candidate score?",
                                    options: ["70%", "72%", "75%", "78%"],
                                    answer: 2,
                                    exp: "Percentage = (180 / 240) x 100 = 75%."
                                }
                            ]
                        ]
                    },
                    basicTopic("ratio", "Ratio and Proportion", "Compare quantities and solve direct proportion questions.", "A ratio compares two quantities of the same kind. Proportion states equality of two ratios.", ["a:b = a / b.", "If a:b = c:d, then ad = bc.", "In direct proportion, both values increase or decrease together."], "If boys:girls = 3:2 and total is 50, boys = 3/5 x 50 = 30."),
                    basicTopic("profit-loss", "Profit and Loss", "Practice cost price, selling price, profit, loss, and discount.", "Profit and loss questions compare cost price and selling price. Always identify CP first.", ["Profit = SP - CP.", "Loss = CP - SP.", "Profit% = Profit / CP x 100.", "Loss% = Loss / CP x 100."], "If CP is 500 and SP is 600, profit = 100 and profit% = 20%."),
                    basicTopic("time-work", "Time and Work", "Understand work rate, combined work, and efficiency.", "Work questions are solved using rate per day. If A completes work in n days, A's one day work is 1/n.", ["One day work = 1 / total days.", "Combined work = sum of individual rates.", "Total time = 1 / combined rate."], "If A takes 10 days and B takes 15 days, together they do 1/10 + 1/15 = 1/6 work per day."),
                    basicTopic("speed-distance", "Speed, Time and Distance", "Solve distance, speed, average speed, trains, and relative speed.", "Speed connects distance and time. Keep units consistent before calculating.", ["Speed = Distance / Time.", "Distance = Speed x Time.", "Time = Distance / Speed."], "At 60 km/h for 2 hours, distance = 120 km."),
                    basicTopic("number-system", "Number System", "Revise divisibility, factors, multiples, HCF, LCM, and remainders.", "Number system topics test divisibility rules and factor thinking.", ["LCM handles repeated events.", "HCF handles largest equal grouping.", "Even numbers are divisible by 2."], "HCF of 12 and 18 is 6; LCM is 36."),
                    basicTopic("data-interpretation", "Data Interpretation", "Read tables, graphs, and charts quickly.", "DI questions test how accurately you read data and compare values.", ["Read labels first.", "Check units before calculating.", "Use percentage change for comparison."], "If sales rise from 100 to 125, increase is 25%.")
                ]
            },
            reasoning: {
                label: "Reasoning",
                icon: "fa-brain",
                topics: [
                    basicTopic("series", "Number and Letter Series", "Find patterns in sequences.", "Series questions test pattern recognition through addition, multiplication, squares, or alphabetical order.", ["Check difference first.", "Then check multiplication.", "For letters, convert to positions."], "3, 6, 12, 24 continues as 48."),
                    basicTopic("coding-decoding", "Coding and Decoding", "Decode letter and number patterns.", "Coding questions transform letters using shifts, reversals, or positions.", ["A=1, B=2 helps.", "Check forward or backward shift.", "Apply the same rule to all letters."], "If CAT is DBU, each letter shifted by +1."),
                    basicTopic("blood-relations", "Blood Relations", "Solve family relation questions.", "These questions need careful mapping of family connections.", ["Draw a small family tree.", "Track gender clues.", "Move one relation at a time."], "Father's sister is aunt."),
                    basicTopic("directions", "Direction Sense", "Track movement and final direction.", "Direction questions use north, south, east, west, and turns.", ["Draw arrows.", "Left/right depends on current direction.", "Use coordinates for distance."], "From north, a right turn faces east."),
                    basicTopic("seating", "Seating Arrangement", "Arrange people in rows or circles.", "Arrangement puzzles combine position clues and conditions.", ["Place fixed clues first.", "Use slots for uncertain positions.", "Eliminate impossible cases."], "If A is left of B in a row facing north, A is west of B."),
                    basicTopic("syllogism", "Syllogism", "Use logic statements and conclusions.", "Syllogisms test whether conclusions definitely follow from given statements.", ["Do not assume extra facts.", "Use Venn diagrams.", "Check definite conclusions only."], "All roses are flowers does not mean all flowers are roses.")
                ]
            },
            math: {
                label: "Math",
                icon: "fa-calculator",
                topics: [
                    basicTopic("algebra", "Algebra Basics", "Linear equations and expressions.", "Algebra uses symbols to represent unknown values.", ["Move like terms together.", "Do the same operation on both sides.", "Substitute to verify."], "x + 5 = 12 gives x = 7."),
                    basicTopic("geometry", "Geometry", "Angles, triangles, circles, and areas.", "Geometry questions use shapes, angles, and measurements.", ["Triangle angle sum is 180 degrees.", "Area of rectangle = l x b.", "Circle circumference = 2 pi r."], "A 5 x 4 rectangle has area 20 square units."),
                    basicTopic("mensuration", "Mensuration", "Area, volume, and surface area.", "Mensuration applies formulas to 2D and 3D figures.", ["Cube volume = side cubed.", "Cylinder volume = pi r squared h.", "Keep units consistent."], "Cube with side 3 has volume 27."),
                    basicTopic("probability", "Probability", "Basic chance and outcomes.", "Probability measures chance as favorable outcomes divided by total outcomes.", ["Probability ranges from 0 to 1.", "Favorable / total outcomes.", "For coins, heads/tails are equally likely."], "Probability of head in one coin toss is 1/2."),
                    basicTopic("permutation", "Permutation and Combination", "Counting arrangements and selections.", "Permutation is arrangement; combination is selection.", ["Use permutation when order matters.", "Use combination when order does not matter.", "n! means product from n to 1."], "ABC and BAC are different permutations.")
                ]
            },
            coding: {
                label: "Coding",
                icon: "fa-code",
                topics: [
                    basicTopic("arrays", "Arrays", "Indexing, traversal, search, and update.", "Arrays store multiple values in order and are accessed using indexes.", ["First index is often 0.", "Loop through elements.", "Track min, max, sum, or target."], "In [4, 8, 2], max value is 8."),
                    basicTopic("strings", "Strings", "Characters, substrings, and frequency.", "String questions test character handling and pattern checks.", ["Use length.", "Compare characters.", "Frequency maps help counting."], "In 'level', first and last characters match."),
                    basicTopic("loops", "Loops", "For loops, while loops, and nested loops.", "Loops repeat a block until a condition is complete.", ["Use for when count is known.", "Use while for condition-based repetition.", "Avoid infinite loops."], "A loop from 1 to 5 runs five times."),
                    basicTopic("functions", "Functions", "Parameters, return values, and reuse.", "Functions package logic so the same operation can be reused.", ["Inputs are parameters.", "Output is return value.", "Keep one clear job per function."], "add(2, 3) returns 5."),
                    basicTopic("complexity", "Time Complexity", "Understand O(1), O(n), and O(n squared).", "Complexity describes how runtime grows as input size grows.", ["Single lookup is O(1).", "One loop is O(n).", "Nested loops are often O(n squared)."], "Looping through 100 elements is linear work.")
                ]
            },
            verbal: {
                label: "Verbal",
                icon: "fa-font",
                topics: [
                    basicTopic("grammar", "Grammar", "Subject-verb agreement and sentence correction.", "Grammar questions check correctness and clarity.", ["Singular subject takes singular verb.", "Use base verb after does not.", "Keep tense consistent."], "She does not like tea is correct."),
                    basicTopic("vocabulary", "Vocabulary", "Synonyms, antonyms, and word usage.", "Vocabulary questions test meaning in context.", ["Read the sentence context.", "Eliminate opposite meanings.", "Learn common roots."], "Brief means short."),
                    basicTopic("reading", "Reading Comprehension", "Passage reading and inference.", "Comprehension questions test central idea, tone, facts, and inference.", ["Read question first.", "Find evidence in passage.", "Do not over-assume."], "If the passage says demand increased, the answer must follow that evidence."),
                    basicTopic("para-jumbles", "Para Jumbles", "Arrange sentences logically.", "Para jumbles test flow of ideas and connectors.", ["Find opening sentence.", "Track pronouns and references.", "Look for cause-effect flow."], "A definition sentence often comes before examples.")
                ]
            }
        };

        function basicTopic(id, title, summary, matter, points, example) {
            return {
                id,
                title,
                summary,
                matter,
                points,
                example,
                interviewRefs: interviewReferences(title),
                quizzes: [
                    [
                        {
                            q: `${title}: Which option best matches the concept?`,
                            options: ["Apply the basic rule", "Ignore the given data", "Guess randomly", "Use unrelated formula"],
                            answer: 0,
                            exp: `For ${title}, first apply the core rule from the study matter.`
                        },
                        {
                            q: `${title}: What is the best first step?`,
                            options: ["Read the values carefully", "Skip the question", "Change all numbers", "Choose the longest option"],
                            answer: 0,
                            exp: "The first step is to understand the data and identify the rule required."
                        }
                    ],
                    [
                        {
                            q: `${title}: Why should units or conditions be checked?`,
                            options: ["They affect the final answer", "They never matter", "They make all options equal", "They remove the need to solve"],
                            answer: 0,
                            exp: "Conditions and units decide which formula or logic should be used."
                        },
                        {
                            q: `${title}: What helps avoid mistakes?`,
                            options: ["Writing key data", "Ignoring clues", "Rushing the answer", "Avoiding verification"],
                            answer: 0,
                            exp: "Writing key data keeps the solution organized and reduces careless errors."
                        }
                    ],
                    [
                        {
                            q: `${title}: After solving, what should you do?`,
                            options: ["Check if the answer fits the question", "Close the question immediately", "Change the answer randomly", "Ignore all options"],
                            answer: 0,
                            exp: "A quick check confirms that the result is reasonable and matches the question."
                        },
                        {
                            q: `${title}: Practice improves which skill most?`,
                            options: ["Accuracy and speed", "Only handwriting", "Only guessing", "None"],
                            answer: 0,
                            exp: "Repeated practice builds both accuracy and speed."
                        }
                    ]
                ]
            };
        }

        function interviewReferences(title) {
            const companies = ["TCS NQT", "Infosys", "Wipro", "Accenture", "Cognizant", "Capgemini", "Deloitte", "HCL"];
            return [0, 1, 2].map((offset) => ({
                company: companies[(title.length + offset * 2) % companies.length],
                year: 2022 + offset,
                question: `${title}: Solve a placement-style question where the candidate must apply the core concept accurately under time pressure.`,
                info: "This is a representative practice reference based on common campus-placement patterns, useful for revision and interview screening preparation."
            }));
        }

        function sourceForQuestion(topic, setIndex, questionIndex) {
            const companies = ["TCS NQT", "Infosys", "Wipro", "Accenture", "Cognizant", "Capgemini", "Deloitte", "HCL", "Tech Mahindra", "LTIMindtree"];
            const company = companies[(topic.id.length + setIndex + questionIndex) % companies.length];
            const year = 2021 + ((setIndex + questionIndex) % 5);
            return {
                company,
                year,
                info: `Similar ${topic.title} pattern asked in ${company} placement practice around ${year}. Use this as interview-style preparation context, not an official repeated paper claim.`
            };
        }

        function slugify(value) {
            return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        }

        function arrangeOptions(correct, wrongOptions, answerIndex) {
            const options = wrongOptions.slice(0, 3);
            options.splice(answerIndex, 0, correct);
            return { options, answer: answerIndex };
        }

        function percentageQuestion(setIndex, questionIndex) {
            const seed = setIndex + 1;
            const type = questionIndex % 5;
            const answerIndex = (setIndex + questionIndex) % 4;

            if (type === 0) {
                const total = 80 + seed * 10 + questionIndex * 5;
                const percent = 10 + ((seed + questionIndex) % 8) * 5;
                const correct = (total * percent) / 100;
                const arranged = arrangeOptions(String(correct), [String(correct + 5), String(correct - 5), String(correct + 10)], answerIndex);
                return {
                    q: `Set ${seed}, Q${questionIndex + 1}: What is ${percent}% of ${total}?`,
                    ...arranged,
                    source: sourceForQuestion({ id: "aptitude-arithmetic-percentage", title: "Arithmetic: Percentage" }, setIndex, questionIndex),
                    exp: `${percent}% of ${total} = (${percent} / 100) x ${total} = ${correct}.`
                };
            }

            if (type === 1) {
                const original = 200 + seed * 20 + questionIndex * 10;
                const increase = 20 + ((seed + questionIndex) % 6) * 10;
                const newValue = original + increase;
                const correct = Math.round((increase / original) * 100);
                const arranged = arrangeOptions(`${correct}%`, [`${correct + 5}%`, `${Math.max(1, correct - 5)}%`, `${correct + 10}%`], answerIndex);
                return {
                    q: `Set ${seed}, Q${questionIndex + 1}: A value increases from ${original} to ${newValue}. What is the approximate percentage increase?`,
                    ...arranged,
                    source: sourceForQuestion({ id: "aptitude-arithmetic-percentage", title: "Arithmetic: Percentage" }, setIndex, questionIndex),
                    exp: `Increase = ${increase}. Percentage increase = (${increase} / ${original}) x 100 = about ${correct}%.`
                };
            }

            if (type === 2) {
                const finalValue = 120 + seed * 10 + questionIndex * 4;
                const percentLeft = 80;
                const original = (finalValue * 100) / percentLeft;
                const arranged = arrangeOptions(String(original), [String(original + 10), String(original - 10), String(original + 20)], answerIndex);
                return {
                    q: `Set ${seed}, Q${questionIndex + 1}: A number is decreased by 20% and becomes ${finalValue}. Find the original number.`,
                    ...arranged,
                    source: sourceForQuestion({ id: "aptitude-arithmetic-percentage", title: "Arithmetic: Percentage" }, setIndex, questionIndex),
                    exp: `After a 20% decrease, ${finalValue} is 80% of the original. Original = ${finalValue} x 100 / 80 = ${original}.`
                };
            }

            if (type === 3) {
                const marks = 45 + seed * 3 + questionIndex;
                const total = 75;
                const correct = Math.round((marks / total) * 100);
                const arranged = arrangeOptions(`${correct}%`, [`${correct + 4}%`, `${correct - 4}%`, `${correct + 8}%`], answerIndex);
                return {
                    q: `Set ${seed}, Q${questionIndex + 1}: A student scores ${marks} marks out of ${total}. What is the approximate percentage?`,
                    ...arranged,
                    source: sourceForQuestion({ id: "aptitude-arithmetic-percentage", title: "Arithmetic: Percentage" }, setIndex, questionIndex),
                    exp: `Percentage = (${marks} / ${total}) x 100 = about ${correct}%.`
                };
            }

            const marked = 500 + seed * 50 + questionIndex * 10;
            const discount = 10 + ((seed + questionIndex) % 4) * 5;
            const correct = marked - (marked * discount) / 100;
            const arranged = arrangeOptions(`Rs. ${correct}`, [`Rs. ${correct + 25}`, `Rs. ${correct - 25}`, `Rs. ${correct + 50}`], answerIndex);
            return {
                q: `Set ${seed}, Q${questionIndex + 1}: An item marked Rs. ${marked} is sold at ${discount}% discount. Find the selling price.`,
                ...arranged,
                source: sourceForQuestion({ id: "aptitude-arithmetic-percentage", title: "Arithmetic: Percentage" }, setIndex, questionIndex),
                exp: `Discount = ${discount}% of ${marked}. Selling price = ${marked} - discount = Rs. ${correct}.`
            };
        }


        function aptitudeSumQuestion(topic, setIndex, questionIndex) {
            const seed = setIndex + 1;
            const type = questionIndex % 5;
            const answerIndex = (setIndex + questionIndex) % 4;

            if (type === 0) {
                const a = 24 + seed + questionIndex;
                const b = 36 + seed * 2;
                const c = 40 + questionIndex * 2;
                const correct = Math.round((a + b + c) / 3);
                const arranged = arrangeOptions(String(correct), [String(correct + 3), String(correct - 2), String(correct + 6)], answerIndex);
                return { q: `Set ${seed}, Q${questionIndex + 1}: ${topic.title} sum - Find the average of ${a}, ${b}, and ${c}.`, ...arranged, source: sourceForQuestion(topic, setIndex, questionIndex), exp: `Average = (${a} + ${b} + ${c}) / 3 = ${correct}.` };
            }

            if (type === 1) {
                const cp = 400 + seed * 40 + questionIndex * 10;
                const profit = 10 + ((seed + questionIndex) % 5) * 5;
                const correct = cp + (cp * profit) / 100;
                const arranged = arrangeOptions(`Rs. ${correct}`, [`Rs. ${correct + 20}`, `Rs. ${correct - 20}`, `Rs. ${correct + 40}`], answerIndex);
                return { q: `Set ${seed}, Q${questionIndex + 1}: ${topic.title} sum - Cost price is Rs. ${cp}. If profit is ${profit}%, find selling price.`, ...arranged, source: sourceForQuestion(topic, setIndex, questionIndex), exp: `Selling price = CP + profit = ${cp} + ${profit}% of ${cp} = Rs. ${correct}.` };
            }

            if (type === 2) {
                const principal = 1000 + seed * 200;
                const rate = 5 + ((questionIndex + seed) % 5);
                const time = 2 + (questionIndex % 3);
                const correct = (principal * rate * time) / 100;
                const arranged = arrangeOptions(`Rs. ${correct}`, [`Rs. ${correct + 50}`, `Rs. ${correct - 25}`, `Rs. ${correct + 100}`], answerIndex);
                return { q: `Set ${seed}, Q${questionIndex + 1}: ${topic.title} sum - Find simple interest on Rs. ${principal} at ${rate}% for ${time} years.`, ...arranged, source: sourceForQuestion(topic, setIndex, questionIndex), exp: `SI = PRT / 100 = ${principal} x ${rate} x ${time} / 100 = Rs. ${correct}.` };
            }

            if (type === 3) {
                const speed = 40 + seed * 5;
                const time = 2 + (questionIndex % 4);
                const correct = speed * time;
                const arranged = arrangeOptions(`${correct} km`, [`${correct + 20} km`, `${correct - 10} km`, `${correct + 40} km`], answerIndex);
                return { q: `Set ${seed}, Q${questionIndex + 1}: ${topic.title} sum - A vehicle travels at ${speed} km/h for ${time} hours. Find distance.`, ...arranged, source: sourceForQuestion(topic, setIndex, questionIndex), exp: `Distance = speed x time = ${speed} x ${time} = ${correct} km.` };
            }

            const total = 60 + seed * 5 + questionIndex;
            const ratioA = 2 + (seed % 3);
            const ratioB = 3 + (questionIndex % 3);
            const correct = Math.round((ratioA / (ratioA + ratioB)) * total);
            const arranged = arrangeOptions(String(correct), [String(correct + 4), String(correct - 3), String(correct + 8)], answerIndex);
            return { q: `Set ${seed}, Q${questionIndex + 1}: ${topic.title} sum - Divide ${total} in the ratio ${ratioA}:${ratioB}. Find the first part approximately.`, ...arranged, source: sourceForQuestion(topic, setIndex, questionIndex), exp: `First part = ${ratioA}/(${ratioA}+${ratioB}) x ${total} = about ${correct}.` };
        }

        function reasoningProblemQuestion(topic, setIndex, questionIndex) {
            const seed = setIndex + 1;
            const type = questionIndex % 5;
            const answerIndex = (setIndex + questionIndex) % 4;

            if (type === 0) {
                const start = 2 + seed;
                const diff = 3 + (questionIndex % 4);
                const terms = [start, start + diff, start + diff * 2, start + diff * 3];
                const correct = start + diff * 4;
                const arranged = arrangeOptions(String(correct), [String(correct + diff), String(correct - 1), String(correct + 2)], answerIndex);
                return { q: `Set ${seed}, Q${questionIndex + 1}: ${topic.title} reasoning - Find the next number: ${terms.join(', ')}, ?`, ...arranged, source: sourceForQuestion(topic, setIndex, questionIndex), exp: `The difference is ${diff} each time, so the next number is ${correct}.` };
            }

            if (type === 1) {
                const shifts = 1 + ((seed + questionIndex) % 3);
                const correct = shifts === 1 ? 'DBU' : shifts === 2 ? 'ECV' : 'FDW';
                const arranged = arrangeOptions(correct, ['CAT', 'CBT', 'EAT'], answerIndex);
                return { q: `Set ${seed}, Q${questionIndex + 1}: ${topic.title} reasoning - If each letter in CAT is shifted by +${shifts}, what is the code?`, ...arranged, source: sourceForQuestion(topic, setIndex, questionIndex), exp: `Shift every letter forward by ${shifts}. CAT becomes ${correct}.` };
            }

            if (type === 2) {
                const north = 5 + seed;
                const east = 3 + (questionIndex % 5);
                const correct = Math.round(Math.sqrt(north * north + east * east));
                const arranged = arrangeOptions(`About ${correct} km`, [`About ${correct + 2} km`, `About ${correct - 1} km`, `About ${north + east} km`], answerIndex);
                return { q: `Set ${seed}, Q${questionIndex + 1}: ${topic.title} reasoning - A person walks ${north} km north and ${east} km east. Approximate shortest distance from start?`, ...arranged, source: sourceForQuestion(topic, setIndex, questionIndex), exp: `Use Pythagoras: distance = sqrt(${north}^2 + ${east}^2) = about ${correct} km.` };
            }

            if (type === 3) {
                const rank = 6 + questionIndex;
                const total = 30 + seed;
                const correct = total - rank + 1;
                const arranged = arrangeOptions(String(correct), [String(correct + 1), String(correct - 2), String(rank)], answerIndex);
                return { q: `Set ${seed}, Q${questionIndex + 1}: ${topic.title} reasoning - Riya ranks ${rank}th from the top in a class of ${total}. What is her rank from the bottom?`, ...arranged, source: sourceForQuestion(topic, setIndex, questionIndex), exp: `Rank from bottom = total - rank from top + 1 = ${total} - ${rank} + 1 = ${correct}.` };
            }

            const dayShift = 2 + ((seed + questionIndex) % 5);
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            const correct = days[dayShift % 7];
            const arranged = arrangeOptions(correct, ['Monday', 'Wednesday', 'Saturday'].filter((day) => day !== correct), answerIndex);
            while (arranged.options.length < 4) arranged.options.push('Sunday');
            return { q: `Set ${seed}, Q${questionIndex + 1}: ${topic.title} reasoning - If today is Monday, what day will it be after ${dayShift} days?`, ...arranged, source: sourceForQuestion(topic, setIndex, questionIndex), exp: `Move ${dayShift} days forward from Monday. The day is ${correct}.` };
        }

        function topicQuestion(topic, setIndex, questionIndex) {
            const stems = [
                "Which first step is best for this topic?",
                "Which habit improves accuracy most?",
                "What should you check before selecting an answer?",
                "Which method is most useful during practice?",
                "Why is revision important for this topic?",
                "What should you do after solving?",
                "Which approach is safest in a timed exam?",
                "What makes this topic placement-focused?",
                "Which action reduces careless mistakes?",
                "How should you handle confusing options?",
                "What is the best way to improve speed?",
                "What should be written before solving?",
                "Which practice style helps most?",
                "What is the role of explanation review?",
                "How should you prepare for the next attempt?"
            ];
            const correctAnswers = [
                `Read the ${topic.title} question carefully and identify the rule.`,
                "Practice with a timer and review every wrong answer.",
                "Check the given data, conditions, and required result.",
                "Apply the concept step by step instead of guessing.",
                "Revision keeps formulas, rules, and patterns fresh.",
                "Verify whether the answer fits the question.",
                "Eliminate clearly wrong options before final selection.",
                "It appears in screening tests and interview preparation.",
                "Writing key data before solving.",
                "Compare options with the rule or evidence.",
                "Repeat new question sets regularly.",
                "Important values, clues, formulas, or keywords.",
                "Mixed practice after learning the basic concept.",
                "It shows why the correct answer works.",
                "Start a new 15-question set and compare performance."
            ];
            const distractors = [
                ["Choose without reading", "Ignore the given values", "Use an unrelated shortcut"],
                ["Memorize only answers", "Skip explanations", "Avoid timed practice"],
                ["Only the option length", "The color of the button", "Nothing needs checking"],
                ["Guess quickly", "Use a random formula", "Ignore the topic matter"],
                ["It is not useful", "It replaces practice completely", "It removes the need for solving"],
                ["Move on without checking", "Change the answer randomly", "Ignore the question"],
                ["Mark the first option", "Skip all difficult questions forever", "Never review mistakes"],
                ["It is unrelated to placements", "It is only for decoration", "It never appears in tests"],
                ["Rushing the solution", "Skipping the question text", "Ignoring keywords"],
                ["Select the longest option", "Avoid the explanation", "Never compare choices"],
                ["Repeat the same solved answers only", "Avoid practice", "Never use a timer"],
                ["Nothing at all", "Only the final option", "Only the page title"],
                ["Reading without solving", "Guessing all answers", "Skipping basics"],
                ["It only shows decoration", "It hides the method", "It is never useful"],
                ["Repeat only the old set", "Stop practicing", "Clear the answer without review"]
            ];
            const answerIndex = (setIndex + questionIndex) % 4;
            const arranged = arrangeOptions(correctAnswers[questionIndex], distractors[questionIndex], answerIndex);

            return {
                q: `Set ${setIndex + 1}, Q${questionIndex + 1}: ${topic.title} - ${stems[questionIndex]}`,
                ...arranged,
                source: sourceForQuestion(topic, setIndex, questionIndex),
                exp: `${correctAnswers[questionIndex]} This is why ${topic.title} should be practiced with fresh questions and reviewed explanations.`
            };
        }

        function buildExamSet(topic, setIndex) {
            return Array.from({ length: 15 }, (_, index) => {
                if (topic.id === "aptitude-arithmetic-percentage") {
                    return percentageQuestion(setIndex, index);
                }

                if (topic.id.startsWith("aptitude-")) {
                    return aptitudeSumQuestion(topic, setIndex, index);
                }

                if (topic.id.startsWith("reasoning-")) {
                    return reasoningProblemQuestion(topic, setIndex, index);
                }

                return topicQuestion(topic, setIndex, index);
            });
        }

        function catalogTopic(category, section, topic) {
            const id = slugify(`${category}-${section}-${topic}`);
            const title = section ? `${section}: ${topic}` : topic;
            return basicTopic(
                id,
                title,
                `${topic} practice for ${category}.`,
                `${topic} is an important ${category.toLowerCase()} topic. Read the question carefully, identify the exact rule or pattern, solve step by step, and verify the answer before moving ahead. This topic appears often in placement tests, mock tests, and interview preparation rounds.`,
                [
                    `Understand the basic definition of ${topic}.`,
                    "Write the given data or clues before solving.",
                    "Apply the correct formula, grammar rule, logic rule, or coding concept.",
                    "Check the final answer with the question requirement."
                ],
                `Example: In a ${topic} question, first identify what is given, choose the correct method, solve neatly, and then compare the result with the options.`
            );
        }

        const fullCatalog = {
            aptitude: {
                label: "Aptitude",
                icon: "fa-square-root-variable",
                sections: {
                    "Number System": ["Divisibility", "HCF & LCM", "Simplification", "Surds & Indices", "Decimal Fractions"],
                    "Arithmetic": ["Percentage", "Profit & Loss", "Simple Interest", "Compound Interest", "Ratio & Proportion", "Partnership", "Average", "Ages", "Mixtures & Allegations"],
                    "Time-Based Problems": ["Time & Work", "Pipes & Cisterns", "Time, Speed & Distance", "Boats & Streams", "Trains"],
                    "Algebra": ["Linear Equations", "Quadratic Equations", "Logarithms", "Progressions"],
                    "Geometry & Mensuration": ["Lines & Angles", "Triangles", "Circles", "Polygons", "Area", "Volume", "Surface Area"],
                    "Modern Math": ["Probability", "Permutation & Combination", "Set Theory", "Statistics"],
                    "Data Interpretation": ["Tables", "Pie Charts", "Bar Graphs", "Line Graphs", "Caselets"]
                }
            },
            reasoning: {
                label: "Reasoning",
                icon: "fa-brain",
                sections: {
                    "Analytical Reasoning": ["Seating Arrangement", "Puzzles", "Blood Relations", "Direction Sense", "Order & Ranking", "Syllogisms"],
                    "Verbal Reasoning": ["Coding & Decoding", "Statement & Assumptions", "Statement & Conclusions", "Cause & Effect", "Assertion & Reason", "Course of Action"],
                    "Non-Verbal Reasoning": ["Mirror Images", "Water Images", "Paper Folding", "Figure Series", "Embedded Figures", "Cubes & Dice"],
                    "Critical Reasoning": ["Arguments", "Inference", "Logical Deduction", "Decision Making"],
                    "Miscellaneous": ["Clocks", "Calendars", "Alphabet Series", "Number Series", "Odd One Out"]
                }
            },
            verbal: {
                label: "Verbal",
                icon: "fa-font",
                sections: {
                    "Grammar": ["Parts of Speech", "Tenses", "Articles", "Prepositions", "Subject-Verb Agreement", "Active & Passive Voice", "Direct & Indirect Speech"],
                    "Vocabulary": ["Synonyms", "Antonyms", "One Word Substitution", "Idioms & Phrases", "Homophones", "Spelling Correction"],
                    "Reading Skills": ["Reading Comprehension", "Para Jumbles", "Sentence Arrangement", "Cloze Test"],
                    "Error Detection": ["Sentence Correction", "Error Spotting", "Fill in the Blanks"],
                    "Communication Skills": ["Email Writing", "Resume Vocabulary", "Business Communication", "Group Discussion Basics"]
                }
            },
            coding: {
                label: "Coding Aptitude",
                icon: "fa-code",
                sections: {
                    "Coding Aptitude": ["Arrays", "Strings", "Sorting", "Searching", "Recursion", "Dynamic Programming Basics"]
                }
            },
            placement: {
                label: "Placement Prep",
                icon: "fa-briefcase",
                sections: {
                    "Placement Preparation": ["Company-wise Questions", "Mock Tests", "Previous Year Papers", "HR Interview Questions", "Technical Interview Questions", "Self Introduction", "Strengths and Weaknesses", "Project Explanation"]
                }
            }
        };

        function buildTopicsFromCatalog(categoryKey) {
            const category = fullCatalog[categoryKey];
            const topics = [];

            Object.entries(category.sections).forEach(([section, names]) => {
                names.forEach((name) => {
                    if (categoryKey === "aptitude" && name === "Percentage") {
            const percentageTopic = topicData.aptitude.topics[0];
            percentageTopic.title = "Arithmetic: Percentage";
            percentageTopic.id = "aptitude-arithmetic-percentage";
            percentageTopic.summary = "Learn percentage change, marks percentage, discounts, and comparison questions.";
            percentageTopic.matter = "Percentage means per hundred. In placement exams and interviews, percentage appears in marks, discounts, salary hikes, population change, profit comparisons, and data interpretation. Always identify the base value first because percentage change is calculated on the original value. For increase questions, add the percentage to 100; for decrease questions, subtract it from 100. When a final value is given after change, reverse the calculation using the remaining or increased percentage.";
            percentageTopic.interviewRefs = [
                {
                    company: "TCS NQT",
                    year: 2023,
                    question: "A value is increased or decreased by a given percentage and the original value must be found.",
                    info: "This pattern checks reverse percentage understanding and is common in screening rounds."
                },
                {
                    company: "Accenture",
                    year: 2024,
                    question: "Find discount, selling price, or percentage change from marked price.",
                    info: "This helps students connect percentage with profit, loss, and business arithmetic."
                },
                {
                    company: "Infosys",
                    year: 2022,
                    question: "Convert marks obtained out of total marks into a percentage.",
                    info: "This is a basic accuracy question often used as a warm-up in aptitude sections."
                }
            ];
            topics.push(percentageTopic);
                    } else {
                        topics.push(catalogTopic(category.label, section, name));
                    }
                });
            });

            return topics;
        }

        Object.keys(fullCatalog).forEach((categoryKey) => {
            topicData[categoryKey] = {
                label: fullCatalog[categoryKey].label,
                icon: fullCatalog[categoryKey].icon,
                topics: buildTopicsFromCatalog(categoryKey)
            };
        });

        const companyNames = ["Infosys", "TCS", "Capgemini", "Accenture", "Wipro", "Cognizant", "HCLTech", "Tech Mahindra", "IBM", "Deloitte"];
        const companyQuestionBanks = {
            aptitude: [
                ["A shopkeeper gives 20% discount on a marked price of Rs. 1500. What is the selling price?", ["Rs. 1100", "Rs. 1200", "Rs. 1250", "Rs. 1300"], 1, "Selling price = 80% of 1500 = Rs. 1200."],
                ["The average of 5 numbers is 24. If one number 30 is removed, what is the new average?", ["21.5", "22.5", "23", "24"], 1, "Total is 120. After removing 30, remaining total is 90 and average is 90/4 = 22.5."],
                ["A train of 180 m crosses a pole in 12 seconds. Find its speed.", ["48 km/h", "52 km/h", "54 km/h", "60 km/h"], 2, "Speed = 180/12 = 15 m/s = 54 km/h."],
                ["If A can finish work in 12 days and B in 18 days, how many days together?", ["6.8", "7.2", "7.5", "8"], 1, "Together rate = 1/12 + 1/18 = 5/36, so time = 36/5 = 7.2 days."],
                ["Find the next number: 3, 8, 15, 24, 35, ?", ["44", "46", "48", "50"], 2, "Differences are 5, 7, 9, 11, so next difference is 13. Answer = 48."],
                ["A number is increased by 25% and becomes 500. Find the original number.", ["375", "400", "425", "450"], 1, "125% of original = 500, so original = 500 x 100/125 = 400."],
                ["The ratio of two numbers is 5:7 and their sum is 96. Find the larger number.", ["40", "48", "54", "56"], 3, "12 parts = 96, so 1 part = 8. Larger number = 7 x 8 = 56."],
                ["Simple interest on Rs. 4000 at 8% per annum for 2 years is:", ["Rs. 540", "Rs. 600", "Rs. 640", "Rs. 720"], 2, "SI = PRT/100 = 4000 x 8 x 2 / 100 = Rs. 640."],
                ["A bag has 3 red and 5 blue balls. Probability of picking a red ball is:", ["3/8", "5/8", "1/3", "3/5"], 0, "Total balls = 8 and red balls = 3, so probability is 3/8."],
                ["If 18 men complete a job in 10 days, how many men are needed to complete it in 6 days?", ["24", "28", "30", "36"], 2, "Men and days are inversely proportional: 18 x 10 / 6 = 30."]
            ],
            verbal: [
                ["Choose the synonym of 'Concise'.", ["Lengthy", "Brief", "Vague", "Weak"], 1, "Concise means brief and clear."],
                ["Choose the antonym of 'Expand'.", ["Increase", "Extend", "Contract", "Explain"], 2, "Contract means reduce or make smaller."],
                ["Identify the correct sentence.", ["He go to office.", "He goes to office.", "He going office.", "He gone to office."], 1, "With third-person singular subject, use 'goes'."],
                ["Fill in the blank: She is good ___ mathematics.", ["in", "at", "on", "for"], 1, "The correct phrase is 'good at'."],
                ["Choose the correctly spelled word.", ["Accomodate", "Acommodate", "Accommodate", "Accomadate"], 2, "The correct spelling is Accommodate."],
                ["Find the error: Each of the students have submitted the form.", ["Each", "students", "have", "form"], 2, "Each is singular, so use 'has'."],
                ["Choose the meaning of 'break the ice'.", ["Start conversation", "Stop work", "Create problem", "Ignore someone"], 0, "The idiom means to begin a conversation in a comfortable way."],
                ["Choose the passive voice: They completed the task.", ["The task completed them.", "The task was completed by them.", "They were completed by task.", "The task is complete them."], 1, "Object becomes subject and past passive uses 'was completed'."],
                ["Arrange logically: 1. Apply 2. Interview 3. Offer 4. Join", ["1-2-3-4", "2-1-3-4", "1-3-2-4", "4-1-2-3"], 0, "The normal placement order is apply, interview, offer, join."],
                ["Choose the one-word substitute for 'one who cannot be defeated'.", ["Invincible", "Invisible", "Inactive", "Invalid"], 0, "Invincible means impossible to defeat."]
            ],
            reasoning: [
                ["If A is brother of B and B is sister of C, how is A related to C?", ["Brother", "Sister", "Father", "Mother"], 0, "A is male and sibling of B; B and C are siblings, so A is brother of C."],
                ["Find the odd one out: 16, 25, 36, 49, 60", ["25", "36", "49", "60"], 3, "16, 25, 36, 49 are perfect squares; 60 is not."],
                ["If CAT is coded as DBU, then DOG is coded as:", ["EPH", "EOG", "CNG", "FPI"], 0, "Each letter is shifted by +1: D->E, O->P, G->H."],
                ["A person walks 5 km north, turns right and walks 3 km. Which direction is he facing?", ["North", "South", "East", "West"], 2, "Right turn from north means east."],
                ["Complete the series: A, C, F, J, O, ?", ["S", "T", "U", "V"], 2, "Letter jumps are +2, +3, +4, +5, so next is +6 = U."],
                ["In a row, Ravi is 7th from left and 9th from right. Total students?", ["14", "15", "16", "17"], 1, "Total = 7 + 9 - 1 = 15."],
                ["All roses are flowers. Some flowers fade quickly. Which conclusion follows?", ["All roses fade", "Some roses fade", "Some flowers are roses", "No rose is a flower"], 2, "Since all roses are flowers, at least some flowers are roses."],
                ["Mirror image of 12:30 on a clock is:", ["11:30", "12:30", "6:00", "5:30"], 0, "Mirror time = 11:60 - given time = 11:30."],
                ["If today is Monday, what day will it be after 45 days?", ["Tuesday", "Wednesday", "Thursday", "Friday"], 2, "45 mod 7 = 3, so Monday + 3 days = Thursday."],
                ["Find the missing number: 2, 6, 12, 20, 30, ?", ["38", "40", "42", "44"], 2, "Differences are 4, 6, 8, 10, so next difference is 12. Answer = 42."]
            ],
            technical: [
                ["Which data structure follows LIFO?", ["Queue", "Stack", "Array", "Graph"], 1, "Stack follows Last In First Out."],
                ["Which SQL command is used to remove all rows but keep table structure?", ["DROP", "TRUNCATE", "DELETE DATABASE", "ALTER"], 1, "TRUNCATE removes rows while keeping table structure."],
                ["Time complexity of binary search is:", ["O(n)", "O(log n)", "O(n log n)", "O(1)"], 1, "Binary search halves the search space each step."],
                ["Which OOP concept allows same method name with different arguments?", ["Inheritance", "Encapsulation", "Overloading", "Abstraction"], 2, "Method overloading uses same name with different parameters."],
                ["Which protocol is used for secure web communication?", ["HTTP", "FTP", "HTTPS", "SMTP"], 2, "HTTPS uses encryption over HTTP."],
                ["In JavaScript, which keyword declares a block-scoped variable?", ["var", "let", "static", "global"], 1, "let is block-scoped."],
                ["Which normal form removes partial dependency?", ["1NF", "2NF", "3NF", "BCNF"], 1, "2NF removes partial dependency."],
                ["Which testing checks individual units of code?", ["Unit testing", "System testing", "UAT", "Load testing"], 0, "Unit testing verifies small units like functions or classes."],
                ["Which sorting algorithm has average O(n log n) and uses divide-and-conquer?", ["Bubble sort", "Quick sort", "Linear search", "Insertion sort"], 1, "Quick sort divides the array around pivots."],
                ["Which keyword is used to handle exceptions in many languages?", ["catch", "print", "scan", "case"], 0, "catch handles thrown exceptions with try/catch."]
            ],
            coding: [
                ["Coding task: reverse a string without using built-in reverse. Best first step?", ["Sort characters", "Use two pointers", "Remove spaces", "Convert to number"], 1, "Two pointers swap characters from both ends."],
                ["Coding task: find the maximum element in an array. Minimum passes needed?", ["One pass", "Two passes", "n passes", "Cannot find"], 0, "Track the maximum while scanning once."],
                ["Coding task: check whether a number is prime. What divisors must be checked?", ["Only 1", "Up to n", "Up to sqrt(n)", "Only even numbers"], 2, "If a factor is larger than sqrt(n), the paired factor is smaller."],
                ["Coding task: count vowels in a string. Which condition is needed?", ["character in a,e,i,o,u", "character is digit", "character is uppercase only", "character is space"], 0, "Vowels are a, e, i, o, u; handle case if needed."],
                ["Coding task: remove duplicates from an array. Which structure is commonly useful?", ["Set", "Stack only", "Queue only", "Tree only"], 0, "A Set tracks already-seen values."],
                ["Coding task: find second largest element. What must be maintained?", ["smallest only", "largest and second largest", "sum only", "index only"], 1, "Track both largest and second largest values."],
                ["Coding task: palindrome string check. Which comparison is useful?", ["First with last", "Only middle", "Random pair", "Length only"], 0, "Compare matching characters from both ends."],
                ["Coding task: Fibonacci series. Which previous values are needed iteratively?", ["Last one only", "Last two", "All previous always", "None"], 1, "Each Fibonacci number is the sum of previous two."],
                ["Coding task: frequency of characters. Which structure is best?", ["Map/object", "Single variable", "Boolean only", "Stack only"], 0, "A map stores character counts."],
                ["Coding task: linear search. When can the loop stop?", ["After first element only", "When target is found", "Never", "Only after sorting"], 1, "Once the target is found, the answer is known."]
            ],
            interview: [
                ["Interview: How should you answer 'Tell me about yourself'?", ["Only personal family details", "Education, skills, project, goal", "Salary demand only", "One-word answer"], 1, "A strong answer connects education, skills, project work, and career goal."],
                ["Interview: Best way to explain a project?", ["Only title", "Problem, tech stack, role, result", "Only team size", "Say you forgot"], 1, "Project explanation should be structured and evidence-based."],
                ["Interview: How to answer strengths?", ["Give a strength with example", "Say no strengths", "Copy a quote", "Avoid answer"], 0, "A concrete example makes the strength believable."],
                ["Interview: How to answer weakness?", ["Give honest manageable weakness and improvement", "Say I have none", "Blame college", "Criticize team"], 0, "Mention improvement steps to show maturity."],
                ["Interview: What matters in HR communication?", ["Clarity and confidence", "Speaking very fast", "Arguing", "Using slang"], 0, "Clear, respectful communication is valued."],
                ["Interview: If you do not know an answer, what should you do?", ["Guess loudly", "Be honest and explain approach", "Stay silent", "Leave"], 1, "Honesty with a logical approach is better than bluffing."],
                ["Interview: Why do you want to join this company?", ["Connect role, learning, and company work", "Only salary", "Because friends applied", "No reason"], 0, "A role-focused answer sounds prepared."],
                ["Interview: What should you prepare before company interview?", ["Company basics, role, resume, projects", "Only jokes", "Only clothes", "Nothing"], 0, "Preparation includes company, role, resume, and project clarity."],
                ["Interview: How to handle stress question?", ["Give a real method and example", "Say never stressed", "Refuse", "Blame exams"], 0, "A real coping method and example shows self-awareness."],
                ["Interview: Best closing question to ask interviewer?", ["Ask about role expectations", "Ask personal questions", "Ask for answers", "Ask nothing always"], 0, "Role expectations show interest and professionalism."]
            ]
        };

        function makeCompanyRoundQuestions(company, round, count) {
            const pools = round.pools.flatMap((poolName) => companyQuestionBanks[poolName]);
            return Array.from({ length: count }, (_, index) => {
                const base = pools[index % pools.length];
                const section = round.pools[index % round.pools.length];
                return {
                    q: `${company} ${round.name} - ${base[0]}`,
                    options: base[1],
                    answer: base[2],
                    exp: `${company} model-paper practice: ${base[3]}`,
                    source: {
                        company,
                        year: 2026,
                        info: `${round.name} model question covering ${section}, designed for placement preparation.`
                    }
                };
            });
        }

        const companyPapers = companyNames.map((company) => ({
            company,
            rounds: [
                { name: "Round 1 Written Test", label: "Aptitude + Verbal + Reasoning", count: 30, time: 45, pools: ["aptitude", "verbal", "reasoning"] },
                { name: "Round 2 Technical MCQ", label: "Testing + CS fundamentals + coding aptitude", count: 25, time: 35, pools: ["technical", "coding"] },
                { name: "Round 3 Coding and Interview", label: "Coding scenarios + HR interview questions", count: 20, time: 40, pools: ["coding", "interview"] }
            ]
        }));

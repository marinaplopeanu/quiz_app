//typeahead for state -> same answers are based on state (all commended now)
const STORE = [
    //1
    {
        question: 'What is the supreme law of the land?',
        answers: ['the Supreme Court', 'the Bill of Rights', 'the Constitution', 'the President', 'the Declaration of Independence'],
        //indexOf asnwer 'the Constitution' = 2
        correctAnswer: [2]
    },
    //2
    {
        question: 'What does the Constitution do?',
        answers: ['sets up the government', 'defines America', 'defines the government', 'protects basic rights of Americans', 'sets up the government'],
        correctAnswer: [0, 2, 3]
    },
    //3
    {
        question: 'The idea of self-government is in the first three words of the Constitution. What are these words?',
        answers: ['liberty for all', 'we the citizens', 'justice for all', 'we the people', 'libety and happiness'],
        correctAnswer: [3]
    },
    //4
    {
        question: 'What is an amendment?',
        answers: ['rewriting the Constitution', 'part of the Electoral College', 'a vote in Congress', 'a change to the Constitution', 'the process by which Supreme Court Justices are chosen'],
        correctAnswer: [3]
    },
    //5
    {
        question: 'What do we call the first ten amendments to the Constitution?',
        answers: ['the Bill of Lading', 'the Bill of Rights', 'the List of Ten', 'the Ten Commandments', 'the Ten Amendments'],
        correctAnswer: [1]
    },
    //6
    {
        question: 'What is one right or freedom from the First Amendment?',
        answers: ['vote', 'religion', 'assembly', 'right to a speedy trial', 'right to bear arms'],
        correctAnswer: [1, 2]
    },
    //7
    {
        question: 'How many amendments does the Constitution have?',
        answers: ['2', '10', '20', '25', '27'],
        correctAnswer: [4]
    },
    //8
    {
        question: 'What did the Declaration of Independence do?',
        answers: ['announced our independence (from Great Britain)', 'declared our independence (from France)', 'formed a pact with Great Britain', 'ended the American Revolution', 'ended slavery'],
        correctAnswer: [0]
    },
    //9
    {
        question: 'What are two rights in the Declaration of Independence?',
        answers: ['Liberty', 'Life', 'Free speech', 'Pursuit of happiness', 'Free Press'],
        correctAnswer: [0, 1, 3]
    },
    //10
    {
        question: 'What is freedom of religion?',
        answers: ['You cannot practice any religion.', 'You must practice a state mandated religion.', 'Free speech', 'You can practice (or not practice) any religion, as long as it doesn\'t infringe on the rights of others.', 'Religion doesn\'t exist'],
        correctAnswer: [3]
    },
    //11
    {
        question: 'What is the economic system in the United States?',
        answers: ['Black market', 'Socialist', 'Capitalist, Free market', 'Communist', 'Underground railroad'],
        correctAnswer: [2]
    },
    //12
    {
        question: 'What is the "rule of law"?',
        answers: ['Everyone must follow the law.', 'Leaders must obey the law.', 'Government must obey the law.', 'No one is above the law.', 'All of the above.'],
        correctAnswer: [0, 1, 2, 3, 4]
    },
    //13
    {
        question: 'Name one branch or part of the government.',
        answers: ['Congress', 'Legislative', 'President', 'Executive', 'The Courts'],
        correctAnswer: [0, 1, 2, 3, 4]
    },
    //14
    {
        question: 'What stops one branch of government from becoming too powerful?',
        answers: ['Checks and balances', 'The U.S. Military', 'The President', 'Martial law', 'The Courts'],
        correctAnswer: [0]
    },
    //15
    {
        question: 'Who is in charge of the executive branch?',
        answers: ['The Commerce Secretary', 'The Supreme Court', 'Secretary of Defense', 'Martial law', 'The President'],
        correctAnswer: [4]
    },
    //16
    {
        question: 'Who makes federal laws?',
        answers: ['The FBI', 'The Supreme Court', 'The Attorney General', 'Congress', 'The Department of Justice'],
        correctAnswer: [3]
    },
    //17
    {
        question: 'What are the two parts of the U.S. Congress?',
        answers: ['Department of Justice, Department of Education', 'FBI, CIA', 'President, Supreme Court', 'Senate, House of Representatives', 'The Department of Justice, Congress'],
        correctAnswer: [3]
    },
    //18
    {
        question: 'How many U.S. Senators are there?',
        answers: ['99', '100', '50', '250', '435'],
        correctAnswer: [1]
    },
    //19
    {
        question: 'We elect a U.S. Senator for how many years?',
        answers: ['2', '4', '8', '10', '6'],
        correctAnswer: [4]
    },
    //20  =hide this. ask the state at the begining
    // {
    //     question: 'Who is one of your state’s U.S. Senators now?',
    //     answers: [Answers will vary.],
    //     correctAnswer: [4]
    // },
    //21
    {
        question: 'The House of Representatives has how many voting members? ',
        answers: ['435', '12', '100', '9', '6'],
        correctAnswer: [0]
    },
    //22
    {
        question: 'We elect a U.S. Representative for how many years?',
        answers: ['10', '4', '2', '1', '5'],
        correctAnswer: [2]
    },
    //23 =hide this. ask the state at the begining
    // {
    //     question: 'Name your U.S. Representative.',
    //     answers: [Answers will vary.],
    //     correctAnswer: [2]
    // },
    //24
    {
        question: 'Who does a U.S. Senator represent?',
        answers: ['All the people of the country', 'Half the people of their state', 'Half the people of the country', 'All the people of their state', 'Only the men of the state'],
        correctAnswer: [3]
    },
    //25
    {
        question: 'What determines the number of Representatives a state will have?',
        answers: ['Agriculture', 'Land mass', 'The Supreme Court', 'Population', 'Religion'],
        correctAnswer: [3]
    },
    //26
    {
        question: 'We elect a President for how many years?',
        answers: ['2', '4', '6', '8', '10'],
        correctAnswer: [1]
    },
    //27
    {
        question: 'In what month do we vote for President?',
        answers: ['January', 'May', 'November', 'July', 'September'],
        correctAnswer: [3]
    },
    //28
    {
        question: 'What is the name of the President of the United States now?',
        answers: ['Mike Pence', 'Emmanuel Macron', 'Justin Trudeau', 'Barack Obama', 'Donald Trump'],
        correctAnswer: [4]
    },
    //29
    {
        question: 'What is the name of the Vice President of the United States now?',
        answers: ['Mike Pence', 'Joe Biden', 'Dick Cheney', 'Hillary Clinton', 'Nancy Pelosi'],
        correctAnswer: [0]
    },
    //30
    {
        question: 'If the President can no longer serve, who becomes President?',
        answers: ['The Speaker of the House', 'The First Lady', 'The Secretary of State', 'The Vice President', 'A special election is held.'],
        correctAnswer: [3]
    },
    //31
    {
        question: 'If both the President and the Vice President can no longer serve, who becomes President?',
        answers: ['The Speaker of the House', 'The First Lady', 'The Secretary of State', 'The Vice President', 'A special election is held.'],
        correctAnswer: [0]
    },
    //32
    {
        question: 'Who is the Commander in Chief of the military?',
        answers: ['The Speaker of the House', 'The Secretary of Defense', 'The Secretary of State', 'The Vice President', 'The President'],
        correctAnswer: [4]
    },
    //33
    {
        question: 'Who signs bills to become laws?',
        answers: ['The President\'s secretary', 'The Attorney General', 'The First Lady', 'The Vice President', 'The President'],
        correctAnswer: [4]
    },
    //34
    {
        question: 'Who vetoes bills?',
        answers: ['The President', 'The Attorney General', 'The Speaker of the House', 'The Vice President', 'The Senate Majority Leader'],
        correctAnswer: [0]
    },
    //35
    {
        question: 'What does the President’s Cabinet do?',
        answers: ['They tell the President what he must do.', 'They make laws.', 'They advise the President.', 'Federal law enforcement', 'They clean the White House'],
        correctAnswer: [0]
    },
    //36
    {
        question: 'What are two Cabinet-level positions?',
        answers: ['Secretary of Agriculture, Secretary of Commerce', 'Secretary of Defense, Secretary of Education', 'Attorney General, Vice President', 'Secretary of Veterans Affairs, Secretary of Transportation', 'All of the above are correct'],
        correctAnswer: [0, 1, 2, 3, 4]
    },
    //37
    {
        question: 'What does the judicial branch do?',
        answers: ['Reviews and explains laws', 'Decide the Constitutionality of laws', 'Authorize military action', 'Federal law enforcement', 'They clean the White House'],
        correctAnswer: [0]
    },
    //38
    {
        question: 'What is the highest court in the United States?',
        answers: ['The U.S. Supreme Court', 'Federal Court', 'The Presidential Court', 'The Supreme Court', 'The Attorney General'],
        correctAnswer: [3]
    },
    //39
    {
        question: 'How many justices are on the Supreme Court?',
        answers: ['9', '18', '12', '6', '7'],
        correctAnswer: [0]
    },
    //40
    {
        question: 'Who is the Chief Justice of the United States now?',
        answers: ['Sonia Sotomayor', 'John Roberts', 'Clarence Thomas', 'Antonin Scalia', 'John Robertino'],
        correctAnswer: [1]
    },
    //41
    {
        question: 'Under our Constitution, some powers belong to the federal government. What is one power of the federal government ? ',
        answers: ['To print money', 'To create an army', 'To declare war', 'To make treaties', 'All of the above are correct'],
        correctAnswer: [0, 1, 2, 3, 4]
    },
    //42
    {
        question: 'Under our Constitution, some powers belong to the states. What is one power of the states?',
        answers: ['To make treaties', 'To declare war on other countries', 'To provide schooling and education', 'To establish and print currency', 'To create an army'],
        correctAnswer: [2]
    },
    //43 =>answer based on the state
    // {
    //     question: 'Who is the Governor of your state now?',
    //     answers: [Answers will vary.],
    //     correctAnswer: [2]
    // },
    //44
    // {
    //     question: 'What is the capital of your state?',
    //     answers: [Answers will vary.],
    //     correctAnswer: [2]
    // },
    //45
    {
        question: 'What are the two major political parties in the United States?',
        answers: ['Green and Republican', 'Republican and Libertarian', 'Democratic and Republican', 'Libertarian and Communist', 'Libertarian and Democratic'],
        correctAnswer: [3]
    },
    //46
    {
        question: 'What is the political party of the President now?',
        answers: ['Republican', 'Libertarian', 'Democratic', 'Communist', 'Green'],
        correctAnswer: [0]
    },
    //47
    {
        question: 'What is the name of the Speaker of the House of Representatives now?',
        answers: ['Nancy Pelosi', 'Joe Biden', 'Paul Ryan', 'Hillary Clinton', 'Donald Trump'],
        correctAnswer: [0]
    },
    //C: Rights and Responsibilities
    //48
    {
        question: 'There are four amendments to the Constitution about who can vote. Describe one of them',
        answers: ['Citizens eighteen (18) and older (can vote)', 'You don’t have to pay (a poll tax) to vote.', 'Any citizen can vote. (Women and men can vote.)', 'A male citizen of any race (can vote).', 'All of the above'],
        correctAnswer: [0, 1, 2, 3, 4]
    },
    //49
    {
        question: 'What is one responsibility that is only for United States citizens?',
        answers: ['Gun ownership', 'Serve on a jury', 'Mandatory military service', 'Pay a poll tax', 'Vote in a federal election'],
        correctAnswer: [1, 4]
    },
    //50
    {
        question: 'Name one right only for United States citizens',
        answers: ['Run for federal office', 'Serve on a jury', 'Mandatory military service', 'Pay a poll tax', 'Vote in a federal election'],
        correctAnswer: [0, 4]
    },
    //51
    {
        question: 'What are two rights of everyone living in the United States?',
        answers: ['Freedom of expression', 'Freedom of speech', 'Freedom of assembly', 'freedom of religion', 'All of the above'],
        correctAnswer: [0, 1, 2, 3, 4]
    },
    //52
    {
        question: 'What do we show loyalty to when we say the Pledge of Allegiance?',
        answers: ['The United States', 'The flag', 'The U.S. Military', 'Congress', 'The President'],
        correctAnswer: [0, 1]
    },
    //53
    {
        question: 'What is one promise you make when you become a United States citizen?',
        answers: ['Give up loyalty to other countries', 'Obey the laws of the United States', 'Defend the Constitution and laws of the United States', 'Serve in the U.S. military (if needed)', 'All of the above'],
        correctAnswer: [0, 1, 2, 3, 4]
    },
    //54
    {
        question: 'How old do citizens have to be to vote for President?',
        answers: ['21', '18', '16', '17', '23'],
        correctAnswer: [1]
    },
    //55
    {
        question: 'What are two ways that Americans can participate in their democracy?',
        answers: ['Vote', 'Join a political party', 'Help with a campaign', 'Join a civic group', 'All of the above'],
        correctAnswer: [0, 1, 2, 3, 4]
    },
    //56
    {
        question: 'When is the last day you can send in federal income tax forms?',
        answers: ['January 15', 'April 15', 'September 15', 'July 15', 'December 15'],
        correctAnswer: [1]
    },
    //57
    {
        question: 'When must all men register for the Selective Service?',
        answers: ['between eighteen (18) and twenty-six (26)', 'at age 16', 'at age 30', 'at age 27', 'anytime'],
        correctAnswer: [1]
    },
    //58
    {
        question: 'What is one reason colonists came to America?',
        answers: ['Freedom', 'To visit', 'Health care', 'Libraries', 'Religion'],
        correctAnswer: [0, 4]
    },
    //59
    {
        question: 'Who lived in America before the Europeans arrived?',
        answers: ['French', 'Native American Indians', 'Chinese', 'Vikings', 'Romans'],
        correctAnswer: [1]
    },
    //60
    {
        question: 'What group of people was taken to America and sold as slaves?',
        answers: ['Australians', 'Native American Indians', 'Mexicans', 'Vikings', 'Africans'],
        correctAnswer: [4]
    },
    //61
    {
        question: 'Why did the colonists fight the British?',
        answers: ['Because of high taxes', 'Because the British invaded Poland', 'Because they wanted a new King', 'They wanted freedom of religion', 'Because of slavery'],
        correctAnswer: [0]
    },
    //62
    {
        question: 'Who wrote the Declaration of Independence?',
        answers: ['George Washington', 'Thomas Jefferson', 'John Adams', 'Benjamin Franklin', 'Alexander Hamilton'],
        correctAnswer: [1]
    },
    //63
    {
        question: 'When was the Declaration of Independence adopted?',
        answers: ['September 17, 1789', 'July 1, 1776', 'July 4, 1776', 'December 7th, 1941', 'October 27, 1789'],
        correctAnswer: [2]
    },
    //64
    {
        question: 'There were 13 original states. Which one is one of the original.',
        answers: ['California', 'New Hampshire', 'Colorado', 'British Columbia', 'New Mexico'],
        correctAnswer: [1]
    },
    //65
    {
        question: 'What happened at the Constitutional Convention?',
        answers: ['The Constitution was written', 'The Magna Carta was signed.', 'The Declaration of Independence was written.', 'The Constitution was ratified.', 'A party was held'],
        correctAnswer: [0]
    },
    //66
    {
        question: 'What happened at the Constitutional Convention?',
        answers: ['1787', '1987', '1802', '1776', '1778'],
        correctAnswer: [0]
    },
    //67
    {
        question: 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers',
        answers: ['Thomas Jefferson', 'James Madison', 'George Washington', 'Benjamin Franklin', 'George Washington'],
        correctAnswer: [1]
    },
    //68
    {
        question: 'What is one thing Benjamin Franklin is famous for?',
        answers: ['Invented the Cotton Gin', 'Landed on the moon', 'Third President of the United States', 'Discovered gravity', 'First Postmaster General of the United States'],
        correctAnswer: [4]
    },
    //69
    {
        question: 'Who is the “Father of Our Country”?',
        answers: ['Thomas Jefferson', 'James Madison', 'George Washington', 'Benjamin Franklin', 'George Washington'],
        correctAnswer: [4]
    },
    //70
    {
        question: 'Who was the first President?',
        answers: ['Thomas Jefferson', 'James Madison', 'George Washington', 'Benjamin Franklin', 'George Washington'],
        correctAnswer: [4]
    },
    //71
    {
        question: 'What territory did the United States buy from France in 1803?',
        answers: ['Louisiana', 'Alaska', 'Canada', 'the Northwest Territory', 'Mexico'],
        correctAnswer: [1]
    },
    //72
    {
        question: 'Name one war fought by the United States in the 1800s.',
        answers: ['Civil War', 'World War II', 'Spanish-American War', 'The French and Indian War', 'World War I'],
        correctAnswer: [0]
    },
    //73
    {
        question: 'Name the U.S. war between the North and the South.',
        answers: ['The American Revolution', 'World War II', 'Spanish-American War', 'The French and Indian War', 'World War I'],
        correctAnswer: [0]
    },
    //74
    {
        question: 'Name one problem that led to the Civil War.',
        answers: ['Taxation without representation', 'Slavery', 'Religious freedom', 'Abortion', 'Agriculture'],
        correctAnswer: [1]
    },
    //75
    {
        question: 'What was one important thing that Abraham Lincoln did?',
        answers: ['Led the United States during the Civil War', 'Led the United States during the War of 1812', 'Invented the Cotton Gin', 'Freed the slaves', 'He was tall'],
        correctAnswer: [3]
    },
    //76
    {
        question: 'What did the Emancipation Proclamation do?',
        answers: ['Ended World War II', 'Created state borders', 'Ended the American Revolution', 'Freed the slaves', 'Ended World War I'],
        correctAnswer: [3]
    },
    //77
    {
        question: 'What did Susan B. Anthony do?',
        answers: ['Taught Helen Keller', 'Fought for women\'s rights', 'Invented the Polio vaccine', 'Discovered America', 'discovered electricity'],
        correctAnswer: [1]
    },
    //78
    {
        question: 'Name one war fought by the United States in the 1900s.',
        answers: ['The American Revolution', 'The War of 1812', 'World War I', 'The Civil War', 'World War II'],
        correctAnswer: [2, 4]
    },
    //79
    {
        question: 'Who was President during World War I?',
        answers: ['Richard M. Nixon', 'Woodrow Wilson', 'John F. Kennedy', 'Harry Truman', 'Thomas Jefferson'],
        correctAnswer: [1]
    },
    //80
    {
        question: 'Who was President during the Great Depression and World War II?',
        answers: ['Franklin Roosevelt', 'William Jefferson Clinton', 'Thomas Jefferson', 'Harry Truman', 'Thomas Jefferson'],
        correctAnswer: [0]
    },
    //81
    {
        question: 'Who did the United States fight in World War II?',
        answers: ['Japan, Germany, and Canada', 'England, Germany and Russia', 'Japan, Germany, and Italy', 'China, Japan and Turkey', 'Canada, France and Australia'],
        correctAnswer: [2]
    },
    //82
    {
        question: 'Before he was President, Eisenhower was a general. What war was he in?',
        answers: ['The American Revolution', 'World War I', 'The Korean War', 'World War II', 'The Civil War'],
        correctAnswer: [3]
    },
    //83
    {
        question: 'During the Cold War, what was the main concern of the United States?',
        answers: ['Climate Change', 'Communism', 'Capitalism', 'Energy Shortage', 'Hippy movement'],
        correctAnswer: [1]
    },
    //84
    {
        question: 'What movement tried to end racial discrimination?',
        answers: ['Animal Rights', 'Civil Rights', 'Gay Marriage', 'Women\'s Rights', 'Hippy movement'],
        correctAnswer: [1]
    },
    //85
    {
        question: 'What did Martin Luther King, Jr. do?',
        answers: ['Fought for higher minimum wage', 'Fought for civil rights', 'Fought for marriage equality', 'Fought for climate change', 'Fought for women\'s right to vote'],
        correctAnswer: [1]
    },
    //86
    {
        question: 'What major event happened on September 11, 2001, in the United States?',
        answers: ['the stock market crashed', 'terrorists attacked the United States', 'the Titanic sank', 'terrorists attacked London', 'terrorists attacked the Australia'],
        correctAnswer: [1]
    },
    //87
    {
        question: 'What is one American Indian tribe in the United States.',
        answers: ['Chitimacha', 'Hookah', 'Cherokee', 'Mohegan', 'Padron'],
        correctAnswer: [2]
    },
    //88
    {
        question: 'What are the two longest rivers in the United States?',
        answers: ['Missouri, Hudson', 'Missouri, Mississippi', 'Mississippi, Ohio', 'MOhio, Rio Grandeohegan', 'Amazon, Hudson'],
        correctAnswer: [1]
    },
    //89
    {
        question: 'What ocean is on the West Coast of the United States?',
        answers: ['Arctic', 'Atlantic', 'Indian', 'Pacific', 'Southern Ocean'],
        correctAnswer: [3]
    },
    //90
    {
        question: 'What ocean is on the West Coast of the United States?',
        answers: ['Arctic', 'Atlantic', 'Indian', 'Pacific', 'Southern Ocean'],
        correctAnswer: [1]
    },
    //91
    {
        question: 'Which is NOT a U.S. territory?',
        answers: ['Guam', 'Puerto Rico', 'American Samoa', 'Cuba', 'Northern Mariana Islands'],
        correctAnswer: [3]
    },
    //92
    {
        question: 'What is one state that borders Canada?',
        answers: ['Maine', 'Massachusetts', 'New Jersey', 'California', 'New York'],
        correctAnswer: [0]
    },
    //93
    {
        question: 'What is one state that borders Mexico?',
        answers: ['Mississippi', 'Massachusetts', 'Louisiana', 'California', 'Arizona'],
        correctAnswer: [3]
    },
    //94
    {
        question: 'What is the capital of the United States?',
        answers: ['New York, NY', ' Washington, D.C.', 'Los Angeles, CA', 'Miami, FL', 'San Francisco, CA'],
        correctAnswer: [1]
    },
    //95
    {
        question: 'Where is the Statue of Liberty?',
        answers: ['Liberty Island, NY', ' Washington, D.C.', 'Hoboken, NJ', 'Miami, FL', 'Staten Island, NY'],
        correctAnswer: [0]
    },
    //96
    {
        question: 'Why does the flag have 13 stripes?',
        answers: ['thirteen Founding Fathers', 'thirteen original flavors', 'a baker\'s dozen', 'thirteen original colonies', 'thirteen rivers'],
        correctAnswer: [3]
    },
    //97
    {
        question: 'Why does the flag have 50 stars?',
        answers: ['50 original signers', '50 founding fathers', '50 U.S. states', '50 original colonies', '50 original rivers'],
        correctAnswer: [2]
    },
    //98
    {
        question: 'What is the name of the national anthem?',
        answers: ['Star Spangled Banner', 'Forever She Waves', 'Home of the Brave', 'Land of the Free', 'Ave Maria'],
        correctAnswer: [0]
    },
    //99
    {
        question: 'When do we celebrate Independence Day?',
        answers: ['December 25', 'November 8', 'June 4', 'January 4', 'July 4'],
        correctAnswer: [4]
    },
    //100
    {
        question: 'Which ones are national U.S holidays?',
        answers: ['New Year’s Day', 'Presidents\' Day', ' Memorial Day', 'Independence Day', 'All off the above'],
        correctAnswer: [0, 1, 2, 3, 4]
    }
];

console.log(Object.keys(STORE));

//get a list of 10 random questions
function tenRandomQuestions(){
    let randomQuestions=[];
      for (let i = 0; i < STORE.length; i++) {
        console.log(STORE[i]);
        
      }
    //   return randomQuestions;
      
  }



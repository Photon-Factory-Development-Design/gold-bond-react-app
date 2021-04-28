import { base_url } from 'common/constant';

const questions = {
    questions: [
        {
            description: 'I NEED PRODUCTS SUITED FOR:',
            questions: [
                {
                    label: 'Skin Concern',
                    icon: `${base_url}/assets/images/skin-concern.svg`,
                    hoverIcon: `${base_url}/assets/images/skin-blue.svg`,
                    questions: [
                        {
                            question: 'Aging Skin',
                            label: 'Product Category',
                            questions: [
                                {
                                    question: 'Body',
                                    label: 'PRODUCT BENEFIT',
                                    questions: [
                                        {
                                            question: 'Minimizes Dark Spots',
                                            ASINS: ['B015HRFXKM']
                                        },
                                        {
                                            question: 'Firms Skin',
                                            ASINS: ['B00TZ8TH9I']
                                        },
                                        {
                                            question: 'Improves Crepey Skin',
                                            ASINS: ['B08CJ74R3S']
                                        }
                                    ]
                                },
                                {
                                    question: 'Neck & Chest',
                                    label: 'CONTAINS SPF',
                                    questions: [
                                        {
                                            question: 'Yes',
                                            ASINS: ['B07W8Z1TY7']
                                        },
                                        {
                                            question: 'No',
                                            ASINS: ['B01B5D3VOC']
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            question: 'Cracked skin',
                            label: 'Product Category',
                            questions: [
                                {
                                    question: 'Hands',
                                    ASINS: ['B07JBLZ62H']
                                },
                                {
                                    question: 'Feet',
                                    ASINS: ['B08TPGYM4L']
                                }
                            ]
                        },

                        {
                            question: 'Dry Skin',
                            label: 'ARE YOU DIABETIC?',
                            questions: [
                                {
                                    question: 'Yes',
                                    label: 'PRODUCT CATEGORY',
                                    questions: [
                                        {
                                            question: 'Body',
                                            ASINS: ['B00OCN96FQ']
                                        },
                                        {
                                            question: 'Feet',
                                            ASINS: ['B00AHH00O2']
                                        },
                                        {
                                            question: 'Hands',
                                            ASINS: ['B00OCN97DW']
                                        }
                                    ]
                                },
                                {
                                    question: 'No',
                                    label: 'SPECIALLY FOR MEN',
                                    questions: [
                                        {
                                            question: 'Yes',
                                            label: 'PRODUCT BENEFIT',
                                            questions: [
                                                {
                                                    question:
                                                        'Everyday Hydration',
                                                    ASINS: [
                                                        'B00OW9OTN4',
                                                        'B00AHH00MO',
                                                        'B00AHH00R4'
                                                    ]
                                                },
                                                {
                                                    question:
                                                        'Intensive Therapy',
                                                    ASINS: ['B013KPK71I']
                                                }
                                            ]
                                        },
                                        {
                                            question: 'No',
                                            label: 'PRODUCT CATEGORY',
                                            questions: [
                                                {
                                                    question:
                                                        'Face, Neck & Chest',
                                                    ASINS: ['B074KM543R']
                                                },
                                                {
                                                    question: 'Body',
                                                    label: 'PRODUCT FORM',
                                                    questions: [
                                                        {
                                                            question:
                                                                'Cream Oil',
                                                            ASINS: [
                                                                'B07WLNN8RQ'
                                                            ]
                                                        },
                                                        {
                                                            question: 'Lotion',
                                                            label:
                                                                'PRODUCT BENEFIT',
                                                            questions: [
                                                                {
                                                                    question:
                                                                        'Exfoilates, hydrates, and locks in moisture',
                                                                    ASINS: [
                                                                        'B07L9RTWRS',
                                                                        'B074MFDJRG'
                                                                    ]
                                                                },
                                                                {
                                                                    question:
                                                                        'Intensely hydrates',
                                                                    label:
                                                                        'FRAGANCE FREE',
                                                                    questions: [
                                                                        {
                                                                            question:
                                                                                'Yes',
                                                                            ASINS: [
                                                                                'B00H35BV2G'
                                                                            ]
                                                                        },
                                                                        {
                                                                            question:
                                                                                'No',
                                                                            ASINS: [
                                                                                'B008B9L6WS',
                                                                                'B001QFDTWO'
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    question:
                                                                        'Lightweight hydration',
                                                                    ASINS: [
                                                                        'B006TCTAEA'
                                                                    ]
                                                                },
                                                                {
                                                                    question:
                                                                        'Overnight hydration',
                                                                    ASINS: [
                                                                        'B07GVPCGJK'
                                                                    ]
                                                                },
                                                                {
                                                                    question:
                                                                        'Revitalizing',
                                                                    ASINS: [
                                                                        'B00182ERTO'
                                                                    ]
                                                                },
                                                                {
                                                                    question:
                                                                        'Softening',
                                                                    ASINS: [
                                                                        'B00NNIOU48',
                                                                        'B00OW9OU2O',
                                                                        'B001G8Y9VG'
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            question:
                                                                'Whipped Butter',
                                                            ASINS: [
                                                                'B074KM543R'
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    question: 'Feet',
                                                    label: 'PRODUCT BENEFIT',
                                                    questions: [
                                                        {
                                                            question:
                                                                'Exfoliates & hydrates',
                                                            ASINS: [
                                                                'B06VVP4CLP'
                                                            ]
                                                        },
                                                        {
                                                            question:
                                                                'Intensely hydrates',
                                                            ASINS: [
                                                                'B001MIZMIE'
                                                            ]
                                                        },
                                                        {
                                                            question: 'Softens',
                                                            ASINS: [
                                                                'B0073E7JFK'
                                                            ]
                                                        },
                                                        {
                                                            question:
                                                                'Soothes & cools',
                                                            ASINS: [
                                                                'B001ET78HY'
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    question: 'Hands',
                                                    label: 'CONTAINS SPF',
                                                    questions: [
                                                        {
                                                            question: 'Yes',
                                                            ASINS: [
                                                                'B08CJ2S9HJ'
                                                            ]
                                                        },
                                                        {
                                                            question: 'No',
                                                            ASINS: [
                                                                'B00A8S6HM4'
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            question: 'Eczema prone skin',
                            label: 'PRODUCT CATEGORY',
                            questions: [
                                {
                                    question: 'Body',
                                    label: 'PRODUCT FORM',
                                    questions: [
                                        {
                                            question: 'Cream',
                                            ASINS: ['B00WVHRE7W']
                                        },
                                        {
                                            question: 'Lotion',
                                            ASINS: ['B00OW9OTMK', 'B00GIHMOGW']
                                        }
                                    ]
                                },
                                {
                                    question: 'Hands',
                                    ASINS: ['B015SCP3A6']
                                }
                            ]
                        },
                        {
                            question: 'Itchy skin',
                            label: 'PRODUCT BENEFIT',
                            questions: [
                                {
                                    question: 'Numbs away pain & itch',
                                    ASINS: ['B00P2V1CDG']
                                },
                                {
                                    question: 'Relieves intense pain & itch',
                                    ASINS: []
                                },
                                {
                                    question: 'Relieves extra dry, itchy skin',
                                    ASINS: ['B003QB26MA']
                                },
                                {
                                    question: 'Relieves intense itch',
                                    ASINS: []
                                }
                            ]
                        },
                        {
                            question: 'Psoriasis prone skin',
                            ASINS: ['B01KVU94VY']
                        },
                        {
                            question: 'Rough & bumpy skin',
                            ASINS: ['B00MMKAM5E']
                        }
                    ]
                },
                {
                    label: 'Hand Sanitizer',
                    icon: `${base_url}/assets/images/hand-sanitizer.svg`,
                    hoverIcon: `${base_url}/assets/images/sanitizer-blue.svg`,
                    ASINS: ['B08NQH1Z66']
                },
                {
                    label: 'Anti-Chafing',
                    icon: `${base_url}/assets/images/chafing-yellow.svg`,
                    hoverIcon: `${base_url}/assets/images/chafing-blue.svg`,
                    ASINS: ['B007VC9DKI']
                },
                {
                    label: 'Powder/Spray',
                    icon: `${base_url}/assets/images/powder-spray.svg`,
                    hoverIcon: `${base_url}/assets/images/powder-blue.svg`,
                    questions: [
                        {
                            question: 'Body',
                            label: 'PRODUCT FORM',
                            questions: [
                                {
                                    question: 'Powder',
                                    label: 'SPECIFICALLY FOR MEN',
                                    questions: [
                                        {
                                            question: 'Yes',
                                            ASINS: ['B08W5GNXBG']
                                        },
                                        {
                                            question: 'No',
                                            label: 'PRODUCT BENEFIT',
                                            questions: [
                                                {
                                                    question: 'Baby Powder',
                                                    ASINS: ['B00126LXNO']
                                                },
                                                {
                                                    question:
                                                        'Medicated Extra Strength',
                                                    ASINS: ['B08W5F5X6Z']
                                                },
                                                {
                                                    question:
                                                        'Medicated Original Strength',
                                                    ASINS: [
                                                        'B08W5DTJQR',
                                                        'B08W5DK88Y'
                                                    ]
                                                },
                                                {
                                                    question: 'Non-Medicated',
                                                    ASINS: ['B012FUZ8NG']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    question: 'Powder Spray',
                                    label: 'SPECIFICALLY FOR MEN',
                                    questions: [
                                        {
                                            question: 'Yes',
                                            ASINS: ['B08W5FMHGG', 'B08W5DP75X']
                                        },
                                        {
                                            question: 'No',
                                            label: 'PRODUCT BENEFIT',
                                            questions: [
                                                {
                                                    question: 'No-mess spray',
                                                    ASINS: [
                                                        'B08W5F2H15',
                                                        'B08W5FL1BT'
                                                    ]
                                                },
                                                {
                                                    question: 'Sprays on clear',
                                                    ASINS: ['B08R5K6P28']
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            question: 'Foot',
                            label: 'PRODUCT FORM',
                            questions: [
                                {
                                    question: 'Powder',
                                    ASINS: ['B08W5DQXW9']
                                },
                                {
                                    question: 'Powder Spray',
                                    ASINS: ['B08W69NCD7']
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

export const getQuestion = (questionPath, index) => {
    let currentQuestions = questions;
    for (var i = 0; i <= index; i++) {
        if (questionPath.length <= i) {
            return null;
        }

        const questionIndex = questionPath[i];

        currentQuestions = currentQuestions.questions[questionIndex];
    }

    return currentQuestions;
};

export const checkYesNoQuestion = (question) => {
    return (
        question.questions.length === 2 &&
        question.questions[0].question === 'Yes' &&
        question.questions[1].question === 'No'
    );
};

export default questions;

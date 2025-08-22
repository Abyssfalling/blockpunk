// NTU Club Names Database - Direct from CSV data
const NTU_CLUBS = [
    // Academic Constituent Clubs
    "NIE Student Teachers' Club",
    "Students' Accountancy and Business Club",
    "Students' Art, Design and Media Club",
    "Students' Asian School of the Environment Club",
    "Students' Biological Sciences Club",
    "Students' Chemistry, Chemical Engineering and Biotechnology Club",
    "Students' Civil and Environmental Engineering Club",
    "Students' Communication and Information Club",
    "Students' Computing and Data Science Club",
    "Students' Electrical and Electronic Engineering Club",
    "Students' Humanities Club",
    "Students' Materials Science and Engineering Club",
    "Students' Mechanical and Aerospace Engineering Club",
    "Students' Medical Society",
    "Students' Physical and Mathematical Sciences Club",
    "Students' Social Sciences Club",
    
    // Non-Academic Constituent Clubs
    "Cultural Activities Club (CAC)",
    "NTU Sports Club (NTUSC)",
    
    // Special Interest Clubs
    "Chinese Society",
    "Heritage Club",
    "Japanese Appreciation Club",
    "Korean Cultural Society",
    "Malay Language and Cultural Society",
    "Nanyang Arts Ensemble",
    "Outdoor Adventure Club",
    "Sport Shooting Club",
    "Tamil Literary Society",
    "Biomedical Engineering Society – NTU Student Chapter",
    "Institute of Electrical and Electronic Engineers – NTU Student Branch",
    "Institution of Engineers Singapore – NTU Student Chapter",
    "Students for the Exploration and Development of Space (SEDS)",
    
    // Cultural Activities Club Member Clubs
    "DanceBreakers",
    "Chinese Dance",
    "DanceSport Academy",
    "Indian Dance",
    "Lindy Hop",
    "MJ Hip Hop",
    "Salsa",
    "En Sync",
    "Soul Funky Pop & Lock",
    "Chinese Drums",
    "Chinese Orchestra",
    "Choir",
    "Guitar Ensemble",
    "Harmonica Band",
    "Harmonix",
    "Jazz and Blues",
    "Piano Ensemble",
    "Symphony Orchestra",
    "Symphonic Band",
    "Martial Arts Dragon & Lion Dance Troupe",
    "Wushu",
    
    // NTU Sports Club Member Clubs
    "Lifesaving",
    "Sailing",
    "Scuba Diving",
    "Wakeboarding",
    "Windsurfing",
    "Aikido",
    "Brazilian Jiu-Jitsu",
    "Judo",
    "Muay Thai",
    "Shitoryu Karate",
    "Silat",
    "Archery",
    "Bowling",
    "Cheerleading",
    "Fencing",
    "Floorball",
    "Golf",
    "Ice Skating",
    "Inline Skating",
    "Runners' Club",
    "Snooker & Pool",
    "Sport Climbing",
    "Tennis",
    
    // Sustainability-Related Clubs
    "Earthlink NTU",
    "Engineers Without Borders NTU",
    "NTU Food Science & Technology Interest Club",
    "IES – NTU Student Chapter",
    "NTU Welfare Services Club",
    
    // School-Based Clubs (CCEB)
    "ANATA (Analytics and Data Science)",
    "Zymurgy Guild",
    "Project Food Waste Conversion (FWC)",
    "CCEB Graduate Student Club (CCEB-GSC)",
    "Biomedical Engineering Society (BMES)",
    "ECOs",
    
    // Graduate Students' Clubs
    "ADM Graduate Students' Club",
    "ASE Graduate Students' Club",
    "Biology Graduate Students' Club",
    "CEE Graduate Students' Club",
    "EEE Graduate Students' Club",
    "IGP Graduate Students' Club",
    "LKC Graduate Students' Club",
    "MAE Graduate Students' Club",
    "MSE Graduate Students' Club",
    "NBS Graduate Students' Club",
    "NIE Graduate Students' Club",
    "SCBE Graduate Students' Club",
    "SCSE Graduate Students' Club",
    "SPMS Graduate Students' Club",
    "SoH Graduate Students' Club",
    "SSS Graduate Students' Club",
    
    // School of Social Sciences Clubs
    "Social Sciences Club (SSS Club)",
    "Psychology Society",
    "Economics Sub-Club",
    "PPGA Sub-Club",
    "Sociology Sub-Club"
];

// NTU Location Database - Direct from facility data
const NTU_LOCATIONS = [
    // NORTH SPINE - Lecture Theatres
    "LT1 (502 seats) - NS3-02-09 (LEVEL 2, NEAR N1)",
    "TCT-LT Tan Chin Tuan Lecture Theatre (306 seats) - NS4-02-36 (LEVEL 2, OPP ADMIN BLDG)",
    "LT3 (240 seats) - NS4-02-32 (LEVEL 2, NEAR TCT-LT)",
    "LT4 (240 seats) - NS4-02-34 (LEVEL 2, BESIDE TCT-LT)",
    "LT5 (240 seats) - NS2-02-07 (LEVEL 2, NEAR CEE)",
    "LT6 (240 seats) - NS2-02-05 (LEVEL 2, BESIDE CEE)",
    "LT7 (240 seats) - NS1-02-03 (LEVEL 2, BESIDE CEE)",
    "LT8 (240 seats) - NS1-02-01 (LEVEL 2, NEAR TCT-LT)",
    "LT9 (122 seats) - NS4-04-39 (LEVEL 4, NEAR SCSE)",
    "LT10 (122 seats) - NS4-04-41 (LEVEL 4, NEAR SCSE)",
    "LT11 (122 seats) - NS2-04-15 (LEVEL 4, IN BET N1 & CEE)",
    "LT12 (122 seats) - NS2-04-13 (LEVEL 4, IN BET N1 & CEE)",
    "LT13 (122 seats) - NS2-04-11 (LEVEL 4, IN BET N1 & CEE)",
    "LT14 (122 seats) - NS2-04-09 (LEVEL 4, IN BET N1 & CEE)",
    "LT15 (122 seats) - NS1-04-07 (LEVEL 4, BESIDE CEE)",
    "LT16 (122 seats) - NS1-04-05 (LEVEL 4, NEAR CEE)",
    "LT17 (122 seats) - NS1-04-03 (LEVEL 4, NEAR CEE)",
    "LT18 (122 seats) - NS1-04-01 (LEVEL 4, NEAR CEE)",
    "LT19 (343 seats) - N2-B2A-01 (BASEMENT 2, N2)",
    "LT19A (577 seats) - LT19A-01-01 (LEVEL 1, NEAR CEE)",
    "LT1A (694 seats) - LT1A-01-01 (LEVEL 1, OPP MCDONALD'S)",
    "LT20 (343 seats) - N2-B2A-01 (BASEMENT 2, N2)",
    "LT2A (602 seats) - LT2A-01-01 (LEVEL 1, NEAR MAE)",
    
    // NORTH SPINE - Tutorial Rooms
    "TR+1 (36 seats) - NS4-05-79",
    "TR+2 (36 seats) - NS4-05-80",
    "TR+3 (36 seats) - NS4-05-81",
    "TR+4 (36 seats) - NS4-05-82",
    "TR+5 (36 seats) - NS4-05-83",
    "TR+6 (36 seats) - NS4-05-84",
    "TR+7 (36 seats) - NS4-05-85",
    "TR+8 (36 seats) - NS4-05-86",
    "TR+9 (36 seats) - NS4-05-87",
    "TR+15 (36 seats) - NS4-05-93",
    "TR+16 (36 seats) - NS4-05-94",
    "TR+17 (36 seats) - NS4-05-95",
    "TR+18 (36 seats) - NS4-05-96",
    "TR+19 (36 seats) - NS4-05-97",
    "TR+20 (36 seats) - NS4-05-98",
    "TR+21 (36 seats) - NS4-05-99",
    "TR+22 (36 seats) - NS4-05-100",
    "TR+23 (36 seats) - NS4-05-101",
    "TR+29 (36 seats) - NS2-05-22",
    "TR+30 (36 seats) - NS2-05-23",
    "TR+31 (36 seats) - NS2-05-24",
    "TR+32 (36 seats) - NS2-05-25",
    "TR+33 (36 seats) - NS2-05-26",
    "TR+34 (36 seats) - NS2-05-27",
    "TR+35 (36 seats) - NS2-05-28",
    "TR+36 (36 seats) - NS2-05-29",
    "TR+37 (36 seats) - NS2-05-30",
    "TRX43 (36 seats) - N2-B2A-05 (BASEMENT 2, N2)",
    "TRX44 (36 seats) - N2-B2A-06 (BASEMENT 2, N2)",
    
    // SCI BUILDING
    "LF-LT Lee Foundation Lecture Theatre (219 seats) - WKWSCI-01-LT1, WKWSCI (BET S1 & S2)",
    "CS-TR+7 (30 seats) - CS-02-18, WKWSCI (BETWEEN S1 & S2)",
    "CS-TR+8 (36 seats) - CS-02-21, WKWSCI (BETWEEN S1 & S2)",
    "CS-TR+9 (24 seats) - CS-03-31, WKWSCI (BETWEEN S1 & S2)",
    
    // SOUTH SPINE - Lecture Theatres
    "LHS-LT (111 seats) - LHS-01-04, THE HIVE",
    "LT22 (350 seats) - SS2-B2-07 (BASEMENT 2, NEAR LKC-LT)",
    "LT23 (350 seats) - SS2-B2-05 (BASEMENT 2, NEAR LKC-LT)",
    "LT24 (350 seats) - SS1-B2-03 (BASEMENT 2, BESIDE S2)",
    "LT25 (350 seats) - SS1-B2-01 (BASEMENT 2, BESIDE S1)",
    "LT26 (406 seats) - SS4-B2-33 (BASEMENT 2, BESIDE S4)",
    "LT27 (406 seats) - SS4-B2-31 (BASEMENT 2, BESIDE S3)",
    "LT28 (254 seats) - SS2-B1-17 (BASEMENT 1, NEAR S2)",
    "LT29 (254 seats) - SS2-B1-16 (BASEMENT 1, BESIDE S2)",
    "LKC-LT Lee Kong Chian Lecture Theatre (1010 seats) - SS3-B2-10 (B2, ABOVE CANTEEN)",
    "RECEP RM (10 seats) - SS3-B2-09 (B2, NEXT TO LKC-LT FOYER)",
    "FOYER (200 seats) - SS3-B2 (B2, IN FRONT OF LKC-LT)",
    "EXHIB GALY (200 seats) - SS3-B1-19 (B1, ABOVE LKC-LT FOYER)",
    "FN RM (200 seats) - SS3-B1-22 (B1, BESIDE EXHIB GALLERY)",
    
    // SOUTH SPINE - Tutorial Rooms (LHS)
    "LHS-TR+1 (30 seats) - LHS-B5-03, THE HIVE",
    "LHS-TR+10 (30 seats) - LHS-B4-09, THE HIVE",
    "LHS-TR+11 (30 seats) - LHS-B4-10, THE HIVE",
    "LHS-TR+12 (24 seats) - LHS-B4-11, THE HIVE",
    "LHS-TR+13 (30 seats) - LHS-B3-01, THE HIVE",
    "LHS-TR+14 (30 seats) - LHS-B3-02, THE HIVE",
    "LHS-TR+15 (30 seats) - LHS-B3-03, THE HIVE",
    "LHS-TR+16 (30 seats) - LHS-B3-04, THE HIVE",
    "LHS-TR+17 (30 seats) - LHS-B3-05, THE HIVE",
    "LHS-TR+18 (30 seats) - LHS-B3-06, THE HIVE",
    "LHS-TR+19 (30 seats) - LHS-B3-07, THE HIVE",
    "LHS-TR+2 (30 seats) - LHS-B4-01, THE HIVE",
    "LHS-TR+20 (30 seats) - LHS-B3-08, THE HIVE",
    "LHS-TR+21 (30 seats) - LHS-B3-09, THE HIVE",
    "LHS-TR+22 (30 seats) - LHS-B3-10, THE HIVE",
    "LHS-TR+23 (24 seats) - LHS-B3-11, THE HIVE",
    "LHS-TR+24 (36 seats) - LHS-B2-01, THE HIVE",
    "LHS-TR+25 (30 seats) - LHS-B2-02, THE HIVE",
    "LHS-TR+26 (30 seats) - LHS-B2-03, THE HIVE",
    "LHS-TR+27 (36 seats) - LHS-B2-04, THE HIVE",
    "LHS-TR+28 (36 seats) - LHS-B2-05, THE HIVE",
    "LHS-TR+29 (36 seats) - LHS-B2-06, THE HIVE",
    "LHS-TR+3 (30 seats) - LHS-B4-02, THE HIVE",
    "LHS-TR+30 (36 seats) - LHS-B2-07, THE HIVE",
    "LHS-TR+31 (36 seats) - LHS-B2-08, THE HIVE",
    "LHS-TR+32 (36 seats) - LHS-B2-09, THE HIVE",
    "LHS-TR+33 (36 seats) - LHS-B2-10, THE HIVE",
    "LHS-TR+34 (30 seats) - LHS-B2-11, THE HIVE",
    "LHS-TR+35 (36 seats) - LHS-B1-01, THE HIVE",
    "LHS-TR+36 (36 seats) - LHS-B1-02, THE HIVE",
    "LHS-TR+37 (36 seats) - LHS-B1-03, THE HIVE",
    "LHS-TR+38 (36 seats) - LHS-B1-04, THE HIVE",
    "LHS-TR+39 (36 seats) - LHS-B1-05, THE HIVE",
    "LHS-TR+4 (36 seats) - LHS-B4-03, THE HIVE",
    "LHS-TR+40 (36 seats) - LHS-B1-06, THE HIVE",
    "LHS-TR+41 (36 seats) - LHS-B1-07, THE HIVE",
    "LHS-TR+42 (36 seats) - LHS-B1-08, THE HIVE",
    "LHS-TR+43 (36 seats) - LHS-B1-09, THE HIVE",
    "LHS-TR+44 (36 seats) - LHS-B1-10, THE HIVE",
    "LHS-TR+45 (30 seats) - LHS-B1-11, THE HIVE",
    "LHS-TR+46 (30 seats) - LHS-01-05, THE HIVE",
    "LHS-TR+47 (60 seats) - LHS-02-01, THE HIVE",
    "LHS-TR+48 (36 seats) - LHS-02-02, THE HIVE",
    "LHS-TR+49 (60 seats) - LHS-02-03, THE HIVE",
    "LHS-TR+5 (30 seats) - LHS-B4-04, THE HIVE",
    "LHS-TR+50 (36 seats) - LHS-02-04, THE HIVE",
    "LHS-TR+51 (36 seats) - LHS-02-05, THE HIVE",
    "LHS-TR+52 (60 seats) - LHS-02-06, THE HIVE",
    "LHS-TR+53 (60 seats) - LHS-02-07, THE HIVE",
    "LHS-TR+54 (30 seats) - LHS-02-08, THE HIVE",
    "LHS-TR+55 (36 seats) - LHS-03-01, THE HIVE",
    "LHS-TR+56 Derek Goh Bak Heng Tutorial Room (60 seats) - LHS-03-02, THE HIVE",
    "LHS-TR+6 (30 seats) - LHS-B4-05, THE HIVE",
    "LHS-TR+7 (36 seats) - LHS-B4-06, THE HIVE",
    "LHS-TR+8 (30 seats) - LHS-B4-07, THE HIVE",
    "LHS-TR+9 (30 seats) - LHS-B4-08, THE HIVE",
    
    // SOUTH SPINE - Other Tutorial Rooms
    "TR+61 (36 seats) - SS1-B1-07",
    "TR+62 (36 seats) - SS1-B1-06",
    "TR+63 (36 seats) - SS1-B1-05",
    "TR+64 (36 seats) - SS1-B1-04",
    "TR+65 (36 seats) - SS1-B1-03",
    "TR+66 (36 seats) - SS1-B1-02",
    "TR+67 (36 seats) - SS1-B1-01",
    "TR+68 (36 seats) - SS1-B1-14",
    "TR+69 (36 seats) - SS1-B1-13",
    "TR+77 Dr Elsie Yu Chen Chee (1999) (36 seats) - SS4-B1-34",
    "TR+78 (36 seats) - SS4-B1-33",
    "TR+79 (36 seats) - SS4-B1-32",
    "TR+80 (36 seats) - SS4-B1-31",
    "TR+87 (30 seats) - SS4-B1-30",
    "TR+88 (36 seats) - SS2-01-09",
    "TR+89 (36 seats) - SS2-01-10",
    "TR+90 (36 seats) - SS2-01-11",
    "TR+91 (36 seats) - SS2-01-12",
    "TR+92 (36 seats) - SS2-01-13",
    "TR+93 (36 seats) - SS2-01-14",
    "TR+94 (36 seats) - SS2-01-15",
    "TR+95 (36 seats) - SS2-01-16",
    "TR+96 (36 seats) - SS2-01-17",
    "TR102 (75 seats) - SS1-01-02",
    "TR103 (75 seats) - SS1-01-01",
    "TR+106 (36 seats) - SS4-01-40",
    "TR+107 (36 seats) - SS4-01-39",
    "TR+108 (36 seats) - SS4-01-38",
    "TR+109 (36 seats) - SS4-01-37",
    "TR+110 (36 seats) - SS4-01-36",
    "TR+111 (36 seats) - SS4-01-35",
    "TR+112 (36 seats) - SS4-01-34",
    "TR+113 (36 seats) - SS4-01-33",
    "TR+114 (36 seats) - SS4-01-32",
    "TR120 (48 seats) - SS4-01-26",
    "TR121 (40 seats) - SS4-01-25",
    "TR+151 (30 seats) - S4-B2C-36 (NO HEXAGON TABLES)",
    "TR+152 (30 seats) - S4-B2C-38 (NO HEXAGON TABLES)",
    "TR+153 (30 seats) - S4-B2C-39 (NO HEXAGON TABLES)",
    "TR+154 (30 seats) - S4-B2C-41 (NO HEXAGON TABLES)",
    "TR+159 (30 seats) - S4-B2C-46 (NO HEXAGON TABLES)",
    "TR+160 (30 seats) - S4-B2C-48 (NO HEXAGON TABLES)",
    "TR+165 (30 seats) - S4-B2C-53 (NO HEXAGON TABLES)",
    "TR+166 (30 seats) - S4-B2C-55 (NO HEXAGON TABLES)",
    
    // THE ARC
    "LHN-LT (108 seats) - LHN-B1-15",
    "LHN-TR+01 (36 seats) - LHN-B2-01",
    "LHN-TR+02 (36 seats) - LHN-B2-02",
    "LHN-TR+03 (36 seats) - LHN-B2-03",
    "LHN-TR+04 (60 seats) - LHN-B2-04",
    "LHN-TR+05 (36 seats) - LHN-B2-05",
    "LHN-TR+06 (36 seats) - LHN-B2-06",
    "LHN-TR+07 (36 seats) - LHN-B2-07",
    "LHN-TR+08 (36 seats) - LHN-B2-08",
    "LHN-TR+09 (36 seats) - LHN-B2-09",
    "LHN-TR+10 (36 seats) - LHN-B2-10",
    "LHN-TR+11 (36 seats) - LHN-B2-11",
    "LHN-TR+12 (66 seats) - LHN-B2-12",
    "LHN-TR+13 (36 seats) - LHN-L1-01",
    "LHN-TR+14 (72 seats) - LHN-L1-02",
    "LHN-TR+15 (72 seats) - LHN-L1-03",
    "LHN-TR+16 (36 seats) - LHN-L1-04",
    "LHN-TR+17 (36 seats) - LHN-L1-05",
    "LHN-TR+18 (36 seats) - LHN-L1-06",
    "LHN-TR+19 (36 seats) - LHN-L1-07",
    "LHN-TR+20 (36 seats) - LHN-L1-08",
    "LHN-TR+21 (36 seats) - LHN-L1-09",
    "LHN-TR+22 (30 seats) - LHN-L1-10",
    "LHN-TR+23 (30 seats) - LHN-L1-11",
    "LHN-TR+24 (30 seats) - LHN-L1-12",
    "LHN-TR+25 (30 seats) - LHN-L1-13",
    "LHN-TR+26 (30 seats) - LHN-L1-14",
    "LHN-TR+27 (30 seats) - LHN-L1-15",
    "LHN-TR+28 (30 seats) - LHN-L1-16",
    "LHN-TR+29 (30 seats) - LHN-L1-17",
    "LHN-TR+30 (60 seats) - LHN-L1-18",
    "LHN-TR+31 (36 seats) - LHN-L1-19",
    "LHN-TR+32 (30 seats) - LHN-L1-20",
    "LHN-TR+33 (30 seats) - LHN-L1-21",
    "LHN-TR+34 (30 seats) - LHN-L1-22",
    "LHN-TR+35 (36 seats) - LHN-L2-01",
    "LHN-TR+36 (72 seats) - LHN-L2-02",
    "LHN-TR+37 (72 seats) - LHN-L2-03",
    "LHN-TR+38 (36 seats) - LHN-L2-04",
    "LHN-TR+39 (36 seats) - LHN-L2-05",
    "LHN-TR+40 (36 seats) - LHN-L2-06",
    "LHN-TR+41 (36 seats) - LHN-L2-07",
    "LHN-TR+42 (36 seats) - LHN-L2-08",
    "LHN-TR+43 (36 seats) - LHN-L2-09",
    "LHN-TR+44 (30 seats) - LHN-L2-10",
    "LHN-TR+45 (30 seats) - LHN-L2-11",
    "LHN-TR+46 (30 seats) - LHN-L2-12",
    "LHN-TR+47 (30 seats) - LHN-L2-13",
    "LHN-TR+48 (30 seats) - LHN-L2-14",
    "LHN-TR+49 (30 seats) - LHN-L2-15",
    "LHN-TR+50 (30 seats) - LHN-L2-16",
    "LHN-TR+51 (30 seats) - LHN-L2-17",
    "LHN-TR+52 (60 seats) - LHN-L2-18",
    "LHN-TR+53 (36 seats) - LHN-L2-19",
    "LHN-TR+54 (30 seats) - LHN-L2-20",
    "LHN-TR+55 (30 seats) - LHN-L2-21",
    "LHN-TR+56 (30 seats) - LHN-L2-22"
];

// API Configuration
const API_CONFIG = {
    BASE_URL: 'http://localhost:3001',
    ENDPOINTS: {
        GENERATE_POSTER: '/api/generate-poster',
        OPTIMIZE_PROMPT: '/api/optimize-prompt',
        GET_IMAGES: '/api/images',
        HEALTH_CHECK: '/api/health'
    },
    IMAGE_BASE_URL: 'http://localhost:3001'  // 图片基础URL
};

// Global variables
let currentPosterData = null;
let generatedPosters = null;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const colorInput = document.getElementById('themeColor');
    const colorPreview = document.getElementById('colorPreview');
    const resultContainer = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');
    
    // Initialize club name search functionality
    initializeClubSearch();
    
    // Initialize location search functionality
    initializeLocationSearch();
    
    // Real-time color picker preview
    colorInput.addEventListener('input', function() {
        colorPreview.textContent = this.value;
        colorPreview.style.color = this.value;
    });

    // Set default time (current time + 1 hour)
    const now = new Date();
    now.setHours(now.getHours() + 1);
    const defaultTime = now.toISOString().slice(0, 16);
    document.getElementById('activityTime').value = defaultTime;

    // Listen for changes in all input fields
    const inputFields = [
        { id: 'clubName', type: 'text' },
        { id: 'activityContent', type: 'textarea' },
        { id: 'posterStyle', type: 'select' },
        { id: 'activityTime', type: 'datetime' },
        { id: 'activityLocation', type: 'text' },
        { id: 'themeColor', type: 'color' }
    ];

    // Add listeners for each input field
    inputFields.forEach(field => {
        const element = document.getElementById(field.id);
        if (element) {
            element.addEventListener('input', function() {
                updatePageHint(field.id);
            });
            element.addEventListener('change', function() {
                updatePageHint(field.id);
            });
        }
    });

    // Update page hint display status
    function updatePageHint(fieldId) {
        const field = document.getElementById(fieldId);
        const pageSection = field.closest('.page-section');
        const pageHint = pageSection.querySelector('.page-hint');
        
        if (pageHint) {
            const value = field.value.trim();
            const isEmpty = !value || value === '';
            
            if (isEmpty) {
                pageHint.style.display = 'none';
            } else {
                pageHint.style.display = 'block';
            }
        }
    }

    // Initialize all page hint display status
    function initializePageHints() {
        inputFields.forEach(field => {
            updatePageHint(field.id);
        });
    }

    // Initialize after page loads
    setTimeout(initializePageHints, 100);
});

// Submit form function
function submitForm() {
    // Validate all fields
    const fields = [
        { id: 'clubName', name: 'Club Name' },
        { id: 'activityContent', name: 'Activity Content' },
        { id: 'posterStyle', name: 'Poster Style' },
        { id: 'activityTime', name: 'Activity Time' },
        { id: 'activityLocation', name: 'Activity Location' },
        { id: 'themeColor', name: 'Theme Color' }
    ];

    let isValid = true;
    let firstInvalidField = null;

    for (let field of fields) {
        const element = document.getElementById(field.id);
        const value = element.value.trim();
        
        if (!value) {
            isValid = false;
            if (!firstInvalidField) {
                firstInvalidField = { element, name: field.name };
            }
        }
    }

    if (!isValid) {
        showError(`Please fill in ${firstInvalidField.name}`);
        // Scroll to first unfilled field
        firstInvalidField.element.scrollIntoView({ behavior: 'smooth' });
        return;
    }

    // Collect form data
    const activityData = {
        clubName: document.getElementById('clubName').value,
        activityContent: document.getElementById('activityContent').value,
        posterStyle: document.getElementById('posterStyle').value,
        activityTime: document.getElementById('activityTime').value,
        activityLocation: document.getElementById('activityLocation').value,
        themeColor: document.getElementById('themeColor').value
    };

    // Display complete form information on page
    displayCompleteForm(activityData);
    
    // Display data in console
    console.log('=== Club Activity Information ===');
    console.log('Club Name:', activityData.clubName);
    console.log('Activity Content:', activityData.activityContent);
    console.log('Poster Style:', activityData.posterStyle);
    console.log('Activity Time:', activityData.activityTime);
    console.log('Activity Location:', activityData.activityLocation);
    console.log('Theme Color:', activityData.themeColor);
    console.log('================================');
    
    // Show success message
    showSuccessMessage();
    
    // Store current data for poster generation
    currentPosterData = activityData;
    
    // Start poster generation
    startPosterGeneration(activityData);
}

// Start poster generation process
async function startPosterGeneration(posterData) {
    try {
        // Show generation page
        showGenerationPage();
        
        // Check server health first
        const isHealthy = await checkServerHealth();
        if (!isHealthy) {
            throw new Error('Server is not available');
        }
        
        // Generate poster
        const result = await generatePoster(posterData);
        
        // Show results
        showResultsPage(result);
        
    } catch (error) {
        console.error('Poster generation failed:', error);
        showError('Poster generation failed: ' + error.message);
        hideGenerationPage();
    }
}

// Check server health
async function checkServerHealth() {
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.HEALTH_CHECK}`);
        const result = await response.json();
        return result.status === 'ok';
    } catch (error) {
        console.error('Health check failed:', error);
        return false;
    }
}

// Generate poster via API
async function generatePoster(posterData) {
    try {
        // Map poster style to backend format
        const mappedStyle = mapPosterStyle(posterData.posterStyle);
        
        const requestData = {
            clubName: posterData.clubName,
            activityContent: posterData.activityContent,
            posterStyle: mappedStyle,
            activityTime: posterData.activityTime,
            activityLocation: posterData.activityLocation,
            themeColor: posterData.themeColor
        };
        
        console.log('Sending poster generation request:', requestData);
        
        const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.GENERATE_POSTER}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        
        if (result.success) {
            generatedPosters = result.data;
            return result.data;
        } else {
            throw new Error(result.message || 'Poster generation failed');
        }
        
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
}

// Map frontend poster style to backend format
function mapPosterStyle(frontendStyle) {
    const styleMap = {
        'Modern Minimalist': 'modern',
        'Vintage Artistic': 'vintage',
        'Dynamic Energetic': 'cyberpunk',
        'Elegant Formal': 'academic',
        'Creative Artistic': 'handdrawn',
        'Tech Futuristic': 'cyberpunk'
    };
    return styleMap[frontendStyle] || 'modern';
}

// Show generation page
function showGenerationPage() {
    document.querySelector('.poster-generation-page').style.display = 'block';
    document.querySelector('.submit-page').style.display = 'none';
    
    // Scroll to generation page
    document.querySelector('.poster-generation-page').scrollIntoView({ behavior: 'smooth' });
    
    // Start progress animation
    startProgressAnimation();
}

// Hide generation page
function hideGenerationPage() {
    document.querySelector('.poster-generation-page').style.display = 'none';
}

// Start progress animation
function startProgressAnimation() {
    const progressFill = document.querySelector('.progress-fill');
    const statusText = document.querySelector('.status-text');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 90) progress = 90;
        
        progressFill.style.width = progress + '%';
        
        if (progress < 30) {
            statusText.textContent = 'Analyzing your requirements...';
        } else if (progress < 60) {
            statusText.textContent = 'Generating AI prompts...';
        } else if (progress < 90) {
            statusText.textContent = 'Creating your poster...';
        }
        
        if (progress >= 90) {
            clearInterval(interval);
        }
    }, 500);
}

// Show results page
function showResultsPage(posterData) {
    hideGenerationPage();
    
    // Display posters
    displayPosters(posterData.storedImages);
    
    // Display quality information
    displayQualityInfo(posterData.promptOptimization);
    
    // Show results page
    document.querySelector('.results-page').style.display = 'block';
    document.querySelector('.results-page').scrollIntoView({ behavior: 'smooth' });
}

// Display generated posters
function displayPosters(storedImages) {
    const container = document.getElementById('posterResults');
    container.innerHTML = '';
    
    if (!storedImages || storedImages.length === 0) {
        container.innerHTML = `
            <div class="no-posters">
                <div style="font-size: 48px; margin-bottom: 20px;">🖼️</div>
                <h3>No Posters Generated</h3>
                <p>No posters were generated. Please try again or check the console for errors.</p>
            </div>
        `;
        return;
    }
    
    storedImages.forEach((image, index) => {
        const posterDiv = document.createElement('div');
        posterDiv.className = 'poster-item';
        
        // 修复图片URL构建逻辑
        let imageUrl = '';
        if (image.publicPath) {
            // 如果有publicPath，使用完整的后端URL
            imageUrl = `${API_CONFIG.IMAGE_BASE_URL}${image.publicPath}`;
        } else if (image.originalUrl) {
            // 如果没有publicPath，使用原始URL
            imageUrl = image.originalUrl;
        } else {
            // 如果都没有，显示错误
            imageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
        }
        
        // 格式化文件大小
        const formatFileSize = (bytes) => {
            if (!bytes) return 'N/A';
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(1024));
            return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
        };
        
        // 格式化时间
        const formatDate = (dateString) => {
            if (!dateString) return 'N/A';
            try {
                const date = new Date(dateString);
                return date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
            } catch (e) {
                return dateString;
            }
        };
        
        posterDiv.innerHTML = `
            <div class="poster-header">
                <h3>🎨 Poster ${index + 1}</h3>
                <span class="poster-status ${image.localPath ? 'stored' : 'remote'}">
                    ${image.localPath ? 'Stored' : 'Remote'}
                </span>
            </div>
            
            <div class="poster-image">
                <img src="${imageUrl}" 
                     alt="Generated Poster ${index + 1}" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+'"
                     loading="lazy"/>
            </div>
            
            <div class="poster-info">
                <div class="info-row">
                    <span class="info-label">📁 Filename</span>
                    <span class="info-value">${image.filename || 'N/A'}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">🏢 Activity</span>
                    <span class="info-value">${image.activityName || 'N/A'}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">💾 Size</span>
                    <span class="info-value">${formatFileSize(image.size)}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">📅 Created</span>
                    <span class="info-value">${formatDate(image.created)}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">🔗 Image URL</span>
                    <span class="info-value url-display" title="${imageUrl}">
                        <small>${imageUrl.length > 50 ? imageUrl.substring(0, 50) + '...' : imageUrl}</small>
                    </span>
                </div>
            </div>
            
            <div class="poster-actions">
                <button onclick="downloadPoster('${imageUrl}', 'poster_${index + 1}_${image.activityName || 'NTU'}.png')" 
                        class="download-single-btn" 
                        title="Download this poster">
                    <span class="btn-icon">💾</span>
                    <span class="btn-text">Download</span>
                </button>
                <a href="${image.originalUrl || imageUrl}" 
                   target="_blank" 
                   class="view-original-btn"
                   title="View original image in new tab">
                    <span class="btn-icon">👁️</span>
                    <span class="btn-text">View</span>
                </a>
            </div>
        `;
        
        container.appendChild(posterDiv);
    });
}

// Display quality information
function displayQualityInfo(optimization) {
    const container = document.getElementById('qualityInfo');
    
    if (!optimization) {
        container.innerHTML = '<p>Quality information not available</p>';
        return;
    }
    
    const evaluation = optimization.qualityEvaluation;
    
    container.innerHTML = `
        <div class="quality-header">
            <h3>🎯 Prompt Quality Assessment</h3>
            <div class="quality-score">
                <span class="score-number">${evaluation.score}/${evaluation.maxScore}</span>
                <span class="score-grade ${evaluation.grade.toLowerCase()}">${evaluation.grade}</span>
                <span class="score-percentage">${evaluation.percentage}%</span>
            </div>
        </div>
        <div class="quality-breakdown">
            <div class="quality-item">
                <span class="quality-label">Clarity</span>
                <div class="quality-bar">
                    <div class="quality-fill" style="width: ${(evaluation.breakdown.clarity / 3) * 100}%"></div>
                </div>
                <span class="quality-value">${evaluation.breakdown.clarity}/3</span>
            </div>
            <div class="quality-item">
                <span class="quality-label">Specificity</span>
                <div class="quality-bar">
                    <div class="quality-fill" style="width: ${(evaluation.breakdown.specificity / 3) * 100}%"></div>
                </div>
                <span class="quality-value">${evaluation.breakdown.specificity}/3</span>
            </div>
            <div class="quality-item">
                <span class="quality-label">Balance</span>
                <div class="quality-bar">
                    <div class="quality-fill" style="width: ${(evaluation.breakdown.balance / 2) * 100}%"></div>
                </div>
                <span class="quality-value">${evaluation.breakdown.balance}/2</span>
            </div>
            <div class="quality-item">
                <span class="quality-label">Creativity</span>
                <div class="quality-bar">
                    <div class="quality-fill" style="width: ${(evaluation.breakdown.creativity / 2) * 100}%"></div>
                </div>
                <span class="quality-value">${evaluation.breakdown.creativity}/2</span>
            </div>
            <div class="quality-item">
                <span class="quality-label">Technical</span>
                <div class="quality-bar">
                    <div class="quality-fill" style="width: ${(evaluation.breakdown.technical / 2) * 100}%"></div>
                </div>
                <span class="quality-value">${evaluation.breakdown.technical}/2</span>
            </div>
        </div>
        <div class="optimization-details">
            <p><strong>Activity Type:</strong> ${optimization.activityType}</p>
            <p><strong>Style:</strong> ${optimization.style}</p>
            <p><strong>Prompt Length:</strong> ${optimization.positivePrompt.length} characters</p>
        </div>
    `;
}

// Download single poster
function downloadPoster(imageUrl, filename) {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Download all posters
function downloadAllPosters() {
    if (!generatedPosters || !generatedPosters.storedImages) {
        showError('No posters available for download');
        return;
    }
    
    generatedPosters.storedImages.forEach((image, index) => {
        // 修复图片URL构建
        let imageUrl = '';
        if (image.publicPath) {
            imageUrl = `${API_CONFIG.IMAGE_BASE_URL}${image.publicPath}`;
        } else if (image.originalUrl) {
            imageUrl = image.originalUrl;
        } else {
            console.error('No valid image URL found for poster', index + 1);
            return;
        }
        
        const filename = `poster_${index + 1}_${image.activityName}.png`;
        
        setTimeout(() => {
            downloadPoster(imageUrl, filename);
        }, index * 500); // Stagger downloads
    });
    
    showSuccessMessage('Download started for all posters');
}

// Generate more posters
function generateMorePosters() {
    if (!currentPosterData) {
        showError('No poster data available');
        return;
    }
    
    // Hide results page
    document.querySelector('.results-page').style.display = 'none';
    
    // Start new generation
    startPosterGeneration(currentPosterData);
}

// Back to form
function backToForm() {
    // Hide all pages
    document.querySelector('.poster-generation-page').style.display = 'none';
    document.querySelector('.results-page').style.display = 'none';
    
    // Show submit page
    document.querySelector('.submit-page').style.display = 'block';
    
    // Scroll to submit page
    document.querySelector('.submit-page').scrollIntoView({ behavior: 'smooth' });
}

// Reset form function
function resetForm() {
    // Clear all input fields
    document.getElementById('clubName').value = '';
    document.getElementById('activityContent').value = '';
    document.getElementById('posterStyle').value = '';
    document.getElementById('activityLocation').value = '';
    document.getElementById('themeColor').value = '#4CAF50';
    document.getElementById('colorPreview').textContent = '#4CAF50';
    
    // Set default time
    const now = new Date();
    now.setHours(now.getHours() + 1);
    const defaultTime = now.toISOString().slice(0, 16);
    document.getElementById('activityTime').value = defaultTime;
    
    // Hide all page hints
    document.querySelectorAll('.page-hint').forEach(hint => {
        hint.style.display = 'none';
    });
    
    // Scroll to first page
    document.querySelector('.welcome-section').scrollIntoView({ behavior: 'smooth' });
    
    // Show reset success message
    showResetMessage();
}

// Display complete form information
function displayCompleteForm(data) {
    const timeString = new Date(data.activityTime).toLocaleString('en-US');
    
    // Create result display container
    const resultContainer = document.createElement('div');
    resultContainer.className = 'complete-form-result';
    resultContainer.innerHTML = `
        <div class="result-header">
            <h3>📋 Complete Form Information</h3>
            <p>Your club activity information has been successfully collected</p>
        </div>
        <div class="result-grid">
            <div class="result-item">
                <span class="result-label">🏢 Club Name</span>
                <span class="result-value">${data.clubName}</span>
            </div>
            <div class="result-item">
                <span class="result-label">📝 Activity Content</span>
                <span class="result-value">${data.activityContent}</span>
            </div>
            <div class="result-item">
                <span class="result-label">🎨 Poster Style</span>
                <span class="result-value">${data.posterStyle}</span>
            </div>
            <div class="result-item">
                <span class="result-label">⏰ Activity Time</span>
                <span class="result-value">${timeString}</span>
            </div>
            <div class="result-item">
                <span class="result-label">📍 Activity Location</span>
                <span class="result-value">${data.activityLocation}</span>
            </div>
            <div class="result-item">
                <span class="result-label">🎨 Theme Color</span>
                <span class="result-value">
                    <span class="color-display" style="background-color: ${data.themeColor}"></span>
                    ${data.themeColor}
                </span>
            </div>
        </div>
        <div class="result-footer">
            <p>✅ Information has been successfully submitted to the system</p>
        </div>
    `;
    
    // Replace submit page content
    const submitPage = document.querySelector('.submit-page .page-content');
    submitPage.innerHTML = '';
    submitPage.appendChild(resultContainer);
}

// Show error message
function showError(message) {
    // Remove previous error prompt
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Create error prompt
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        color: #ff6b6b;
        background: rgba(255, 107, 107, 0.1);
        border: 1px solid rgba(255, 107, 107, 0.3);
        padding: 15px 25px;
        border-radius: 10px;
        text-align: center;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        z-index: 1000;
        animation: slideIn 0.5s ease-out;
    `;
    errorDiv.textContent = message;

    document.body.appendChild(errorDiv);

    // Auto remove after 3 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 3000);
}

// Show success message
function showSuccessMessage() {
    // Create success prompt
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.5s ease-out;
    `;
    successDiv.innerHTML = '✅ Information submitted successfully! Please check console output.';
    
    // Add animation style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(successDiv);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        successDiv.style.animation = 'slideOut 0.5s ease-in';
        successDiv.style.animationFillMode = 'forwards';
        
        const slideOutStyle = document.createElement('style');
        slideOutStyle.textContent = `
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(slideOutStyle);
        
        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 500);
    }, 3000);
}

// Show reset success message
function showResetMessage() {
    // Create reset success prompt
    const resetDiv = document.createElement('div');
    resetDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #2196F3, #1976D2);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.5s ease-out;
    `;
    resetDiv.innerHTML = '🔄 Form has been reset, please fill in the information again.';
    
    document.body.appendChild(resetDiv);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        resetDiv.style.animation = 'slideOut 0.5s ease-in';
        resetDiv.style.animationFillMode = 'forwards';
        
        setTimeout(() => {
            document.body.removeChild(resetDiv);
        }, 500);
    }, 3000);
}

// Club Search Functionality
function initializeClubSearch() {
    const clubNameInput = document.getElementById('clubName');
    const searchSuggestions = document.getElementById('searchSuggestions');
    
    if (!clubNameInput || !searchSuggestions) return;
    
    // Clubs are now directly available in the array
    console.log(`Initialized search with ${NTU_CLUBS.length} clubs`);
    
    let selectedIndex = -1;
    let filteredClubs = [];
    
    // Search function with fuzzy matching and first letter search
    function searchClubs(query) {
        if (!query || query.trim() === '') {
            return [];
        }
        
        const searchTerm = query.toLowerCase().trim();
        const results = [];
        
        NTU_CLUBS.forEach(club => {
            const clubLower = club.toLowerCase();
            
            // First letter search (check if query matches the beginning of any word)
            const words = clubLower.split(' ');
            const firstLetterMatch = words.some(word => word.startsWith(searchTerm));
            
            // Fuzzy search (check if all characters in query appear in order in club name)
            let fuzzyMatch = true;
            let lastIndex = -1;
            for (let char of searchTerm) {
                const index = clubLower.indexOf(char, lastIndex + 1);
                if (index === -1) {
                    fuzzyMatch = false;
                    break;
                }
                lastIndex = index;
            }
            
            // Include if either first letter or fuzzy match
            if (firstLetterMatch || fuzzyMatch) {
                results.push(club);
            }
        });
        
        // Sort results: first letter matches first, then fuzzy matches
        return results.sort((a, b) => {
            const aLower = a.toLowerCase();
            const bLower = b.toLowerCase();
            
            const aFirstLetter = aLower.split(' ').some(word => word.startsWith(searchTerm));
            const bFirstLetter = bLower.split(' ').some(word => word.startsWith(searchTerm));
            
            if (aFirstLetter && !bFirstLetter) return -1;
            if (!aFirstLetter && bFirstLetter) return 1;
            
            return aLower.localeCompare(bLower);
        });
    }
    
    // Highlight matching text
    function highlightText(text, query) {
        if (!query || query.trim() === '') return text;
        
        const searchTerm = query.toLowerCase();
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }
    
    // Display search suggestions
    function displaySuggestions(suggestions) {
        searchSuggestions.innerHTML = '';
        
        if (suggestions.length === 0) {
            searchSuggestions.innerHTML = '<div class="no-suggestions">No clubs found</div>';
            searchSuggestions.style.display = 'block';
            return;
        }
        
        suggestions.forEach((club, index) => {
            const item = document.createElement('div');
            item.className = 'search-suggestion-item';
            item.innerHTML = highlightText(club, clubNameInput.value);
            item.dataset.index = index;
            
            item.addEventListener('click', () => {
                clubNameInput.value = club;
                hideSuggestions();
                updatePageHint('clubName');
            });
            
            item.addEventListener('mouseenter', () => {
                clearSelection();
                selectedIndex = index;
                updateSelection();
            });
            
            searchSuggestions.appendChild(item);
        });
        
        searchSuggestions.style.display = 'block';
    }
    
    // Hide suggestions
    function hideSuggestions() {
        searchSuggestions.style.display = 'none';
        selectedIndex = -1;
    }
    
    // Clear selection
    function clearSelection() {
        const items = searchSuggestions.querySelectorAll('.search-suggestion-item');
        items.forEach(item => item.classList.remove('selected'));
    }
    
    // Update selection
    function updateSelection() {
        const items = searchSuggestions.querySelectorAll('.search-suggestion-item');
        items.forEach((item, index) => {
            if (index === selectedIndex) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });
    }
    
    // Input event handler
    clubNameInput.addEventListener('input', function() {
        const query = this.value.trim();
        
        if (query.length >= 1) {
            filteredClubs = searchClubs(query);
            displaySuggestions(filteredClubs);
        } else {
            hideSuggestions();
        }
        
        updatePageHint('clubName');
    });
    
    // Focus event handler
    clubNameInput.addEventListener('focus', function() {
        const query = this.value.trim();
        if (query.length >= 1) {
            filteredClubs = searchClubs(query);
            displaySuggestions(filteredClubs);
        }
    });
    
    // Blur event handler (with delay to allow clicking on suggestions)
    clubNameInput.addEventListener('blur', function() {
        setTimeout(() => {
            hideSuggestions();
        }, 200);
    });
    
    // Keyboard navigation
    clubNameInput.addEventListener('keydown', function(e) {
        const items = searchSuggestions.querySelectorAll('.search-suggestion-item');
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (selectedIndex < items.length - 1) {
                    selectedIndex++;
                    updateSelection();
                }
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                if (selectedIndex > 0) {
                    selectedIndex--;
                    updateSelection();
                }
                break;
                
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && filteredClubs[selectedIndex]) {
                    this.value = filteredClubs[selectedIndex];
                    hideSuggestions();
                    updatePageHint('clubName');
                }
                break;
                
            case 'Escape':
                hideSuggestions();
                break;
        }
    });
    
    // Click outside to hide suggestions
    document.addEventListener('click', function(e) {
        if (!clubNameInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
            hideSuggestions();
        }
    });
}

// Location Search Functionality
function initializeLocationSearch() {
    const locationInput = document.getElementById('activityLocation');
    const searchSuggestions = document.getElementById('locationSearchSuggestions');
    
    if (!locationInput || !searchSuggestions) return;
    
    // Locations are now directly available in the array
    console.log(`Initialized location search with ${NTU_LOCATIONS.length} locations`);
    
    let selectedIndex = -1;
    let filteredLocations = [];
    
    // Search function with fuzzy matching and first letter search
    function searchLocations(query) {
        if (!query || query.trim() === '') {
            return [];
        }
        
        const searchTerm = query.toLowerCase().trim();
        const results = [];
        
        NTU_LOCATIONS.forEach(location => {
            const locationLower = location.toLowerCase();
            
            // First letter search (check if query matches the beginning of any word)
            const words = locationLower.split(' ');
            const firstLetterMatch = words.some(word => word.startsWith(searchTerm));
            
            // Fuzzy search (check if all characters in query appear in order in location name)
            let fuzzyMatch = true;
            let lastIndex = -1;
            for (let char of searchTerm) {
                const index = locationLower.indexOf(char, lastIndex + 1);
                if (index === -1) {
                    fuzzyMatch = false;
                    break;
                }
                lastIndex = index;
            }
            
            // Include if either first letter or fuzzy match
            if (firstLetterMatch || fuzzyMatch) {
                results.push(location);
            }
        });
        
        // Sort results: first letter matches first, then fuzzy matches
        return results.sort((a, b) => {
            const aLower = a.toLowerCase();
            const bLower = b.toLowerCase();
            
            const aFirstLetter = aLower.split(' ').some(word => word.startsWith(searchTerm));
            const bFirstLetter = bLower.split(' ').some(word => word.startsWith(searchTerm));
            
            if (aFirstLetter && !bFirstLetter) return -1;
            if (!aFirstLetter && bFirstLetter) return 1;
            
            return aLower.localeCompare(bLower);
        });
    }
    
    // Highlight matching text
    function highlightText(text, query) {
        if (!query || query.trim() === '') return text;
        
        const searchTerm = query.toLowerCase();
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }
    
    // Display search suggestions
    function displaySuggestions(suggestions) {
        searchSuggestions.innerHTML = '';
        
        if (suggestions.length === 0) {
            searchSuggestions.innerHTML = '<div class="no-suggestions">No locations found</div>';
            searchSuggestions.style.display = 'block';
            return;
        }
        
        suggestions.forEach((location, index) => {
            const item = document.createElement('div');
            item.className = 'search-suggestion-item';
            item.innerHTML = highlightText(location, locationInput.value);
            item.dataset.index = index;
            
            item.addEventListener('click', () => {
                locationInput.value = location;
                hideSuggestions();
                updatePageHint('activityLocation');
            });
            
            item.addEventListener('mouseenter', () => {
                clearSelection();
                selectedIndex = index;
                updateSelection();
            });
            
            searchSuggestions.appendChild(item);
        });
        
        searchSuggestions.style.display = 'block';
    }
    
    // Hide suggestions
    function hideSuggestions() {
        searchSuggestions.style.display = 'none';
        selectedIndex = -1;
    }
    
    // Clear selection
    function clearSelection() {
        const items = searchSuggestions.querySelectorAll('.search-suggestion-item');
        items.forEach(item => item.classList.remove('selected'));
    }
    
    // Update selection
    function updateSelection() {
        const items = searchSuggestions.querySelectorAll('.search-suggestion-item');
        items.forEach((item, index) => {
            if (index === selectedIndex) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });
    }
    
    // Input event handler
    locationInput.addEventListener('input', function() {
        const query = this.value.trim();
        
        if (query.length >= 1) {
            filteredLocations = searchLocations(query);
            displaySuggestions(filteredLocations);
        } else {
            hideSuggestions();
        }
        
        updatePageHint('activityLocation');
    });
    
    // Focus event handler
    locationInput.addEventListener('focus', function() {
        const query = this.value.trim();
        if (query.length >= 1) {
            filteredLocations = searchLocations(query);
            displaySuggestions(filteredLocations);
        }
    });
    
    // Blur event handler (with delay to allow clicking on suggestions)
    locationInput.addEventListener('blur', function() {
        setTimeout(() => {
            hideSuggestions();
        }, 200);
    });
    
    // Keyboard navigation
    locationInput.addEventListener('keydown', function(e) {
        const items = searchSuggestions.querySelectorAll('.search-suggestion-item');
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (selectedIndex < items.length - 1) {
                    selectedIndex++;
                    updateSelection();
                }
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                if (selectedIndex > 0) {
                    selectedIndex--;
                    updateSelection();
                }
                break;
                
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && filteredLocations[selectedIndex]) {
                    this.value = filteredLocations[selectedIndex];
                    hideSuggestions();
                    updatePageHint('activityLocation');
                }
                break;
                
            case 'Escape':
                hideSuggestions();
                break;
        }
    });
    
    // Click outside to hide suggestions
    document.addEventListener('click', function(e) {
        if (!locationInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
            hideSuggestions();
        }
    });
}

// --- CENTRAL APPLICATION CORE DATA STRUCTURES ---
const stateManager = {
    isPremium: false,
    activeTab: 'dashboard',
    secretClicksCount: 0,
    isStudentLoggedIn: true
};

const papersCollection = [
    { id: 1, title: 'Plus Two Physics Previous Year Exam Paper', board: 'HSSLive Kerala / DHSE', year: 2024 },
    { id: 2, title: 'Class 10 SCERT Mathematics Model Question Pool', board: 'SCERT Kerala', year: 2025 },
    { id: 3, title: 'Plus One Chemistry Model Paper & Key', board: 'Education Observer Kerala', year: 2023 }
];

const scholarshipCollection = [
    { id: 1, title: 'National Merit Scholarship Program', amount: '₹50,000', deadline: '2026-08-15', eligibility: 'High School Seniors' },
    { id: 2, title: 'Women in STEM Grant & Scholarship', amount: '₹2,50,000', deadline: '2026-09-01', eligibility: 'Female undergraduates' },
    { id: 4, title: 'Vidyadhan Scholarship Kerala Program', amount: '₹10,000/yr', deadline: '2026-07-31', eligibility: 'Class 10 passed students' },
    { id: 5, title: 'INSPIRE Scholarship (DST Gov India)', amount: '₹80,000/yr', deadline: '2026-11-15', eligibility: 'Top 1% of Plus Two Science' }
];

// Document Object Model Lifecycle Target Execution
document.addEventListener("DOMContentLoaded", () => {
    // Lucide Icons Render Mapping
    lucide.createIcons();
    renderQuestionBank();
    renderScholarshipsMatrix();
    initializeCountdownScheduler();
});

// Toast System Controller Utility 
function displayToastAlert(message, type = 'success') {
    const toast = document.getElementById('toast-notification');
    const text = document.getElementById('toast-text');
    text.innerText = message;
    
    toast.className = `toast ${type}`;
    setTimeout(() => {
        toast.className = 'toast hidden';
    }, 4000);
}

// Router View Swapper Engine
function switchTab(targetTabId) {
    stateManager.activeTab = targetTabId;
    
    // UI Panels Visually Hide
    document.querySelectorAll('.tab-view').forEach(view => view.classList.add('hidden'));
    const targetView = document.getElementById(`view-${targetTabId}`);
    if (targetView) targetView.classList.remove('hidden');
    
    // Navigation Buttons Active Classes Map Fix
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const targetBtn = document.getElementById(`btn-${targetTabId}`);
    if (targetBtn) targetBtn.classList.add('active');
    
    // Dynamic Header Title Shift
    document.getElementById('active-tab-title').innerText = targetTabId.replace('-', ' ');
}

// Sidebar Mobile Responsive Swapper
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('hidden-mobile')) {
        sidebar.className = 'app-sidebar active-mobile';
    } else {
        sidebar.className = 'app-sidebar hidden-mobile';
    }
}

// Target Date Countdown System Logic
function initializeCountdownScheduler() {
    const clock = document.getElementById('countdown-clock');
    
    const targetDates = {
        physics: new Date("March 10, 2027 09:30:00").getTime(),
        math: new Date("March 15, 2027 09:30:00").getTime(),
        chemistry: new Date("March 18, 2027 09:30:00").getTime()
    };

    setInterval(() => {
        const subject = document.getElementById('countdown-subject').value;
        const target = targetDates[subject] || targetDates.physics;
        const delta = target - new Date().getTime();
        
        if (delta <= 0) {
            clock.innerText = "Examination phase commenced.";
            return;
        }
        
        const d = Math.floor(delta / (1000 * 60 * 60 * 24));
        const h = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((delta % (1000 * 60)) / 1000);
        
        clock.innerText = `${d} Days ${h}h ${m}m ${s}s Remaining`;
    }, 1000);
}

function changeSubjectCountdown() {
    displayToastAlert("Countdown schedule timeline mapped!");
}

// AI Curation Simulation Module
function generateAINotesLogic(event) {
    event.preventDefault();
    const prompt = document.getElementById('ai-prompt').value;
    const box = document.getElementById('ai-result');
    
    displayToastAlert("Curation engine processing data structures...", "success");
    
    setTimeout(() => {
        box.innerText = `EDUNEXA AUTONOMOUS AI ENGINE NOTE: "${prompt.toUpperCase()}"\n====================================================================\nGENERATION SCHEDULER: June 2026 | SCERT / DHSE Academic Standards\n\n1. CORE VALUE: Fundamental derivations mapping 8-12% total weights.\n2. EQUATIONS INDEX: ΔX / ΔT = λ * cos(θ) with unified limits.\n3. BLUEPRINT NOTES: Outline vector layout dimensions clearly to secure step marks.`;
        box.classList.remove('hidden');
        displayToastAlert("AI Guide Compiled Successfully!");
    }, 1500);
}

// Render Engine - Question Blueprint Banks
function renderQuestionBank() {
    const container = document.getElementById('papers-list-container');
    if (!container) return;
    
    container.innerHTML = papersCollection.map(p => `
        <div class="list-item-row">
            <div>
                <p style="font-size: 13px; font-weight: 700;">${p.title}</p>
                <p style="font-size: 10px; color: var(--text-secondary); margin-top: 2px;">${p.board} • ${p.year}</p>
            </div>
            <button onclick="displayToastAlert('Secure download engine initialized')" class="icon-btn">
                <i data-lucide="download" style="width: 16px; height: 16px;"></i>
            </button>
        </div>
    `).join('');
    lucide.createIcons();
}

// Render Engine - Active Scholarships Dynamic Matrix
function renderScholarshipsMatrix() {
    const container = document.getElementById('scholarship-container');
    if (!container) return;
    
    container.innerHTML = scholarshipCollection.map(s => `
        <div class="scholarship-card">
            <div>
                <span class="badge" style="background-color: #e0e7ff; color: var(--primary-color); font-size: 9px;">${s.amount} Grant</span>
                <h4 style="font-size: 14px; font-weight: 700; margin-top: 8px;">${s.title}</h4>
                <p style="font-size: 11px; color: var(--text-secondary); margin-top: 2px;">Eligibility: ${s.eligibility}</p>
            </div>
            <div class="scholarship-footer">
                <span class="text-danger">Deadline: ${s.deadline}</span>
                <button onclick="displayToastAlert('Redirecting securely to scholarship gateway')" class="link-action">Apply Now</button>
            </div>
        </div>
    `).join('');
}

// Assessment Interactive Matrix
function startMockAssessment() {
    document.getElementById('mock-test-area').classList.remove('hidden');
    displayToastAlert("Assessment platform initialized!");
}

function answerMockQuestion(isCorrect) {
    if (isCorrect) {
        displayToastAlert("Correct Response Recorded! (+1 Mark)");
    } else {
        displayToastAlert("Incorrect Selection Matrix", "error");
    }
}

// Performance Index SCERT Equation Module
function computeGPAMetrics(event) {
    event.preventDefault();
    const obtained = parseFloat(document.getElementById('gpa-obtained').value);
    const total = parseFloat(document.getElementById('gpa-total').value);
    const output = document.getElementById('gpa-output');
    
    if (obtained > total || total <= 0) {
        displayToastAlert("Data bounds exception mapping parameters", "error");
        return;
    }
    
    const ratio = (obtained / total) * 100;
    output.innerText = `Computed Ratio Scale: ${ratio.toFixed(1)}% | Estimated Target Status: ${ratio >= 80 ? 'A (Excellent Standing)' : 'B (Satisfactory Progress)'}`;
    output.classList.remove('hidden');
    displayToastAlert("Metrics compiled successfully!");
}

// Student User Switch Simulation
function toggleStudentAuth() {
    stateManager.isStudentLoggedIn = !stateManager.isStudentLoggedIn;
    const nameDisp = document.getElementById('profile-name-display');
    const avatar = document.getElementById('user-avatar');
    const link = document.getElementById('auth-toggle-link');
    
    if (stateManager.isStudentLoggedIn) {
        nameDisp.innerText = "Rahul Nair";
        avatar.innerText = "RN";
        link.innerText = "Change Student";
        displayToastAlert("Switched profile to student environment.");
    } else {
        nameDisp.innerText = "Guest Student";
        avatar.innerText = "G";
        link.innerText = "Sign In";
        displayToastAlert("Operating under global guest matrix.");
    }
}

// Backdoor Operational Setup Function
function handleSecretClick() {
    stateManager.secretClicksCount++;
    if (stateManager.secretClicksCount >= 5) {
        const badge = document.getElementById('session-badge');
        badge.innerText = "Operator Room Granted";
        badge.className = "badge badge-emerald";
        displayToastAlert("🤫 System backdoor unlocked! Admin state injected successfully.");
        stateManager.secretClicksCount = 0;
    }
}

/** Single source of truth: maps every imageKey used in data files to its public path. */
export const imageMap: Record<string, string> = {
    // ── Skills – Frontend ──────────────────────────────────────
    'skill-react': '/images/skills/reactjs.png',
    'skill-redux': '/images/skills/redux.png',
    'skill-nextjs': '/images/skills/nextjs.png',
    'skill-html': '/images/skills/html.png',
    'skill-css': '/images/skills/css.png',
    'skill-javascript': '/images/skills/javascript.png',
    'skill-bootstrap': '/images/skills/bootstrap.png',

    // ── Skills – Backend ───────────────────────────────────────
    'skill-nestjs': '/images/skills/nestjs.svg',
    'skill-nodejs': '/images/skills/nodejs.png',
    'skill-express': '/images/skills/express.png',
    'skill-firebase': '/images/skills/firebase.png',
    'skill-mysql': '/images/skills/mysql.png',

    // ── Skills – Android ───────────────────────────────────────
    'skill-java': '/images/skills/java.png',
    'skill-xml': '/images/skills/xml.png',
    'skill-android-studio': '/images/skills/android-studio.png',
    'skill-flutter': '/images/skills/flutter.png',

    // ── Skills – Other ─────────────────────────────────────────
    'skill-postman': '/images/skills/postman.png',
    'skill-vscode': '/images/skills/vscode.png',
    'skill-git': '/images/skills/git.png',
    'skill-github': '/images/skills/github-logo.png',
    'skill-linux': '/images/skills/linux.png',
    'skill-kafka': '/images/skills/kafka.svg',

    // ── Projects ───────────────────────────────────────────────
    'project-note-app': '/images/projects/note-app.png',
    'project-booking-care': '/images/projects/booking-care.png',
    'project-music': '/images/projects/music.png',
    'project-the-band': '/images/projects/the-band.png',
    'project-weather': '/images/projects/weather-app.png',
    'project-portfolio': '/images/projects/portfolio.png',

    // ── Company ────────────────────────────────────────────────
    'company-titkul': '/images/company/titkul.png',
    'company-sgod': '/images/company/sgod.png',

    // ── Education ──────────────────────────────────────────────
    'edu-uth': '/images/education/uth.jpg',

    // ── Avatar ─────────────────────────────────────────────────
    'avatar-main': '/images/avatar/main.jpg',
};

/** Returns the resolved public path for a given imageKey, or '' if not found. */
export function getImagePath(key: string): string {
    return imageMap[key] ?? '';
}

module.exports = {
    exportPathMap: async function () {
        return {
            '/': { page: '/' }, // Trang chính

            '/navigation': { page: '/navigation' }, // Section: Navigation
            '/about': { page: '/about' }, // Section: About
            '/experience': { page: '/experience' }, // Section: Experience
            '/skill': { page: '/skill' }, // Section: Skill
            '/education': { page: '/education' }, // Section: Education
            '/footer': { page: '/footer' }, // Section: Footer
            '/project': { page: '/project' }, // Section: Project
        };
    },
};

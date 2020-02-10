exports.seed = function (knex) {
    return knex('projects')
        .truncate()
        .then(() => {
            return knex('projects').insert([
                {
                    project_name: "Portfolio website",
                    project_description: "Re-design portfolio to load quicker and be up to date",
                    completed: false
                },
                {
                    project_name: "Resume",
                    project_description: "Re-write resume to contain relevant info",
                    completed: false
                },
                {
                    project_name: "React test",
                    project_description: "Review material for React test",
                    completed: false
                }
            ]);
        });
};
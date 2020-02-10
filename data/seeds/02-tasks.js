exports.seed = function (knex) {
    return knex('tasks')
        .truncate()
        .then(() => {
            return knex('tasks').insert([
                {
                    task_description: "Inspect portfolio code in dev tools",
                    task_notes: "Look for accessability issues",
                    task_completed: true,
                    project_id: 1
                },
                {
                    task_description: "Review JS files",
                    task_notes: "Find unused functions & fix inefficient processes to reduce lag",
                    task_completed: false,
                    project_id: 1
                },
                {
                    task_description: "Add most recent projects",
                    task_notes: null,
                    task_completed: false,
                    project_id: 1
                },
                {
                    task_description: "Delete resume",
                    task_notes: "Its bad, you need to reformat from scratch",
                    task_completed: true,
                    project_id: 2
                },
                {
                    task_description: "Get help",
                    task_notes: "Find a good career coach",
                    task_completed: false,
                    project_id: 2
                },
                {
                    task_description: "Update contact info & add relevant skills",
                    task_notes: null,
                    task_completed: false,
                    project_id: 2
                },
                {
                    task_description: "Deploy old projects",
                    task_notes: null,
                    task_completed: false,
                    project_id: 3
                },
                {
                    task_description: "Rewrite old project code",
                    task_notes: null,
                    task_completed: false,
                    project_id: 3
                },
                {
                    task_description: "Teach others",
                    task_notes: "The best way to learn is to help others!",
                    task_completed: false,
                    project_id: 3
                }
            ]);
        });
};

exports.up = async function (knex) {
    // Table of projects
    await knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name', 128)
                .notNullable();
            tbl.string('project_description', 255);
            tbl.boolean('completed?')
                .notNullable()
                .defaultTo(false);
        });

    // Table of resources
    await knex.schema
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name', 128)
                .notNullable();
            tbl.string('description', 255);
        });

    // Table of tasks
    await knex.schema
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('description', 255)
                .notNullable();
            tbl.string('notes')
            tbl.boolean('task_completed?')
                .notNullable()
                .defaultTo('false');
        });
};



exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};

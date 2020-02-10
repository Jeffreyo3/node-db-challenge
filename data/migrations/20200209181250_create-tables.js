
exports.up = async function (knex) {
    // Table of projects
    await knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name', 128)
                .notNullable();
            tbl.string('project_description', 255);
            tbl.boolean('completed')
                .notNullable()
                .defaultTo(false);
        });

    // Table of tasks
    await knex.schema
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('task_description', 255)
                .notNullable();
            tbl.string('task_notes')
            tbl.boolean('task_completed')
                .notNullable()
                .defaultTo('false');
            tbl.integer('project_id')
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        });

    // Table of resources
    await knex.schema
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name', 128)
                .unique()
                .notNullable();
            tbl.string('resource_description', 255);
        });


    // Intermediary table between projects and resources
    await knex.schema
        .createTable('project_resources', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        });
};



exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};

exports.seed = function (knex) {
    return knex('resources')
        .truncate()
        .then(() => {
            return knex('resources').insert([
                {
                    resource_name: 'VSCode',
                    resource_description: 'IDE'
                },
                {
                    resource_name: 'React JS',
                    resource_description: 'library'
                },
                {
                    resource_name: 'Google Docs',
                    resource_description: 'text editor and document creator'
                },
                {
                    resource_name: 'Google',
                    resource_description: 'search engine'
                },
                {
                    resource_name: 'Notebook',
                    resource_description: 'old-fashioned pen & paper for drafting notes'
                }
            ]);
        });
};
const { isDraft } = require('strapi-utils').contentTypes;

module.exports = {

    async create(data, { files } = {}) {
        const validData = await strapi.entityValidator.validateEntityCreation(
            strapi.models.application,
            data,
            { isDraft: isDraft(data, strapi.models.application) }
        );

        const entry = await strapi.query('application').create(validData);

        if (files) {
            // automatically uploads the files based on the entry and the model
            await strapi.entityService.uploadFiles(entry, files, {
                model: 'application',
                // if you are using a plugin's model you will have to add the `source` key (source: 'users-permissions')
            });
            return this.findOne({ id: entry.id });
        }

        return entry;
    },

    async update(params, data, { files } = {}) {
        const existingEntry = await strapi.query('application').findOne(params);

        const validData = await strapi.entityValidator.validateEntityUpdate(
            strapi.models.application,
            data,
            { isDraft: isDraft(existingEntry, strapi.models.application) }
        );

        const entry = await strapi.query('application').update(params, validData);

        if (files) {
            // automatically uploads the files based on the entry and the model
            await strapi.entityService.uploadFiles(entry, files, {
                model: 'application',
                // if you are using a plugin's model you will have to add the `source` key (source: 'users-permissions')
            });
            return this.findOne({ id: entry.id });
        }

        return entry;
    },

    find(params, populate) {

        // const result = await strapi.query('application').model((qb) => {
        //     qb.where('parent_id', !null)
        // })
        //     .fetchAll()
        return strapi.query('application').find(params, [
            // 'styleVersion',
            // 'lang',
            // 'styles',
            // 'version',
            'data',
            'pages',
            // 'pages.page_id',
            'pages.title_bar',
            'pages.title_bar.style',
            // 'pages.title_bar.components',
            'pages.bottom',
            'pages.bottom.style',
            'pages.bottom.items',
            'pages.bottom.items.action',
            'pages.body',
            'pages.body.style',
            'pages.body.base_comps',
            // 'pages.body.components.api',
            // 'pages.body.components.method',
            'pages.body.base_comps.on_success',
            'pages.body.base_comps.on_fail',
            'pages.body.base_comps.values',
            'pages.body.base_comps.style',
            'pages.body.base_comps.children_style',
            'pages.body.base_comps.action',
            'pages.body.base_comps.action.style',
            'pages.body.base_comps.actionAr',
            'pages.body.base_comps.actionAr.style',
            'pages.body.base_comps.api_call',
            'pages.body.base_comps.api_call.api',
            'pages.body.base_comps.api_call.api.param',
            'pages.body.base_comps.components',
            // 'pages.body.base_comps.components.input_type',
            // 'pages.body.base_comps.components.placeholder',
            // 'pages.body.base_comps.components.onChange',
            'pages.body.base_comps.components.values',
            'pages.body.base_comps.components.style',
            'pages.body.base_comps.components.action',
            'pages.body.base_comps.components.action.style',
            // 'pages.body.base_comps.components.actionAr',
            // 'pages.body.base_comps.components.actionAr.style',
            'pages.body.base_comps.components.api_call',
            'pages.body.base_comps.components.api_call.api',
            'pages.body.base_comps.components.api_call.api.param',

        ]);
    },

    findOne(params, populate) {
        return strapi.query('application').findOne(params, [
            // 'styleVersion',
            // 'lang',
            // 'styles',
            // 'version',
            'data',
            'pages',
            // 'pages.page_id',
            'pages.title_bar',
            'pages.title_bar.style',
            // 'pages.title_bar.components',
            'pages.bottom',
            'pages.bottom.style',
            'pages.bottom.items',
            'pages.bottom.items.action',
            'pages.body',
            'pages.body.style',
            'pages.body.base_comps',
            // 'pages.body.components.api',
            // 'pages.body.components.method',
            'pages.body.base_comps.on_success',
            'pages.body.base_comps.on_fail',
            'pages.body.base_comps.values',
            'pages.body.base_comps.style',
            'pages.body.base_comps.children_style',
            'pages.body.base_comps.action',
            'pages.body.base_comps.action.style',
            'pages.body.base_comps.actionAr',
            'pages.body.base_comps.actionAr.style',
            'pages.body.base_comps.api_call',
            'pages.body.base_comps.api_call.api',
            'pages.body.base_comps.api_call.api.param',
            'pages.body.base_comps.components',
            // 'pages.body.base_comps.components.input_type',
            // 'pages.body.base_comps.components.placeholder',
            // 'pages.body.base_comps.components.onChange',
            'pages.body.base_comps.components.values',
            'pages.body.base_comps.components.style',
            'pages.body.base_comps.components.action',
            'pages.body.base_comps.components.action.style',
            // 'pages.body.base_comps.components.actionAr',
            // 'pages.body.base_comps.components.actionAr.style',
            'pages.body.base_comps.components.api_call',
            'pages.body.base_comps.components.api_call.api',
            'pages.body.base_comps.components.api_call.api.param',
        ]);

    },
};
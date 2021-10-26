const { sanitizeEntity } = require('strapi-utils');

module.exports = {

    async create(ctx) {
        let entity;
        if (ctx.is("multipart")) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.application.create(data, { files });
        } else {
            entity = await strapi.services.application.create(ctx.request.body);
        }
        strapi.StrapIO.emit(this, "create", entity);

        // or send custom event
        // strapi.StrapIO.emitRaw("myroom", "myevent", entity);

        return sanitizeEntity(entity, { model: strapi.models.application });
    },

    async update(ctx) {
        const { id } = ctx.params;

        let entity;
        if (ctx.is("multipart")) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.application.update({ id }, data, {
                files,
            });
        } else {
            entity = await strapi.services.application.update(
                { id },
                ctx.request.body
            );
        }

        strapi.StrapIO.emit(this, "update", entity);

        return sanitizeEntity(entity, { model: strapi.models.application });
    },

    async find(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.application.search(ctx.query);
        } else {
            entities = await strapi.services.application.find(ctx.query);
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.application }));
    },

    async findOne(ctx){

        const { id } = ctx.params;

        const entity = await strapi.services.application.findOne({ id });
        const newEntity = sanitizeEntity(entity, { model: strapi.models.application });
        const removeEmptyOrNull = (obj) => {
            Object.keys(obj).forEach(k =>
                (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
                (obj[k] !== undefined && (obj[k] == null || (Array.isArray(obj[k]) && !obj[k].length))) && delete obj[k]
            );
            return obj;
        };


        return removeEmptyOrNull(newEntity);
    },

    async findVersion(ctx) {
        const { version } = ctx.params;

        const entity = await strapi.services.application.findOne({ version });

        const newEntity = sanitizeEntity(entity, { model: strapi.models.application });


        const removeEmptyOrNull = (obj) => {
            Object.keys(obj).forEach(k =>
                (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
                (obj[k] !== undefined && (obj[k] == null || (Array.isArray(obj[k]) && !obj[k].length))) && delete obj[k]
            );
            return obj;
        };


        return removeEmptyOrNull(newEntity);
    },
};
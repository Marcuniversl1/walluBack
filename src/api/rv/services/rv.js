'use strict';

/**
 * rv service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rv.rv');

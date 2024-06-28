"use strict";

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async findDoctors(ctx) {
    const doctors = await strapi
      .query("user", "users-permissions")
      .find({ role: "doctor" });
    return doctors.map((doctor) =>
      sanitizeEntity(doctor, {
        model: strapi.query("user", "users-permissions").model,
      })
    );
  },
};

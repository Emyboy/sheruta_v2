const knex = require("./Knex");

const schema = () => {
  // Users table
  knex.schema.hasTable("users").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("users", function(t) {
        t.increments("id").primary();
        t.string("fullname", 50).notNullable();
        t.string("username", 40)
          .notNullable()
          .unique();
        t.string("email", 90)
          .notNullable()
          .unique();
        t.string("phoneno", 90).notNullable();
        t.string("password", 90).notNullable();
        t.string("imageurl", 9999).defaultTo(
          "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/129-512.png"
        );
        t.string("bio", 90);
        t.boolean("sharing").defaultTo(false);
        t.boolean("mailing").defaultTo(false);
        t.boolean("uploading").defaultTo(false);
        t.timestamp("date").defaultTo(knex.fn.now());
      });
    }
  });

  // Apartment table
  knex.schema.hasTable("apartment").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("apartment", function(t) {
        t.increments("id").primary();
        t.string("area", 100).notNullable();
        t.string("street", 100).notNullable();
        t.string("fullstreet", 50).notNullable();
        t.integer("bedrooms").notNullable();
        t.integer("sittingrooms").notNullable();
        t.integer("toilets").notNullable();
        t.string("imageurl1", 999).notNullable();
        t.string("imageurl2", 999).notNullable();
        t.string("imageurl3", 999).notNullable();
        t.string("imageurl4", 999).notNullable();
        t.string("bio", 999).notNullable();
        t.string("name", 20)
          .notNullable()
          .unique();
        t.string("price", 20).notNullable();
        t.integer("squarefeet").notNullable();
        t.string("type", 20).defaultTo("Apartment");
        t.string("status", 20).defaultTo("For Sale");
        t.integer("cube").defaultTo(0);
        t.integer("views").defaultTo(0);
        t.jsonb("features").notNullable();
        t.string("paymentplan", 15)
          .notNullable()
          .defaultTo("Per Year");
        t.timestamp("date").defaultTo(knex.fn.now());
      });
    }
  });

  // Hostels table
  knex.schema.hasTable("hostel").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("hostel", function(t) {
        t.increments("id").primary();
        t.string("area", 100).notNullable();
        t.jsonb("features").notNullable();
        t.string("street", 100).notNullable();
        t.string("fullstreet", 50).notNullable();
        t.integer("bedrooms").notNullable();
        t.integer("sittingrooms").notNullable();
        t.integer("toilets").notNullable();
        t.string("imageurl1", 999).notNullable();
        t.string("imageurl2", 999).notNullable();
        t.string("imageurl3", 999).notNullable();
        t.string("imageurl4", 999).notNullable();
        t.string("bio", 999).notNullable();
        t.string("name", 20)
          .notNullable()
          .unique();
        t.string("price", 20).notNullable();
        t.string("paymentplan", 15)
          .notNullable()
          .defaultTo("Per Year");
        t.integer("squarefeet");
        t.string("type", 20).defaultTo("Hostel");
        t.string("status", 20).defaultTo("For Sale");
        t.integer("cube").defaultTo(0);
        t.integer("views").defaultTo(0);
        t.timestamp("date").defaultTo(knex.fn.now());
      });
    }
  });

  //Student
  knex.schema.hasTable("student").then(exists => {
    if (!exists) {
      return knex.schema.createTable("student", t => {
        t.increments("id").primary();
        t.string("area", 100).notNullable();
        t.string("fullstreet", 50).notNullable();
        t.jsonb("features").notNullable();
        t.string("imageurl1", 999).notNullable();
        t.string("imageurl2", 999).notNullable();
        t.string("imageurl3", 999).notNullable();
        t.string("imageurl4", 999).notNullable();
        t.string("price", 20).notNullable();
        t.string("type", 20).defaultTo("Student");
        t.string("status", 20).notNullable();
        t.string("bio", 999).notNullable();
        t.string("name", 20)
          .notNullable()
          .unique();
        t.string("paymentplan", 15).notNullable();
        t.integer("cube").defaultTo(0);
        t.integer("views").defaultTo(0);
        t.integer("occupant").defaultTo(0);
        t.timestamp("date").defaultTo(knex.fn.now());
      });
    }
  });

  // Shared table
  knex.schema.hasTable("shared").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("shared", function(t) {
        t.increments("id").primary();
        t.string("area", 100).notNullable();
        t.string("street", 100).notNullable();
        t.string("fullstreet", 50).notNullable();
        t.jsonb("features").notNullable();
        t.integer("bedrooms").notNullable();
        t.integer("sittingrooms").notNullable();
        t.integer("toilets").notNullable();
        t.string("imageurl1", 999).notNullable();
        t.string("imageurl2", 999).notNullable();
        t.string("imageurl3", 999).notNullable();
        t.string("imageurl4", 999).notNullable();
        t.string("price", 20).notNullable();
        t.string("type", 20).defaultTo("Shared");
        t.string("status", 20).defaultTo("For Sale");
        t.integer("cube").defaultTo(0);
        t.integer("views").defaultTo(0);
        t.string("bio", 999).notNullable();
        t.string("name", 20)
          .notNullable()
          .unique();
        t.integer("squarefeet");
        t.string("paymentplan", 15).notNullable();
        t.timestamp("date").defaultTo(knex.fn.now());
      });
    }
  });

  // people that want to share apartment
  knex.schema.hasTable("sharing").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("sharing", function(t) {
        t.increments("id").primary();
        t.integer("userid")
          .notNullable()
          .unique();
        t.string("currentaddress").notNullable();
        t.string("stateoforigin").notNullable();
        t.integer("age").notNullable();
        t.string("occupation").notNullable();
        t.string("location", 100).notNullable();
        t.string("moveInDate", 20).notNullable();
        t.string("budget", 14).notNullable();
        t.string("gender").notNullable();
        t.timestamp("date").defaultTo(knex.fn.now());
      });
    }
  });

  // Views table
  knex.schema.hasTable("views").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("views", function(t) {
        t.increments("id").primary();
        t.integer("views").notNullable();
        t.integer("hostelid").notNullable();
        t.integer("userid").notNullable();
        t.timestamp("date").defaultTo(knex.fn.now());
      });
    }
  });

  // messages
  knex.schema.hasTable("message").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("message", function(t) {
        t.increments("id").primary();
        t.string("name", 999).notNullable();
        t.string("email", 150).notNullable();
        t.string("message", 999).notNullable();
        t.boolean("read").defaultTo(false);
        t.string('type').notNullable();
        t.timestamp("date").defaultTo(knex.fn.now());
      });
    }
  });

  // cubes
  knex.schema.hasTable("cube").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("cube", function(t) {
        t.increments("id").primary();
        t.integer("userid").notNullable();
        t.string("area", 100).notNullable();
        t.string("street", 100).notNullable();
        t.string("fullstreet", 50).notNullable();
        t.integer("bedrooms").notNullable();
        t.integer("sittingrooms").notNullable();
        t.integer("toilets").notNullable();
        t.string("imageurl1", 999).notNullable();
        t.string("imageurl2", 999).notNullable();
        t.string("imageurl3", 999).notNullable();
        t.string("imageurl4", 999).notNullable();
        t.string("price", 20).notNullable();
        t.string("type", 20).notNullable();
        t.string("status", 20).notNullable();
        t.integer("cube").defaultTo(0);
        t.integer("views").defaultTo(0);
        t.string("bio", 999).notNullable();
        t.string("name", 20).notNullable();
        t.integer("squarefeet").notNullable();
        t.string("paymentplan", 20).notNullable();
        t.timestamp("date").defaultTo(knex.fn.now());
      });
    }
  });

  // Share Upload
  knex.schema.hasTable("shareupload").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("shareupload", function(t) {
        t.increments("id").primary();
        t.string("firstname", 20).notNullable();
        t.string("lastname", 20).notNullable();
        t.string("gender", 8).notNullable();
        t.string("occupation", 30).notNullable();
        t.string("email", 30).notNullable();
        t.string("location", 40).notNullable();
        t.string("whatsappnumber", 11).notNullable();
        t.string("alternatenumber", 11);
        t.string("description", 600).notNullable();
        t.string("imageurl1", 999).notNullable();
        t.string("imageurl2", 999).notNullable();
        t.string("imageurl3", 999).notNullable();
        t.string("imageurl4", 999).notNullable();
        t.string("imageurl5", 999);
        t.string("imageurl6", 999);
        t.string("imageurl7", 999);
        t.string("imageurl8", 999);
        t.timestamp("date").defaultTo(knex.fn.now());
      });
    }
  });

  // blog
  knex.schema.hasTable("blog").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("blog", function(t) {
        t.increments("id").primary();
        t.string("title", 100)
          .notNullable()
          .unique();
        t.string("body", 3000).notNullable();
        t.string("imageUrl", 1000).notNullable();
        t.integer("like").defaultTo(0);
        t.string("day", 3).notNullable();
        t.string('readmore', 200).notNullable();
        t.string("month", 15).notNullable();
        t.string("category").defaultTo("Accommodation");
        t.timestamp("date").defaultTo(knex.fn.now());
      });
    }
  });

};

module.exports = schema;

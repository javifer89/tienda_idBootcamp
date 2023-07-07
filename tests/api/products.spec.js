const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../../src/app");
const Product = require("../../src/models/product.model");

describe("API de products", () => {
  beforeAll(async () => {
    //Antes de comenzar las pruebas me conecto a la DB
    await mongoose.connect("mongodb://127.0.0.1:27017/idtienda");
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  describe("GET /api/products", () => {
    let response;
    beforeAll(async () => {
      response = await request(app).get("/api/products").send();
    });

    it("should return status 200", () => {
      expect(response.statusCode).toBe(200);
    });

    it("should return a JSON", () => {
      expect(response.headers["content-type"]).toContain("application/json");
    });

    it("should return an array", () => {
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe("POST /api/products", () => {
    let response;
    const body = {
      name: "Lapiz verde",
      description: "pinta cosas verdes",
      price: 12,
      department: "test",
      available: true,
      stock: 23,
    };
    beforeAll(async () => {
      response = await request(app).post("/api/products").send(body);
    });

    afterAll(async () => {
      await Product.deleteMany({ department: "test" });
    });

    it("should work the URL", () => {
      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toContain("application/json");
    });

    it("should have the _id defined", () => {
      expect(response.body._id).toBeDefined();
    });

    it("should insert the same data from body", () => {
      expect(response.body.name).toBe(body.name);
      expect(response.body.description).toBe(body.description);
      expect(response.body.price).toBe(body.price);
      expect(response.body.department).toBe(body.department);
      expect(response.body.available).toBe(body.available);
      expect(response.body.stock).toBe(body.stock);
    });
  });

  describe("PUT /api/products/IDPRODUCT", () => {
    const body = {
      name: "Casa azul",
      description: "una casa azul",
      price: 120000,
      department: "test",
      available: true,
      stock: 1,
    };

    let product;
    let response;
    beforeAll(async () => {
      product = await Product.create(body);
      response = await request(app).put(`/api/products/${product._id}`).send({
        available: "false",
        price: "110000",
        stock: 2,
      });
    });

    afterAll(async () => {
      await Product.findByIdAndDelete(product._id);
    });

    it("should work the URL", () => {
      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toContain("application/json");
    });

    it("should show the modifications on the DB", () => {
      expect(response.body.available).toBe(false);
      expect(response.body.price).toBe(110000);
      expect(response.body.stock).toBe(2);
    });
  });

  describe("DELETE /api/products/IDPRODUCT", () => {
    const body = {
      name: "Casa azul",
      description: "una casa azul",
      price: 120000,
      department: "test",
      available: true,
      stock: 1,
    };
    
    let product;
    let response;
    beforeAll(async () => {
      product = await Product.create(body);
      response = await request(app)
        .delete(`/api/products/${product._id}`)
        .send();
    });

    it("should work the URL", () => {
      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toContain("application/json");
    });

    it("should not be on the DB", async () => {
      const deletedProduct = await Product.findById(product._id);
      expect(deletedProduct).toBeNull();
    });
  });
});

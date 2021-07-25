const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

const should = chai.should();

chai.use(chaiHttp);

describe('Alogorithm', function () {
  context('Given a sorted nums of distinct integers and a target value,'
    + '\n    return the index if the target is found. '
    + '\n    If not,return the index where it would be if it were inserted in order.',
    function () {
      context('Test Case', function () {
        context('Input: array = [1,3,5,6], target = 5', function () {
          it('Output: 2', function (done) {
            chai.request(server)
              .get('/algorithm/search-insert-position')
              .query({ nums: [1, 3, 5, 6], target: 5 })
              .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should
                  .have.property('result')
                  .have.property('position').eql(2);
                done();
              });
          });
        });
        context('Input: nums = [1,3,5,6], target = 2', function () {
          it('Output: 1', function (done) {
            chai.request(server)
              .get('/algorithm/search-insert-position')
              .query({ nums: [1, 3, 5, 6], target: 2 })
              .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should
                  .have.property('result')
                  .have.property('position').eql(1);
                done();
              });
          });
        });
        context('Input: nums = [1,3,5,6], target = 7', function () {
          it('Output: 4', function (done) {
            chai.request(server)
              .get('/algorithm/search-insert-position')
              .query({ nums: [1, 3, 5, 6], target: 7 })
              .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should
                  .have.property('result')
                  .have.property('position').eql(4);
                done();
              });
          });
        });
        context('Input: nums = [1,3,5,6], target = 0', function () {
          it('Output: 4', function (done) {
            chai.request(server)
              .get('/algorithm/search-insert-position')
              .query({ nums: [1, 3, 5, 6], target: 0 })
              .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should
                  .have.property('result')
                  .have.property('position').eql(0);
                done();
              });
          });
          context('Input: nums = [1], target = 0', function () {
            it('Output: 0', function (done) {
              chai.request(server)
                .get('/algorithm/search-insert-position')
                .query({ nums: [1], target: 0 })
                .end(function (err, res) {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should
                    .have.property('result')
                    .have.property('position').eql(0);
                  done();
                });
            });
          });
        });
      });
    });
});
const express = require('express');
const Product = require('../model/mongooseModel');

async function store(req, res) {
    let body = req.body;
    body.createAt = new Date().toISOString();
    const response = await new Product(body).save().then(prod => {
        return {data: prod, status: 200};
    }).catch(err => {
        return {data:err.stack || err, status: 500};
    });    

    res.send(response);
}

async function index(req, res) {
    const product = await Product.find(req.params).then(prod => prod);
    let response = {
        data: product,
        status: 200
    }

    res.send(response);
}

async function update(req, res) {
    const product = await Product.findOneAndUpdate({_id:req.params.id}, req.body).then(prod => prod);
    let response = {
        data: product,
        status: 200
    }

    res.send(response);
}

async function get(req, res) {
    const product = await Product.findOne({_id:req.params.id}).then(prod => prod);
    let response = {
        data: product,
        status: 200
    }

    res.send(response);
}

async function drop (req, res) {
    const product = await Product.deleteOne({_id:req.params.id}).then(prod => prod);
    let response = {
        data: product,
        status: 200
    }

    res.send(response);
}

module.exports = {
    store,
    index,
    update,
    get,
    drop
};
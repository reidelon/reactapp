"use strict";

var Dispacher = require('../dispatcher/appDispacher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function (author) {
        var newAuthor = AuthorApi.saveAuthor(author);
        //hey dispacher, go tell all the stores that an author was just created.
        Dispacher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });

    }
};

module.exports = AuthorActions;
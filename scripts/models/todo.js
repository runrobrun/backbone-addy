var app = app || {};

//Todo Model
//-----------
//Our basic **Todo** model has 'title', 'order', and 'completed' attributes.

app.Todo = Backbone.Model.extend({

    //Default attributes ensure that each todo created has 'title' and
    //'completed' keys.

    defaults: {
        title: '',
        completed: false
    },

    toggle: function() {
        this.save({
            completed: !this.get('completed')
        });
    }

});


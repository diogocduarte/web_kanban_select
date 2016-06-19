odoo.define('web_kanban_select.widget', function (require) {
'use strict';

var core = require('web.core');
var kanban_widgets = require('web_kanban.widgets');
var Model = require('web.Model')

var AbstractField = kanban_widgets.AbstractField;
var fields_registry = kanban_widgets.registry;
var _t = core._t;

var lastsearch;

var SelectWidget = AbstractField.extend({
	className: "form-control js_select2",
	tagName: 'input',
	
    start: function() {
        var self = this;
        var parent = self.getParent();
        var field_name = this.$node.attr('name');
        var method = this.$node.attr('method');
        self.$el.select2({
            ajax: {
                url: method,
                dataType: 'json',
                data: function(term) {
                    return {
                        q: term,
                        l: 50
                    };
                },
                results: function(data) {
                    var ret = [];
                    _.each(data, function(x) {
                        ret.push({ id: x.id, text: x.name, isNew: false });
                    });
                    lastsearch = ret;
                    return { results: ret };
                }
            },
        });
        self.$el.select2('data', {id: this.field.raw_value, text: this.field.value});
        self.$el.on('change',function (evt) {
        	var rec = parent.record;
        	var res;
        	var model_name = parent.model;
        	var changedata =  {};
        	changedata[field_name] = parseInt(evt.val);
        	
        	res = (new Model(model_name)).call('write', [rec.id.raw_value, changedata]);
        });

    },
    
});

fields_registry.add("select", SelectWidget);

});
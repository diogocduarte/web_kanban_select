# -*- coding: utf-8 -*-
import json

import openerp
from openerp.addons.web import http
from openerp.addons.web.http import request


class DemoKanbanCRM(http.Controller):

    @http.route('/website/get_users', type='http', auth="user", methods=['GET'], website=True)
    def user_read(self, q='', l=25, **post):
        data = request.env['res.users'].search_read(
            domain=[('share', '=', False), ('name', '=ilike', (q or '') + "%")],
            fields=['id', 'name'],
            limit=int(l),
        )
        return json.dumps(data)

# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Web Kanban Select',
    'version': '1.1',
    'category': 'Web',
    'summary': 'Implements Select2 kanban widget',
    'description': """
Implements Select2 kanban widget
================================

in Kanban we will see :
    <field name="user_id" widget="select"/>

    """,
    'website': 'https://www.odooclass.com',
    'depends': [
        'crm',
        'web_kanban',
    ],
    'data': [
        'views/templates.xml',
    ],
    'demo': ['views/crm_view.xml'],
    'installable': True,
    'auto_install': False,
    'qweb': [],
}

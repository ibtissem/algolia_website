# -*- coding: utf-8 -*-
##############################################################################
#
#    OpenERP, Open Source Management Solution
#    Copyright (C) 2016-2017 Incontinence Protection
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
##############################################################################
 
from odoo import http
from odoo.http import request
from odoo.addons.website_portal.controllers.main import website_account


class ExtensionAlgolia(website_account):
#     it the page of the algolia test 
    @http.route('/algolia', type='http', auth='public', website=True)
    def affichage_algolia(self,*args,**kw):
        cr, uid, context, pool = request.cr, request.uid, request.context, request.registry 
        return request.render('algolia_website.ip_algolia_page')
#-*- coding: utf-8 -*- 

{
    'name': 'Algolia connector',
    'version': '11.0',
    'icon': "algolia_website/static/description/algolia.png",  
    'category': 'algolia_website',
    'summary': 'Add algolia search interface ',
    'version': '1.0',
    'description': """
        algolia connector engine:
        add algolia's search interface inder the search input
    """,
    'author':  'Ibtissem Zeiri', 
    'depends': ['base','product','algolia_backend'],
    'data': [],
    'qweb': ['static/src/xml/checkout.xml'],
    'installable': True,
    'auto_install': False,
    'application': False,
}


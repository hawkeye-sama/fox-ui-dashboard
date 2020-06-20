from mongoengine import Document, EmbeddedDocument, fields

class Hero(Document):
    name = fields.StringField()
    alias = fields.StringField()
    
# class TestInput(EmbeddedDocument):
#     name = fields.StringField()
#     value = fields.DynamicField()    
    
# class Test(Document):
#     label = fields.StringField()
#     description = fields.StringField()
#     inputs = fields.ListField(fields.EmbeddedDocumentField(TestInput))
    

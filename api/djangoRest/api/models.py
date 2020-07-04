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



class Products(Document):
    class EmbeddedRatings(EmbeddedDocument):
        u_id = fields.StringField()
        ratingByUser = fields.IntField()
        reviewByUser = fields.StringField()

    p_name = fields.StringField()
    p_quantity = fields.IntField()
    p_manufact_id = fields.StringField()
    p_price = fields.IntField()
    p_description = fields.StringField()
    p_type_id = fields.StringField()
    p_image_url = fields.ListField(fields.StringField(),default=list)
    p_ratings= fields.ListField(fields.EmbeddedDocumentField(EmbeddedRatings),default=list)


class Users(Document):
    u_name = fields.StringField()
    u_password = fields.StringField()
    u_type = fields.StringField()
    u_description = fields.StringField()
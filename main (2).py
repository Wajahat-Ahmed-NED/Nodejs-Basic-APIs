from gophish import Gophish
print("Hello World")

api_key = 'fd8bc15c96d3809f1b44d852936cb71394836bbf411b4d67321a3508d02862f6'
api = Gophish(api_key, host='http://localhost:3333', verify=False)
for campaign in api.campaigns.get():
    print (campaign.name)
# print(len(campaigns))
# print(compaigns)
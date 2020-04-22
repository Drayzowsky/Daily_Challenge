# Exercise XP

# Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
dictionary = dict(zip(keys, values))
print(dictionary)

# Exercise 2
store = {'name': 'Zara',
         'creation_date': 1975,
         'creator_name': 'Amancio Ortega Gaona',
         'tyoe_of_clothes': ('men', 'women', 'children', 'home'),
         'international_competitors': ('Gap', 'H&M', 'Benetton'),
         'number_stores': 7000,
         'major_color': {'France': 'blue',
                         'Spain': 'red',
                         'US': ('pink', 'green')}
         }
# 1
store['number_stores'] = 2
# 2
print(store['name'] + ' clients are' + store['tyoe_of_clothes'][0] + store['tyoe_of_clothes'][1] +
      store['tyoe_of_clothes'][2])
# 3
store['country_creation'] = 'Spain'
# 4
if store['international_competitors']:
    store['international_competitors'] = ('Gap', 'H&M', 'Benetton', 'Desigual')
# 5
del store['creation_date']
# 6
print(store['international_competitors'][-1])
# 7
print('The major colors in the US are ' + store['major_color']['US'][0] + ' and ' + store['major_color']['US'][1])
# 8
print(len(store))
# 9
print(store.keys())
# 10
more_on_store = {'creation_date': 1975,
                 'number_stores': 10000
                 }
store.update(more_on_store)
print(store['number_stores'])

# Bonus
store['stores_worldwide'] = {}


def add_store(country, number):
    if 'stores_worldwide' in store.keys():
        store['stores_worldwide'][country] = number


add_store('Spain', 2000)
add_store('China', 620)
print(store['stores_worldwide'])

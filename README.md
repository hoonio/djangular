# Scylla by Hoonio

## Setup

* `$ pip install -r requirements.txt`
* `$ npm install`
* `$ bower install`
* `$ python manage.py migrate`
* `$ python manage.py runserver`

## To test authentication
* `python manage.py shell`
* `from authentication.models import Account`
* `Account.objects.latest('created_at')`


the backend branch contains the backend build of AttHire which contains some features such as
• User registration,login,reset password(email is sent)
• cart,payment
• create product,product review,product ratings,filter functionailty,search feature,pagination.
User with admin Privilege can access the user's details except their password which is protected by encryption.The admin can check the number of total orders and individual user's order too.
middlewares have been created for handling errors such as async error,error which occurs when user enters wrong id,unhandled promise rejection,unhandled caught exceptions,error that crashes the server when a product is not found.

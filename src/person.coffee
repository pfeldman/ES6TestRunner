class @Person
  constructor: (@firstName, @lastName) ->
  sayHi: () ->
    return "Hi, I'm #{@firstName} #{@lastName}"

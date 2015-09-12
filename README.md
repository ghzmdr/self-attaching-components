# self-attaching-components
Quick prototype of a design pattern I had in mind

Simply `npm install`
then `npm run demo`

It will print a "PLAYER" Entity, defined by its prototype in `src/EntityPrototypes.js`

This is by no means a full pattern, is just a quick prototype done in a boring Saturday morning.

####Goal: 
Dynamic entity creation, modularized state and components interaction.

'blueprint' like instantiation trough factory comes handy for fast prototyping and components (re)combinations.

####Flaws
Stll missing some key features, as:

+ components dependency (if MovementControlComponent depends on PositionComponent, no need to declare both properties)
+ nested properties to factor unique flavours of components
 
####The idea:
An entity is just a shell, as discussed in some SFML forums and other papers.

It holds an array of properties which are just labels the components look for in order to attach themselves.

Each component defines and exposes the label that should be matched for it to be attached as `requiredProperty`.

A `ComponentPool` exposes all the components' constructors mapped by their `requiredProperty` so an entity just attaches the ones that match one of its `properties`.

Components expose a common method (`update`) so the entity can just loop through the attached ones and call that method to make them do their work.

In this method, the entity passes a reference to itself, this way the components can talk to each other, by referencing the parent entity's components collection.

eg: MoveControlComponent's update may call `parent.components['POSITION'].move({x: 100, y: 100})`

####Play around:
Just define a Component, `require` it in `ComponentsPool`'s `Pool` and define a prototype which uses its `requiredProperty` in `EntityPrototypes`.

####License:

This code is under The Unlicense, which means you can copy it and do what you want, is just an idea.






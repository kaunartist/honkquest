SQLite format 3   @                                                                   ._� 
� [	o�
��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ��//�tabletemporary_missiontemporary_missionCREATE TABLE "temporary_mission" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar�0//�]tabletemporary_missiontemporary_missionCREATE TABLE "temporary_mission" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "points" integer NOT NULL, "gameId" integer, "categoryId" integer, CONSTRAINT "FK_0cb4f6d6722b6ee0484bf9dbed2" FOREIGN KEY ("gameId") REFERENCES "game" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_687f224cb586c484ee9d5bada7b" FOREIGN KEY ("categoryId") REFERENCES "mission_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)��//�Itabletempo�y
�ItablemissionmissionCREATE TABLE "mission" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "points" integer NOT NULL, "gameId" integer, "categoryId" integer, CONSTRAINT "FK_0cb4f6d6722b6ee0484bf9dbed2" FOREIGN KEY ("gameId") REFERENCES "game" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_687f224cb586c484ee9d5bada7b" FOREIGN KEY ("categoryId") REFERENCES "mission_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)��	tablegamegameCREATE TABLE "game" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL)   ��tablemissionmissionCREATE TABLE "mission" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "points" integer NOT NULL, "gameId" integer, "categoryId" 
     �--�atablemission_categorymission_categoryCREATE TABLE "mission_category" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)P++Ytablesqlite_sequencesqlite_sequenceCREATE TABLE sqlite_sequence(name,seq)�"!!�tablemigrationsmigrationsCREATE TABLE "migrations" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "timestamp" bigint NOT NULL, "name" varchar NOT NULL)   � ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        % C��+"�InitialSeeding1669067383483# ?��dcNCreateTables1669037581134� � �����                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               � $temporary_missionmission-mission_categorygame   	migrat!migrations   � ���                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  gps #photo+video text        !#6l�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         �	 %�w Trash PandasRaccoons are some of the city's feistiest residents! Snap a picture of an elusive trash panda to secure these points.��G	 /�_ The tallest towerThis building stands above all others downtown and gives a view for miles on its observation deck. You'll need to get within 100m of this tower to complete this mission. ��j	 +�-		 Groovy PotatoesWhat good is Groovy Gravy without mashed potatoes? It takes 23 potatoes to make a batch of Grandma's Groovy Mashed Potatoes. If there is a shipment of 3,659 potatoes, how many batches of potatoes can be made? ȁ{	 I�/	 If you Sailed on the MayflowerUse the book "...If You Sailed on the Mayflower in 1620" or "Don't Know Much About the Pilgrims" and find one fact that your group didn't know and finds interesting. Make a short video explaining the fun fact.��\	 -�		 Barrels on BoardThe Mayflower was one of the largest ships of her time. It could carry about 180 large barrels on board. If the pilgrims put the barrels in 15 rows, how many barrels would have been in each row?d   < ���<                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            T GsDefense Against the Duck ArtsPrepare yourself to survive against arts most fowl.k +�;Gaggle Goof-offGo find some geese IRL and get symbolic revenge for five years of on-campus affrontery.� 7�aToronto landmark huntThis interactive quiz tour will take you to all the major landmarks and attractions the city has to offer!x 3�M5th Grade Math Fun!Let's have some fun by going on a hunt! Solve these math problems and earn points along the way!   	y "%9p�i
�
{
<	�	y                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ` 9�	Honk2 Like You Mean ItRecord a conversation between you and a goose - in honks only. �_
 7�	Honk Like You Mean ItRecord a conversation between you and a goose - in honks only. �=	 g	Tuck InWhat's the trick to make a goose go to sleep?dw =�3Let Me See Your War FaceTake a short video in the mirror of your best imitation of a nesting mother's hiss.,s -�;Do a Barrel RollPractice diving away from a protective goose and catch it on video to get these points!,u E�'The Plumpire Is On The FieldTake a short video of you calling a south-flying plump of geese 'OUTTA HERE'!X� %�wTrash PandasRaccoons are some of the city's feistiest residents! Snap a picture of an elusive trash panda to secure these points.��F /�_The tallest towerThis building stands above all others downtown and gives a view for miles on its observation deck. You'll need to get within 100m of this tower to complete this mission. ��i +�-		Groovy PotatoesWhat good is Groovy Gravy without mashed potatoes? It takes 23 potatoes to make a batch of Grandma's Groovy Mashed Potatoes. If there is a shipment of 3,659 potatoes, how many batches of potatoes can be made? ȁz I�/	If you Sailed on the MayflowerUse the book "...If You Sailed on the Mayflower in 1620" or "Don't Know Much About the Pilgrims" and find one fact that your group didn't know and finds interesting. Make a short video explaining the fun fact.��[ -�		Barrels on BoardThe Mayflower was one of the largest ships of her time. It could carry about 180 large barrels on board. If the pilgrims put the barrels in 15 rows, how many barrels would have been in each row?d
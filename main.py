from math import atan2, degrees, radians, sin, cos, acos

print("Input coordinates of two points:")
slat = radians(float(input("Starting latitude: ")))
slon = radians(float(input("Ending longitude: ")))
elat = radians(float(input("Starting latitude: ")))
elon = radians(float(input("Ending longitude: ")))

def calcBearing(slat, slon, elat, elon):
  dLon = (elon - slon)
  x = cos(elat) * sin(dLon)
  y = cos(slat) * sin(elat) - sin(slat) * cos(elat) * cos(dLon)
  bearing = atan2(x, y)
  bearing = (degrees(bearing) + 360) % 360
  
  return bearing

def calcNSEW(slat, slon, elat, elon):
  points = ["north", "north east", "east", "south east", "south", "south west", "west", "north west"]
  bearing = calcBearing(slat, slon, elat, elon)
  bearing += 22.5
  bearing = bearing % 360
  bearing = int(bearing / 45)
  NSEW = points[bearing]
  
  return NSEW

dist = 6371.01 * acos(sin(slat)*sin(elat) + cos(slat)*cos(elat)*cos(slon - elon))
if dist < 1:
  d = dist * 1000
  print("The distance is %.8fm." % d)
else:
  print("The distance is %.8fkm" %dist)
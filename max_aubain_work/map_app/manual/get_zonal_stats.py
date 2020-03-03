# rasterstats docs: https://pythonhosted.org/rasterstats/
# rasterstats repository: https://github.com/perrygeo/python-rasterstats
from rasterstats import zonal_stats
stats = zonal_stats("_provided_assets/ClarkGain/ClarkGain.shp", "_provided_assets/Gopherus_agassizii_connectivity.tif",
            stats="count min mean max median")
print(stats)

# Planned pseudo-code for this function, before I found the rasterstats library
""" 
For Each feature
  sum = 0, count = 0
  For Each coordinate in array of coordinates for this feature from shape file
    sum  = sum + (z-value at this coordinate from geospatial data)
    count = count + 1
  End
  Average pixel value = sum / count
  store in hash = { feature_num : { “mean” : meanVal } }
end 
"""

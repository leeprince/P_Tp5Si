#!/usr/bin/python
# -*- coding: UTF-8 -*-


import re
import sys
import socket
import urllib
import urllib2
import datetime
import time
import random


###### Config this part before use #####

LOG = True
DEBUG = True
DEBUG_DETAIL = False

###### End of config #######

headers = []
headers.append({'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6' })
headers.append({'User-Agent':'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0' })
headers.append({'User-Agent':'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)' })
headers.append({'User-Agent':'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2)' })
headers.append({'User-Agent':'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)' })
headers.append({'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 5.2) Gecko/2008070208 Firefox/3.0.1' })
headers.append({'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 5.1) Gecko/20070309 Firefox/2.0.0.3' })
headers.append({'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 5.2) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.27 Safari/525.13' })

def getHtml(url):
    time.sleep(random.randint(2,5))  #avoid being detected as a robot
    agent = random.randint(0,7);
    # print headers[agent];

    req = urllib2.Request(url,headers=headers[agent])
    try:
        page = urllib2.urlopen(req, timeout=10)
        html = page.read()
    #except urllib2.URLError, e:
    #    print "Oops, timed out?"
    #    html = "";
    except socket.timeout:
        print "Timed out!"
        html = "";
    except :
        print "Expection!"
        html = "";
        
    return html

# leeprince change the way profileID is verified
def getShortProfileID(html):
    # amazon change the ShortprofileID position _2017-03-13
    # ShortProfileIDreg = r'customer_id=(A\w+)&amp'
    #ShortProfileIDreg = r'/avatar/default/(A\w+)'
    ShortProfileIDreg = r'/profile/(A\w+)'
    ShortProfileIDre = re.compile(ShortProfileIDreg)
    ShortProfileID_list = re.findall(ShortProfileIDre, html)
    if (len(ShortProfileID_list) > 0):
        ShortProfileID = ShortProfileID_list[0];
    else:
        ShortProfileID = "Unknown"
    return ShortProfileID

def findprofileID(profileID):
    profile_prefix = "https://www.amazon.com/gp/profile/amzn1.account."
    profile_url = profile_prefix+profileID
    profile_page = getHtml(profile_url)
    ShortProfileID = getShortProfileID(profile_page)

    print ShortProfileID
 
if __name__ == '__main__': 
    profileID = sys.argv[1]
    # profileID = 'AFAAGTORX42LHQ337W2ZOVNWVSQQ'
    findprofileID(profileID)

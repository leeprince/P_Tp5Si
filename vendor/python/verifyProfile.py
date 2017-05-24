#!/usr/bin/python
# -*- coding: UTF-8 -*-


import re
import sys
import socket
import urllib
import urllib2
import datetime


###### Config this part before use #####

LOG = True
DEBUG = True
DEBUG_DETAIL = False

###### End of config #######

#Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36

headers = { 
    'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'
    }

def getHtml(url):
    req = urllib2.Request(url,headers=headers)
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

def verifyHtml(html):
    verifyreg = r'we just need to make sure you\'re not a robot'
    verifyre = re.compile(verifyreg)
    verify_list = re.findall(verifyre, html)
    if (len(verify_list) > 0):
        print "Amazon though this is a Robot !!!"
        return False
    else:
        return True

   

def getProfileValid(html):
    reg = r'<title>404 - Document Not Found</title>'
    ree = re.compile(reg)
    listt = re.findall(ree, html)
    if (html==""):
        res = "invalid";
    else:
        res = "valid"
    return res

def getReviewerRanking(html):
    reg = r'<span class="a-size-base">Reviewer ranking</span>\s+<div class="a-row"><span class="a-size-base">#([^<]+)</span>'
    ree = re.compile(reg)
    listt = re.findall(ree, html)
    if (len(listt) > 0):
        res = listt[0].replace(",","")
    else:
        res = "Unknown"
    return res


def verifyProfile(reviewID):
    profile_prefix = "http://www.amazon.com/gp/profile/"
    profile_url = profile_prefix+profileID;
    if(DEBUG_DETAIL): print profile_url;
    profile_page = getHtml(profile_url);
    #if(DEBUG_DETAIL): print profile_page;

    profileValid = getProfileValid(profile_page)
    reviewerRanking = getReviewerRanking(profile_page)

    print profileValid+"---"+reviewerRanking
 
if __name__ == '__main__': 
    profileID = sys.argv[1]
    #profileID = "AGN9FTW0X1BJZ"
    verifyProfile(profileID)

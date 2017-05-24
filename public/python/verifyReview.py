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

headers.append({'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36' })
headers.append({'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko' })
headers.append({'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41' })
headers.append({'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0' })

def getHtml(url):
    time.sleep(random.randint(3,6))  #avoid being detected as a robot
    agent = random.randint(0,11);
    # agent = random.randint(0,3);
    # agent = random.randint(0,7);
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

def verifyHtml(html):
    verifyreg = r'we just need to make sure you\'re not a robot'
    verifyre = re.compile(verifyreg)
    verify_list = re.findall(verifyre, html)
    if (len(verify_list) > 0):
        print "Amazon though this is a Robot !!!"
        return False
    else:
        return True

   

def getProfileID(html):
    profileIDreg = r'/profile/(A\w+)'
    profileIDre = re.compile(profileIDreg)
    profileID_list = re.findall(profileIDre, html)
    if (len(profileID_list) > 0):
        shortReviewerID = profileID_list[0];
    else:
        shortReviewerID = "Unknown"
    return shortReviewerID

# leeprince change the way profileID is verified
def getLongProfileID(html):
    longprofileIDreg = r'/profile/amzn1.account.(A\w+)'
    longprofileIDre = re.compile(longprofileIDreg)
    longprofileID_list = re.findall(longprofileIDre, html)
    if (len(longprofileID_list) > 0):
        profileID = longprofileID_list[0];
    else:
        profileID = "Unknown"
    return profileID

def getReviewLink(html):
    reviewLinkreg = r'/gp/review/(\w+)'
    reviewLinkre = re.compile(reviewLinkreg)
    reviewLink_list = re.findall(reviewLinkre, html)
    if (len(reviewLink_list) > 0):
        reviewLink = reviewLink_list[0];
    else:
        reviewLink = "Unknown";
    return reviewLink

def getReviewTitle(html):
    reviewTitlereg = r'<span class="summary">([^<]+)</span>'
    reviewTitlere = re.compile(reviewTitlereg)
    reviewTitle_list = re.findall(reviewTitlere, html)
    if (len(reviewTitle_list) > 0):
        reviewTitle = reviewTitle_list[0].replace("'","`");
    else:
        reviewTitle = "Unknown";
    return reviewTitle

def getReviewStar(html):
    reviewStarreg = r'title="(\d).0 out of 5 stars"'
    reviewStarre = re.compile(reviewStarreg)
    reviewStar_list = re.findall(reviewStarre, html)
    if (len(reviewStar_list) > 0):
        reviewStar = reviewStar_list[0];
    else:
        reviewStar = "Unknown";
    return reviewStar

def getReviewDate(html):
    reviewDatereg = r'<nobr>([^<]+)</nobr>'
    reviewDatere = re.compile(reviewDatereg)
    reviewDate_list = re.findall(reviewDatere, html)
    if (len(reviewDate_list) > 0):
        reviewDate = reviewDate_list[0];
    else:
        reviewDate = "Unknown";
    return reviewDate

def getReviewASIN(html):
    reviewASINreg = r'<abbr class="asin">(\w+)</abbr>'
    reviewASINre = re.compile(reviewASINreg)
    reviewASIN_list = re.findall(reviewASINre, html)
    if (len(reviewASIN_list) > 0):
        reviewASIN = reviewASIN_list[0];
    else:
        reviewASIN = "Unknown";
    return reviewASIN

def getReviewSign(html):
    reviewSignreg = r'(Verified Purchase)</b><span class="tiny verifyWhatsThis">'
    reviewSignre = re.compile(reviewSignreg)
    reviewSign_list = re.findall(reviewSignre, html)
    if (len(reviewSign_list) > 0):
        reviewSign = reviewSign_list[0];
    else:
        reviewSign = "Unknown";
    return reviewSign

def formatDate(reviewDate):
    [month, day_year] = reviewDate.split(" ", 1);
    [day, year] = day_year.split(",",1);
    if(month == "January"): month = "1";
    if(month == "February"): month = "2";
    if(month == "March"): month = "3";
    if(month == "April"): month = "4";
    if(month == "May"): month = "5";
    if(month == "June"): month = "6";
    if(month == "July"): month = "7";
    if(month == "August"): month = "8";
    if(month == "September"): month = "9";
    if(month == "October"): month = "10";
    if(month == "November"): month = "11";
    if(month == "December"): month = "12";
    dateFormated = datetime.date(int(year), int(month), int(day));
    return dateFormated


def verifyReview(reviewID):
    review_prefix = "http://www.amazon.com/gp/review/"
    review_url = review_prefix+reviewID;
    # if(DEBUG_DETAIL): print review_url;
    review_page = getHtml(review_url);
    #if(DEBUG_DETAIL): print review_page;

    shortReviewerID = getProfileID(review_page)
    profile_prefix = "http://www.amazon.com/gp/pdp/profile/"
    profile_url = profile_prefix+shortReviewerID;
    profile_page = getHtml(profile_url);
    # print profile_page
    reviewerID = getLongProfileID(profile_page)

    reviewCode = getReviewLink(review_page)
    reviewTitle = getReviewTitle(review_page)
    reviewStar = getReviewStar(review_page)
    reviewDate = getReviewDate(review_page)
    reviewASIN = getReviewASIN(review_page)

    reviewSign = getReviewSign(review_page)

    reviewTitle = reviewTitle.strip(' \t\n\r')
    reviewASIN = reviewASIN.strip(' \t\n\r')
    reviewLink = "http://www.amazon.com/gp/customer-reviews/"+reviewCode;
    reviewDateFormated = formatDate(reviewDate)
    print reviewASIN+"---"+reviewerID+"---"+reviewTitle+"---"+reviewStar+"---"+str(reviewDateFormated)+"---"+reviewSign+"---"+shortReviewerID
 
if __name__ == '__main__': 
    reviewID = sys.argv[1]
    # reviewID = "R32EYJ98KQ7G3E"#server testing ,the corresponding profileID is my_leeprince
    # reviewID = "RBBK70P7QEPP8"
    verifyReview(reviewID)

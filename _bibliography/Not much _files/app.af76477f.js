(function (e) {
  function t(t) {
    for (var r, s, a = t[0], l = t[1], c = t[2], u = 0, d = []; u < a.length; u++)
      (s = a[u]), Object.prototype.hasOwnProperty.call(o, s) && o[s] && d.push(o[s][0]), (o[s] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    p && p(t);
    while (d.length) d.shift()();
    return i.push.apply(i, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, s = 1; s < n.length; s++) {
        var l = n[s];
        0 !== o[l] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    i = [];
  function s(e) {
    return a.p + "js/" + ({ about: "about" }[e] || e) + "." + { about: "efdf2d61" }[e] + ".js";
  }
  function a(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.e = function (e) {
    var t = [],
      n = o[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, r) {
          n = o[e] = [t, r];
        });
        t.push((n[2] = r));
        var i,
          l = document.createElement("script");
        (l.charset = "utf-8"), (l.timeout = 120), a.nc && l.setAttribute("nonce", a.nc), (l.src = s(e));
        var c = new Error();
        i = function (t) {
          (l.onerror = l.onload = null), clearTimeout(u);
          var n = o[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                i = t && t.target && t.target.src;
              (c.message = "Loading chunk " + e + " failed.\n(" + r + ": " + i + ")"),
                (c.name = "ChunkLoadError"),
                (c.type = r),
                (c.request = i),
                n[1](c);
            }
            o[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          i({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = i), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (a.m = e),
    (a.c = r),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((a.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var r in e)
          a.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "/"),
    (a.oe = function (e) {
      throw (console.error(e), e);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var u = 0; u < l.length; u++) t(l[u]);
  var p = c;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "0c7c": function (e, t, n) {},
  5684: function (e, t, n) {
    "use strict";
    var r = n("60f4"),
      o = n.n(r);
    o.a;
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("2b0e"),
      o = n("2f62"),
      i = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n("nav-bar"),
            n("div", { staticStyle: { height: "100%" } }, [n("router-view")], 1),
            "/foo" !== e.$route.path ? n("div", { staticClass: "fluid-container footer mt-4 pt-5" }, [e._m(0)]) : e._e(),
            n("b-modal", { attrs: { id: "terms", title: "TRUE+WAY ASL Terms of Use", "ok-only": "", scrollable: "" } }, [
              n("div", { staticClass: "post-content" }, [
                n("p", [e._v(" By registering for TRUE+WAY ASL you indicate your acceptance to the below agreement. ")]),
                n("p", [
                  e._v(
                    " GRANT OF LICENSE: The TRUE+WAY ASL material in the digital product and in the documentation is owned by Purple Moontower LLC (“PMT”). PMT grants you, the User, a limited, nonexclusive, and non- transferable license to access and use this material for a term of six (6) months from the initial grant date as long as User abides by the terms of this agreement. The license hereby granted is limited to a single authorized User without right of sublicense. "
                  ),
                ]),
                n("p", [
                  e._v(
                    " RESTRICTIONS ON USE: User may not: (a) disassemble, decompile, reverse engineer, or modify the digital product; (b) examine the digital product with debugging, memory inspection, or disk inspection tools; (c) permit use of the License Product by a person who is not an authorized User with a valid license; (d) transmit an electronic copy of the digital product by any means that is not expressly authorized under this Agreement; (e) download, copy and paste, screenshot or screenrecord the digital product or any portion thereof and upload or transmit it to a new location; or (f) use any portion of the digital product to create a curriculum, software, or other derivative work. Licensee may initiate a local download to a single device for the purpose of viewing the digital product temporarily for a period of six (6) months from the date of activation, but any further actions to reproduce, transfer, permanently preserve, download, copy and paste, screenshot or screenrecord the digital product or any portion thereof are strictly prohibited. User may not access or use the digital product after the license has been terminated. "
                  ),
                ]),
                n("p", [
                  e._v(
                    " OWNERSHIP: PMT retains title and ownership of the material and all intellectual property rights in the digital product and documentation and all subsequent copies of the material regardless of the form or media in which or on which the original and other copies may exist. This license is not a sale of the material or any copy. The terms of this agreement apply to derivative works. User shall not use either the name of PMT or the name of the digital product for any commercial purpose or in any advertising, promotional or public statement without the prior, written consent of PMT, which consent shall be at PMT’s sole discretion. User agrees not to remove, deface, or destroy any copyright, patent notice, trademark, service mark, other proprietary markings, or confidential legends placed on or within the digital product, the documentation, and any copies thereof in any form. "
                  ),
                ]),
                n("p", [
                  e._v(
                    " PERMITTED USERS: The material in these files is licensed to you, the User, for use by you as a single individual. At any given time, the material in these files may be installed only on a single device to enable the User to access and view the digital product. You may not permit other individuals to use this material unless you purchase additional licenses on their behalf. A separate license must be purchased for each individual who accesses or uses these materials. "
                  ),
                ]),
                n("p", [
                  e._v(
                    " AVAILABILITY OF ACCESS: User recognizes that internet speeds and data traffic through the Internet may affect the speed of the download of information from the website where PMT makes the digital product available (the “Website”)and shall not hold PMT liable for such delays, including these which are ordinary in the course of Internet use. PMT makes the software requirements for digital product available to User and User consents to these software requirements. PMT is not liable to User for access to the digital product based on User’s deviations from such software requirements. User recognizes that the Website may not be available on a continual twenty-four hour basis due to such delays and due to delays caused by PMT’s upgrading, modification, or standard maintenance of the digital product website and PMT is not liable to User for inability to access the Website during such periods. "
                  ),
                ]),
                n("p", [
                  e._v(
                    " COPIES: User is prohibited from making any copies of the digital product or any portion thereof. In the event that User makes one or more unauthorized Copies, then PMT reserves the right to terminate this Agreement. All copies shall remain the exclusive property of PMT. "
                  ),
                ]),
                n("p", [
                  e._v(
                    " TRANSFER: User may not transfer any copy of the material in the files or in the documentation to any other person or entity unless (a) User first obtains PMT’s written consent; and (b) the transferee first accepts this agreement in writing and User transfers all copies, wherever located or installed, of the material and documentation, including the original provided with this agreement. User may not rent, loan, lease, sublicense, or otherwise make the material available for use by any person other than the permitted users except as provided in this paragraph. "
                  ),
                ]),
                n("p", [
                  e._v(
                    " USER ACKNOWLEDGES AND AGREES THAT THE DIGITAL PRODUCT AND ANY ACCOMPANYING DOCUMENTATION ARE PROVIDED ON AN “AS IS,” “AS AVAILABLE” BASIS AND LICENSOR DOES NOT MAKE ANY AND HEREBY SPECIFICALLY DISCLAIMS ANY REPRESENTATIONS, ENDORSEMENTS, GUARANTEES, OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NONINFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS. "
                  ),
                ]),
                n("p", [
                  e._v(
                    " IN NO EVENT SHALL PURPLE MOONTOWER, LLC BE LIABLE FOR LOSS OF PROFITS OR FOR INDIRECT, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, EVEN IF PMT HAS BEEN ADVISED OF THE POSSIBILITY OF THOSE DAMAGES. PMT’S AGGREGATE LIABILITY ARISING FROM OR RELATING TO THIS AGREEMENT OR THE MATERIAL IN THE FILES OR IN THE DOCUMENTATION IS LIMITED TO THE PURCHASE PRICE YOU PAID FOR THE LICENSED COPYRIGHTED PRODUCT. THIS AGREEMENT DEFINES YOUR SOLE REMEDY. "
                  ),
                ]),
                n("p", [
                  e._v(
                    " GENERAL PROVISIONS: This agreement and any dispute that arises thereof shall be interpreted and controlled by the laws of the State of Texas. This agreement contains the entire agreement between you and PMT concerning the license to use the material in the digital product. The waiver of any breach of any provision of this agreement does not waive any other breach of that or any other provision. If any provision is for any reason found to be unenforceable, all other provisions nonetheless remain enforceable. "
                  ),
                ]),
              ]),
            ]),
            n("b-modal", { attrs: { id: "privacy", title: "TRUE+WAY ASL Online Privacy Policy", "ok-only": "", scrollable: "" } }, [
              n("div", { staticClass: "post-content" }, [
                n("p", [e._v("Effective as of May 7, 2020")]),
                n("p", [
                  e._v(
                    "We at Purple Moontower, LLC dba TRUE+WAY ASL (“TRUE+WAY ASL,” “we,” “us,” or “our”) created this privacy policy (“Privacy Policy”) because we know that you care about how information you provide to us is used and shared. This Privacy Policy relates to the information collection and use practices of TRUE+WAY ASL in connection with our online services (the “Services”), which are made available to you through our website located at http://www.truewayasl.com (the “Site”)."
                  ),
                ]),
                n("p", [
                  e._v(
                    "We strive to educate parents and kids about how to appropriately safeguard their privacy when using our Services. We are committed to complying with the Children’s Online Privacy Protection Act of 1998 (“COPPA”), which requires us to inform parents and legal guardians about our information collection and use practices. COPPA also requires that we obtain parental consent before we allow children under the age of 13 to access and/or use our Services. We urge kids to check with their parents before entering information through our Site and/or Services, and we recommend that parents discuss with their kids restrictions regarding the online release of Personal Information (as defined below) to anyone they don’t know."
                  ),
                ]),
                n("p", [
                  e._v(
                    "By visiting our Site and/or using our Services, or by permitting your child to use our Services, you are agreeing to the terms of this Privacy Policy and the accompanying End User License Agreement and Terms of Use. Capitalized terms not defined in this Privacy Policy shall have the meaning set forth in our Terms of Use."
                  ),
                ]),
                n("p", [
                  n("strong", [e._v("Information We Collect ")]),
                  n("em", [e._v("Personal Information ")]),
                  e._v(
                    "We do not collect any personal information from you unless you voluntarily provide it to us. When you sign up to become a user of the Site (a “User”), you may be asked to provide us with certain personal information, such as your first name, last name, email address, school affiliations, and website. In this Privacy Policy, we refer to this"
                  ),
                ]),
                n("p", [
                  e._v(
                    "information as “Personal Information.” Other than the online contact information required to obtain parental consent, we do not collect any Personal Information from Users under the age of 13 unless the User’s parent or legal guardian has first provided us with consent for that User to use the Services and disclose Personal Information to us. If you are a User under the age of 13, please do not send any Personal Information to us if we have not obtained prior consent from your parent or guardian. If we learn we have collected Personal Information from a User under the age of 13 without parental consent, or if we learn a User under the age of 13 has provided us Personal Information beyond what we request from him or her, we will delete that information as quickly as possible. If you believe that a User under the age of 13 may have provided us Personal Information in violation of this Privacy Policy, please contact us at contact@truewayasl.com."
                  ),
                ]),
                n("p", [
                  n("em", [e._v("Usage Information ")]),
                  e._v(
                    "Like most websites, we use automatic data collection technology when you visit the Site to record information that identifies your computer, to track your use of our Site, and to collect certain basic information about you and your surfing habits. This information includes information about your operating system, your IP addresses, browser type and language, referring and exit pages and URLs, keywords, date and time, amount of time spent on particular pages, what sections of a website you visit, and similar information concerning your use of the Site and the Services (the “Usage Information”)."
                  ),
                ]),
                n("p", [
                  e._v(
                    "We collect this Usage Information by using cookies and pixel tags (also called web beacons or clear gifs). Cookies are small packets of data that a website stores on your computer’s hard drive so that your computer will “remember” information about your visit. Clear gifs are tiny graphics with a unique identifier, similar in function to cookies, and are used to track the online movements of website users. You can reject cookies by following the directions provided in your Internet provider’s “help” file. If you reject cookies, you may still visit the Site, but may not be able to use some areas of the Site and/or the Services."
                  ),
                ]),
                n("p", [
                  e._v(
                    "We do not collect Personal Information in this way, but if you’ve provided us with Personal Information, we may associate that information with the information that is collected automatically. Automatic data collection may be performed on our behalf by our services providers."
                  ),
                ]),
                n("p", [
                  n("strong", [e._v("How We Use Your Information ")]),
                  e._v(
                    "We may use your Personal Information and Usage Information in a manner that is consistent with this Privacy Policy and the context of our relationship with you. We will use your Personal Information and Usage Information collected through the Site for the following purposes:"
                  ),
                ]),
                n("ul", [
                  n("li", [e._v("To identify you when you sign in to your account;")]),
                  n("li", [e._v("To respond to your requests and to provide you with the Services;")]),
                  n("li", [e._v("To respond to your inquiries and contact you about changes to the Site and/or the Services;")]),
                  n("li", [
                    e._v(
                      "To send you notices (for example, in the form of e-mails, mailings, and the like) regarding products or services you are receiving, and for billing and collection purposes; "
                    ),
                  ]),
                  n("li", [e._v("To send you information we think you may find useful or that you have requested from us;")]),
                  n("li", [e._v("To enhance and improve the Site or the Service, such as through personalized features and content;")]),
                  n("li", [
                    e._v("To analyze the use of the Site and the Service and the people visiting to improve our content and Site and the Service; "),
                  ]),
                  n("li", [
                    e._v(
                      "To investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of our policies, or as otherwise required by law; "
                    ),
                  ]),
                  n("li", [e._v("For any other purposes disclosed at the time the information is collected or to which you consent; and ")]),
                  n("li", [e._v("As otherwise specifically described in this Privacy Policy.")]),
                ]),
                n("p", [
                  n("strong", [e._v("Disclosure of Personal Information to Third Parties ")]),
                  e._v("We do not disclose your Personal Information to third parties for their"),
                ]),
                n("p", [
                  e._v(
                    "direct marketing purposes. We, like many businesses, sometimes hire other companies to perform certain business-related functions. Examples include mailing information, maintaining databases, hosting services, and processing payments. When we employ another company to perform a function of this nature, we provide them with the information that they need to perform their specific function, which may include Personal Information. We also require these companies to agree to a strict privacy policy that prohibits them from further sharing Personal Information. If we or all or substantially all of our assets are acquired, we expect that the information that we have collected, including Personal Information, would be transferred along with our other business assets. We may disclose your Personal Information and Usage Information to government authorities and to other third parties when compelled to do so by government authorities, at our discretion, or otherwise as required by law, including but not limited to in response to court orders and subpoenas. We may also disclose your Personal Information and Usage Information when we have reason to believe that someone is or may be causing injury to or interference with our rights or property, other users of this Site, or anyone else that could be harmed by such activities."
                  ),
                ]),
                n("p", [
                  n("strong", [e._v("How We Protect Your Information ")]),
                  e._v(
                    "We take commercially reasonable steps to protect the Personal Information from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. Please understand, however, that no security system is impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that the information you supply will not be intercepted while being transmitted to and from us over the Internet. In particular, e-mail sent to or from us may not be secure, and you should therefore take special care in deciding what information you send to us via e-mail."
                  ),
                ]),
                n("p", [
                  n("strong", [e._v("Accessing and Modifying Account Information ")]),
                  e._v("You may update the information that is stored in your user account by e-mailing us at contact@truewayasl.com."),
                ]),
                n("p", [
                  e._v(
                    "We strive to help parents ensure that their kids have a safe experience using our Services. We are also committed to complying with the terms of the Family Educational Rights and Privacy Act (FERPA), 20 U.S.C. § 1232g. Parents or legal guardians can review any Personal Information collected about their child under 18 years of age, have this information deleted, request that there be no further collection or use of their child’s Personal Information, and/or allow for our collection and use of their child’s Personal Information while withholding consent for us to disclose it to third parties. We take steps to verify the identity of anyone requesting information about a child and to ensure that the person is, in fact, the child’s parent or legal guardian."
                  ),
                ]),
                n("p", [
                  n("strong", [e._v("Your Choices ")]),
                  e._v(
                    "If you wish to stop receiving promotional e-mails, you may do so by e- mailing [contact@truewayasl.com]. You may also choose to unsubscribe from our emails by following the instructions in the bottom of the email."
                  ),
                ]),
                n("p", [
                  n("strong", [e._v("Links ")]),
                  e._v(
                    "The Site may contain content, services, advertising and other materials that link to websites operated by third parties. We have no control over those other sites, and this Privacy Policy does not apply to them. Please refer to the privacy policies of those sites for more information on how the operators of those sites collect and use your Personal Information."
                  ),
                ]),
                n("p", [
                  n("strong", [e._v("Shine the Light Law ")]),
                  e._v(
                    "Under California Civil Code Section 1798.83, California residents who have an established business relationship with us may choose to opt out of our sharing their contact information with third parties for direct marketing purposes. If you are a California resident and you wish to opt out, please send an e-mail to contact@truewayasl.com."
                  ),
                ]),
                n("p", [
                  n("strong", [e._v("Do Not Track ")]),
                  e._v(
                    "We do not monitor, recognize, or honor any opt-out or do not track mechanisms, including general web browser “Do Not Track” settings and/or signals."
                  ),
                ]),
                n("p", [
                  n("strong", [e._v("Important Notice to Users Outside the U.S. ")]),
                  e._v(
                    "The Site and the Services are operated in the United States. If you are located outside of the United States, please be aware that any information you provide to us will be transferred to the United States. By providing us with any information through the Site or the Services, you consent to this transfer."
                  ),
                ]),
                n("p", [
                  n("strong", [e._v("Changes to This Privacy Policy ")]),
                  e._v(
                    "This Privacy Policy is effective as of the date stated at the top of this Privacy Policy. We may change this Privacy Policy from time to time and will post any changes on the Site as soon as they go into effect. By accessing the Site or using the Services after we make any such changes to this Privacy Policy, you are deemed to have accepted such changes. Please refer back to this Privacy Policy on a regular basis."
                  ),
                ]),
                n("p", [
                  n("strong", [e._v("How to Contact Us ")]),
                  e._v(
                    "If you have questions about this Privacy Policy, please e-mail us at contact@truewayasl.com, “PRIVACY POLICY” in the subject line, or mail us at the following address: 2028 East Ben White Blvd, Box 240-11570, Austin, Texas 78741."
                  ),
                ]),
              ]),
            ]),
          ],
          1
        );
      },
      s = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("p", { staticClass: "text-center text-muted small" }, [
            e._v(" Copyright © 2025 TRUE+WAY ASL. All Rights Reserved. "),
            n("a", { staticClass: "ml-3 mr-2", attrs: { href: "https://truewayasl.com/terms", target: "_blank" } }, [e._v("Terms of Use")]),
            e._v(" | "),
            n("a", { staticClass: "ml-2", attrs: { href: "https://truewayasl.com/privacy", target: "_blank" } }, [e._v("Privacy Policy")]),
          ]);
        },
      ],
      a =
        (n("7db0"),
        n("2ca0"),
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "mb-3" },
            [
              ["/dictionary", "/teacher", "/lti/pay", "/lti/wts", "/lti/teacher"].includes(e.$route.path)
                ? e._e()
                : n(
                    "b-navbar",
                    { attrs: { toggleable: "sm", type: "dark", variant: "dark" } },
                    [
                      n("b-navbar-brand", { attrs: { to: "/" } }, [
                        n("img", {
                          staticClass: "d-inline-block align-top",
                          staticStyle: { height: "50px" },
                          attrs: { src: "/twa-logo.png", alt: "TRUE+WAY ASL Logo" },
                        }),
                      ]),
                      n("b-navbar-toggle", { attrs: { target: "nav_collapse" } }),
                      e.isAuthenticated
                        ? n(
                            "b-collapse",
                            { attrs: { "is-nav": "", id: "nav_collapse" } },
                            [
                              n(
                                "b-navbar-nav",
                                [
                                  n("b-nav-item", { attrs: { "active-class": "active", to: "/access_code" } }, [e._v("Check Access Code")]),
                                  n("b-nav-item", { attrs: { "active-class": "active", to: "/course" } }, [e._v("Activate 1.1 Course")]),
                                  n("b-nav-item", { attrs: { "active-class": "active", to: "/token" } }, [e._v("Process Enrollment")]),
                                  n("b-nav-item", { attrs: { "active-class": "active", to: "/email" } }, [e._v("Check Email")]),
                                  n("b-nav-item", { attrs: { "active-class": "active", to: "/import_access_codes" } }, [e._v("Import Access Codes")]),
                                  n("b-nav-item", { attrs: { "active-class": "active", to: "/manage_consumer" } }, [e._v("Manage Consumer")]),
                                  n("b-nav-item", { attrs: { "active-class": "active", to: "/create_platform" } }, [
                                    e._v("Create LTI 1.3 Credentials"),
                                  ]),
                                  n("b-nav-item", { attrs: { "active-class": "active", to: "/activate_course" } }, [e._v("Activate 1.3 Course")]),
                                  n("b-nav-item", { attrs: { "active-class": "active", to: "/manage_sproutvideo" } }, [e._v("Manage SproutVideo")]),
                                  n("b-nav-item", { attrs: { "active-class": "active", to: "/manage_product" } }, [e._v("Manage Product")]),
                                ],
                                1
                              ),
                              n(
                                "b-navbar-nav",
                                { staticClass: "ml-auto" },
                                [
                                  n(
                                    "b-nav-form",
                                    [
                                      n(
                                        "b-row",
                                        [
                                          n(
                                            "b-col",
                                            [
                                              e.showFirstName
                                                ? n("span", { staticClass: "navbar-text text-white" }, [e._v(e._s(e.profile.user.first_name))])
                                                : e._e(),
                                              e.showAvatar
                                                ? n("b-img", {
                                                    staticStyle: { "max-width": "2.3rem" },
                                                    attrs: { src: e.profile.user.image_url, rounded: "circle" },
                                                  })
                                                : e._e(),
                                              e.isAuthenticated
                                                ? n(
                                                    "b-button",
                                                    { staticClass: "mx-2", attrs: { variant: "danger", size: "sm" }, on: { click: e.logout } },
                                                    [e._v("Log out ")]
                                                  )
                                                : e._e(),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : e._e(),
                    ],
                    1
                  ),
              n(
                "b-container",
                [
                  n("b-alert", { attrs: { variant: "danger", show: e.showAlert, fade: "", dismissible: "" }, on: { dismissed: e.dismissAlert } }, [
                    e._v(e._s(e.alertMessage)),
                  ]),
                ],
                1
              ),
            ],
            1
          );
        }),
      l = [],
      c =
        (n("caad"),
        n("2532"),
        {
          name: "NavBar",
          data: function () {
            return { isAuthenticated: !1, profile: {} };
          },
          computed: {
            isManager: function () {
              return this.$store.state.user && this.$store.state.user.roles.includes("manager");
            },
            showFirstName: function () {
              return this.isAuthenticated && this.profile && this.profile.user && !this.profile.user.image_url;
            },
            showAvatar: function () {
              return this.isAuthenticated && this.profile && this.profile.user && this.profile.user.image_url;
            },
            showAlert: function () {
              return this.$store.state.showAlert;
            },
            alertMessage: function () {
              return this.$store.state.alertMessage;
            },
          },
          methods: {
            dismissAlert: function () {
              this.$store.commit("dismissAlert");
            },
            logout: function () {
              this.$auth.logOut(), this.$router.push({ path: "/" });
            },
            handleLoginEvent: function (e) {
              (this.isAuthenticated = e.loggedIn), (this.profile = e.profile);
            },
          },
        }),
      u = c,
      p = n("2877"),
      d = Object(p["a"])(u, a, l, !1, null, null, null),
      m = d.exports,
      h = {
        components: { NavBar: m },
        created: function () {
          var e = this,
            t = [
              "/course",
              "/access_code",
              "/token",
              "/email",
              "/import_access_codes",
              "/manage_consumer",
              "/create_platform",
              "/activate_course",
              "/manage_sproutvideo",
              "/manage_product",
            ];
          t.find(function (t) {
            return e.$router.currentRoute.path.startsWith(t);
          }) && this.$auth.refresh();
        },
      },
      f = h,
      g = (n("5c0b"), Object(p["a"])(f, i, s, !1, null, null, null)),
      v = g.exports,
      b = n("0937"),
      _ = n("bc3a"),
      y = n.n(_),
      w = n("0493"),
      k = n("d4ec"),
      S = n("bee2"),
      C = n("262e"),
      x = n("2caf"),
      A = n("ade3"),
      P = (function (e) {
        Object(C["a"])(n, e);
        var t = Object(x["a"])(n);
        function n() {
          return Object(k["a"])(this, n), t.apply(this, arguments);
        }
        return (
          Object(S["a"])(n, null, [
            {
              key: "fields",
              value: function () {
                return { id: this.attr(null), name: this.attr("") };
              },
            },
          ]),
          n
        );
      })(b["b"]);
    Object(A["a"])(P, "entity", "accounts");
    var E = (function (e) {
      Object(C["a"])(n, e);
      var t = Object(x["a"])(n);
      function n() {
        return Object(k["a"])(this, n), t.apply(this, arguments);
      }
      return (
        Object(S["a"])(n, null, [
          {
            key: "fields",
            value: function () {
              return { id: this.attr(null), name: this.attr(""), course_code: this.attr("") };
            },
          },
        ]),
        n
      );
    })(b["b"]);
    Object(A["a"])(E, "entity", "units");
    n("4160"), n("13d5"), n("159b"), n("99af"), n("fb6a"), n("ac1f"), n("1276"), n("96cf");
    var T = n("1da1"),
      R = "https://learn.truewayasl.com",
      I = "utlFwIXQOfQSU1WHppsGyVEX0ikueEMC3dhEx0nAfk36wgqWWQIoSNg5MXFN3Yee",
      O = (function (e) {
        Object(C["a"])(n, e);
        var t = Object(x["a"])(n);
        function n() {
          return Object(k["a"])(this, n), t.apply(this, arguments);
        }
        return (
          Object(S["a"])(
            n,
            [
              {
                key: "getProgress",
                value: (function () {
                  var e = Object(T["a"])(
                    regeneratorRuntime.mark(function e() {
                      var t, r, o, i;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!(this.completion < 100)) {
                                  e.next = 15;
                                  break;
                                }
                                return (
                                  (t = this.progress_url.split("/").slice(-1).pop()),
                                  (r = "".concat(R, "/api/v1/progress/").concat(t)),
                                  (e.next = 5),
                                  y.a.get(r, { headers: { Authorization: "Bearer ".concat(I) } })
                                );
                              case 5:
                                if (((o = e.sent), this.completion === o.data.completion)) {
                                  e.next = 13;
                                  break;
                                }
                                return (
                                  console.log(
                                    "Updating " + this.source_course_name + "'s progress from " + this.completion + " to " + o.data.completion + "%"
                                  ),
                                  (i = "".concat(R, "/api/v1/courses/").concat(this.course_id, "/content_migrations/").concat(this.id)),
                                  (e.next = 11),
                                  n.api().get(i, {
                                    headers: { Authorization: "Bearer ".concat(I) },
                                    dataTransformer: function (e) {
                                      var t = e.data;
                                      return (t.completion = o.data.completion), t;
                                    },
                                  })
                                );
                              case 11:
                                e.next = 13;
                                break;
                              case 13:
                                e.next = 15;
                                break;
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
            ],
            [
              {
                key: "fields",
                value: function () {
                  return {
                    id: this.attr(null),
                    course_id: this.attr(null),
                    progress_url: this.attr(null),
                    workflow_state: this.attr(null),
                    source_course_name: this.attr(null),
                    completion: this.attr(0),
                  };
                },
              },
              {
                key: "fetchByCourse",
                value: (function () {
                  var e = Object(T["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var r;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = "".concat(R, "/api/v1/courses/").concat(t.id, "/content_migrations")),
                                (e.next = 3),
                                n.api().get(r, {
                                  headers: { Authorization: "Bearer ".concat(I) },
                                  dataTransformer: function (e) {
                                    var n = e.data;
                                    return (
                                      n.forEach(function (e) {
                                        (e.course_id = t.id),
                                          "undefined" === typeof e.settings
                                            ? (e.source_course_name = "Unknown")
                                            : (e.source_course_name = e.settings.source_course_name);
                                      }),
                                      n
                                    );
                                  },
                                })
                              );
                            case 3:
                              t.updateCompletion();
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "afterUpdate",
                value: function (e) {
                  var t = D.find(e.course_id);
                  t.updateCompletion();
                },
              },
            ]
          ),
          n
        );
      })(b["b"]);
    Object(A["a"])(O, "entity", "content_migrations");
    var D = (function (e) {
      Object(C["a"])(n, e);
      var t = Object(x["a"])(n);
      function n() {
        return Object(k["a"])(this, n), t.apply(this, arguments);
      }
      return (
        Object(S["a"])(
          n,
          [
            {
              key: "updateCompletion",
              value: function () {
                var e = n.query().with("content_migrations").find(this.id),
                  t = [];
                if (
                  (e.content_migrations.forEach(function (e) {
                    "completed" === e.workflow_state &&
                      100 !== e.completion &&
                      (console.log("Updating " + e.source_course_name + "'s completion from " + e.completion + "% to 100%"), (e.completion = 100)),
                      t.push(e.completion);
                  }),
                  t.length)
                ) {
                  var r = t.reduce(function (e, t) {
                      return t + e;
                    }),
                    o = (r / (100 * t.length)) * 100;
                  e.completion !== o &&
                    (console.log("Updating " + e.course_code + "'s completion from " + e.completion + "% to " + o + "%"),
                    this.$update({ completion: o }));
                } else
                  console.log("Updating " + e.course_code + "'s completion to " + e.completion + "%. No migrations."),
                    this.$update({ completion: 100 });
              },
            },
          ],
          [
            {
              key: "fields",
              value: function () {
                return {
                  id: this.attr(null),
                  account_id: this.attr(null),
                  name: this.attr(""),
                  course_code: this.attr(""),
                  workflow_state: this.attr(""),
                  completion: this.attr(0),
                  is_new: this.attr(!1),
                  content_migrations: this.hasMany(O, "course_id"),
                };
              },
            },
            {
              key: "afterWhere",
              value: function (e) {
                var t = this;
                return (
                  e.forEach(function (e) {
                    e.is_new || t.migrationsLoaded.includes(e.id) || e.course_code.startsWith("Unit");
                  }),
                  e
                );
              },
            },
          ]
        ),
        n
      );
    })(b["b"]);
    Object(A["a"])(D, "entity", "courses"), Object(A["a"])(D, "migrationsLoaded", []);
    var M = (function (e) {
      Object(C["a"])(n, e);
      var t = Object(x["a"])(n);
      function n() {
        return Object(k["a"])(this, n), t.apply(this, arguments);
      }
      return (
        Object(S["a"])(n, null, [
          {
            key: "fields",
            value: function () {
              return { id: this.attr(null), product_code: this.attr(null), name: this.attr("") };
            },
          },
        ]),
        n
      );
    })(b["b"]);
    Object(A["a"])(M, "entity", "products");
    var L = (function (e) {
      Object(C["a"])(n, e);
      var t = Object(x["a"])(n);
      function n() {
        return Object(k["a"])(this, n), t.apply(this, arguments);
      }
      return (
        Object(S["a"])(n, null, [
          {
            key: "fields",
            value: function () {
              return { id: this.attr(null), first_name: this.attr(""), last_name: this.attr("") };
            },
          },
        ]),
        n
      );
    })(b["b"]);
    Object(A["a"])(L, "entity", "users"), b["c"].use(w["a"], { axios: y.a });
    var N = new b["a"]();
    N.register(P), N.register(E), N.register(D), N.register(M), N.register(O), N.register(L);
    var j = N;
    r["default"].use(o["a"]);
    var W = !1;
    console.log("debug", W);
    var U = new o["a"].Store({
        strict: W,
        plugins: [b["c"].install(j)],
        state: { user: null, showAlert: !1, alertMessage: "Default Message" },
        mutations: {
          setAlert: function (e, t) {
            (e.alertMessage = t), (e.showAlert = !0);
          },
          dismissAlert: function (e) {
            (e.alertMessage = "Default Message"), (e.showAlert = !1);
          },
          setUser: function (e, t) {
            e.user = t;
          },
        },
        actions: {},
        modules: {},
      }),
      F = (n("d3b7"), n("8c4f"));
    n("b680");
    y.a.defaults.headers.common["Accept"] = "application/json";
    var B = "https://api.truewayasl.com";
    function H() {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = Object(T["a"])(
          regeneratorRuntime.mark(function e() {
            var t, n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (t = "".concat(B, "/api/lti/ping")), (e.next = 3), y.a.get(t, { withCredentials: !0 });
                  case 3:
                    return (n = e.sent), e.abrupt("return", n.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        z.apply(this, arguments)
      );
    }
    function Y() {
      return localStorage.getItem("accessToken");
    }
    function V(e, t, n) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n, r) {
            var o, i;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (o = "".concat(B, "/api/auth/magic")), (e.next = 3), y.a.post(o, { connection: t, target: n, recaptcha_response: r });
                  case 3:
                    return (i = e.sent), e.abrupt("return", i.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        q.apply(this, arguments)
      );
    }
    function G(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n, r) {
            var o, i;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (o = "".concat(B, "/api/auth/login")), (e.next = 3), y.a.post(o, { connection: t, target: n, code: r });
                  case 3:
                    return (i = e.sent), e.abrupt("return", i.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        $.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = "".concat(B, "/api/auth/refresh")), (e.next = 3), y.a.post(n, { refresh_token: t });
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/api/courses?enroll_token=") + t),
                      (e.next = 3),
                      y.a.get(n, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.course);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        J.apply(this, arguments)
      );
    }
    function Z(e, t, n, r, o) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n, r, o, i) {
            var s, a;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (s = "".concat(B, "/api/students/send_code")),
                      (e.next = 3),
                      y.a.post(s, { context_id: t, name: n, email: r, password: o, recaptcha_response: i })
                    );
                  case 3:
                    return (a = e.sent), e.abrupt("return", a.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        ee.apply(this, arguments)
      );
    }
    function te(e, t, n) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n, r) {
            var o, i;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (o = "".concat(B, "/api/students/verify_code")), (e.next = 3), y.a.post(o, { context_id: t, email: n, magic_code: r });
                  case 3:
                    return (i = e.sent), e.abrupt("return", i.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        ne.apply(this, arguments)
      );
    }
    function re(e, t, n) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n, r) {
            var o, i;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = "".concat(B, "/api/payments/verify_coupon_code")), (e.next = 3), y.a.post(o, { enroll_token: t, email: n, coupon_code: r })
                    );
                  case 3:
                    return (i = e.sent), e.abrupt("return", i.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        oe.apply(this, arguments)
      );
    }
    function ie() {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = Object(T["a"])(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = "".concat(B, "/api/products")),
                      (e.next = 3),
                      M.api().get(t, { dataKey: "products", headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        se.apply(this, arguments)
      );
    }
    function ae(e) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/api/lti_courses/") + t), (e.next = 3), y.a.get(n, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.lti_course);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        le.apply(this, arguments)
      );
    }
    function ce(e) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/twa/get_lti_courses/") + t), (e.next = 3), y.a.get(n, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.lti_courses);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        ue.apply(this, arguments)
      );
    }
    function pe(e) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/twa/activate_lti_course/") + t.context_id),
                      (e.next = 3),
                      y.a.post(n, { lti_course: t }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.lti_course);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        de.apply(this, arguments)
      );
    }
    function me(e) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = "".concat(B, "/api/coupons/") + t), (e.next = 3), y.a.get(n, { headers: { Authorization: "Bearer ".concat(Y()) } });
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.coupons);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        he.apply(this, arguments)
      );
    }
    function fe(e) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r, o;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log("csvfile:" + t),
                      (n = "".concat(B, "/twa/import_coupons")),
                      (r = new FormData()),
                      r.append("csvfile", t),
                      (e.next = 6),
                      y.a.post(n, r, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 6:
                    return (o = e.sent), console.log(o), e.abrupt("return", o.data);
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        ge.apply(this, arguments)
      );
    }
    function ve(e) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/twa/get_enrollments")),
                      (e.next = 3),
                      y.a.post(n, { email: t }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.lti_enrollments);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        be.apply(this, arguments)
      );
    }
    function _e(e) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/twa/get_enrollment")),
                      (e.next = 3),
                      y.a.post(n, { token: t }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.lti_enrollment);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        ye.apply(this, arguments)
      );
    }
    function we(e) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/twa/process_enrollment")),
                      (e.next = 3),
                      y.a.post(n, { token: t }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.lti_enrollment);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        ke.apply(this, arguments)
      );
    }
    function Se(e) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/twa/unprocess_enrollment")),
                      (e.next = 3),
                      y.a.post(n, { token: t }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.lti_enrollment);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Ce.apply(this, arguments)
      );
    }
    function xe(e) {
      return Ae.apply(this, arguments);
    }
    function Ae() {
      return (
        (Ae = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/twa/get_memberships")),
                      (e.next = 3),
                      y.a.post(n, { email: t }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.memberships);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Ae.apply(this, arguments)
      );
    }
    function Pe(e) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/twa/get_membership")),
                      (e.next = 3),
                      y.a.post(n, { token: t }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.membership);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Ee.apply(this, arguments)
      );
    }
    function Te(e) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/twa/process_membership")),
                      (e.next = 3),
                      y.a.post(n, { token: t }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.membership);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Re.apply(this, arguments)
      );
    }
    function Ie(e) {
      return Oe.apply(this, arguments);
    }
    function Oe() {
      return (
        (Oe = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/twa/unprocess_membership")),
                      (e.next = 3),
                      y.a.post(n, { token: t }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.membership);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Oe.apply(this, arguments)
      );
    }
    function De(e) {
      return Me.apply(this, arguments);
    }
    function Me() {
      return (
        (Me = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/twa/find_consumer")),
                      (e.next = 3),
                      y.a.post(n, { key: t }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Me.apply(this, arguments)
      );
    }
    function Le(e, t) {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = "".concat(B, "/twa/create_consumer")),
                      (e.next = 3),
                      y.a.post(r, { key: t, name: n }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (o = e.sent), e.abrupt("return", o.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Ne.apply(this, arguments)
      );
    }
    function je(e, t, n) {
      return We.apply(this, arguments);
    }
    function We() {
      return (
        (We = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n, r) {
            var o, i;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = "".concat(B, "/twa/update_consumer")),
                      (e.next = 3),
                      y.a.post(o, { key: t, accepts_payment: n, accepts_access_code: r }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (i = e.sent), e.abrupt("return", i.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        We.apply(this, arguments)
      );
    }
    function Ue(e, t, n) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n, r) {
            var o, i;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = "".concat(B, "/twa/create_platform")),
                      (e.next = 3),
                      y.a.post(o, { domain: t, client_id: n, d2l: r }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (i = e.sent), e.abrupt("return", i.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Fe.apply(this, arguments)
      );
    }
    function Be(e, t, n) {
      return He.apply(this, arguments);
    }
    function He() {
      return (
        (He = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n, r) {
            var o, i;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = "".concat(B, "/twa/activate_course")),
                      (e.next = 3),
                      y.a.post(o, { token: t, product_code: n, create_coupon: r }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (i = e.sent), e.abrupt("return", i.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        He.apply(this, arguments)
      );
    }
    function ze() {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = Object(T["a"])(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = "".concat(B, "/api/users")),
                      (e.next = 3),
                      L.api().get(t, { dataKey: "users", headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Ye.apply(this, arguments)
      );
    }
    function Ve(e) {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/twa/check_domain")),
                      (e.next = 3),
                      y.a.post(n, { domain: t }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.accounts);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        qe.apply(this, arguments)
      );
    }
    function Ge(e, t) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = "".concat(B, "/twa/add_domain")),
                      (e.next = 3),
                      y.a.post(r, { domain: t, units: n }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (o = e.sent), e.abrupt("return", o.data.accounts);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        $e.apply(this, arguments)
      );
    }
    function Ke(e, t) {
      return Qe.apply(this, arguments);
    }
    function Qe() {
      return (
        (Qe = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = "".concat(B, "/twa/remove_domain")),
                      (e.next = 3),
                      y.a.post(r, { domain: t, units: n }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (o = e.sent), e.abrupt("return", o.data.accounts);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Qe.apply(this, arguments)
      );
    }
    function Xe(e) {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (
        (Je = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = "".concat(B, "/twa/check_product")),
                      (e.next = 3),
                      y.a.post(n, { product_code: t }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Je.apply(this, arguments)
      );
    }
    function Ze(e, t, n, r) {
      return et.apply(this, arguments);
    }
    function et() {
      return (
        (et = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n, r, o) {
            var i, s;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = "".concat(B, "/twa/create_product")),
                      (e.next = 3),
                      y.a.post(i, { product_code: t, stripe_price_id: n, name: r, units: o }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (s = e.sent), e.abrupt("return", s.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        et.apply(this, arguments)
      );
    }
    function tt(e, t, n, r) {
      return nt.apply(this, arguments);
    }
    function nt() {
      return (
        (nt = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n, r, o) {
            var i, s;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = "".concat(B, "/twa/update_product")),
                      (e.next = 3),
                      y.a.post(i, { product_code: t, stripe_price_id: n, name: r, units: o }, { headers: { Authorization: "Bearer ".concat(Y()) } })
                    );
                  case 3:
                    return (s = e.sent), e.abrupt("return", s.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        nt.apply(this, arguments)
      );
    }
    var rt = n("faa1"),
      ot = "loggedIn",
      it = "accessToken",
      st = "refreshToken",
      at = "loginEvent",
      lt = (function (e) {
        Object(C["a"])(n, e);
        var t = Object(x["a"])(n);
        function n() {
          return Object(k["a"])(this, n), t.apply(this, arguments);
        }
        return (
          Object(S["a"])(n, [
            {
              key: "createMagic",
              value: (function () {
                var e = Object(T["a"])(
                  regeneratorRuntime.mark(function e(t, n, r) {
                    var o;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), V(t, n, r);
                          case 2:
                            return (o = e.sent), e.abrupt("return", o.code);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t(t, n, r) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "login",
              value: (function () {
                var e = Object(T["a"])(
                  regeneratorRuntime.mark(function e(t, n, r) {
                    var o, i, s;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), G(t, n, r);
                            case 2:
                              return (
                                (o = e.sent),
                                (i = JSON.parse(atob(o.token.split(".")[1]))),
                                (s = Math.round(Date.now() / 1e3)),
                                console.log("Logged in. Expiry in " + ((i.exp - s) / 60).toFixed(2) + " minutes"),
                                localStorage.setItem(ot, "true"),
                                localStorage.setItem(it, o.token),
                                localStorage.setItem(st, o.refreshToken),
                                U.commit("setUser", i.user),
                                this.emit(at, { loggedIn: !0, profile: i }),
                                e.abrupt("return", o)
                              );
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t, n, r) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "refresh",
              value: (function () {
                var e = Object(T["a"])(
                  regeneratorRuntime.mark(function e() {
                    var t, n, r, o;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((e.prev = 0), (t = localStorage.getItem(st)), !t)) {
                                e.next = 15;
                                break;
                              }
                              return (e.next = 5), K(t);
                            case 5:
                              (n = e.sent),
                                (r = JSON.parse(atob(n.token.split(".")[1]))),
                                (o = Math.round(Date.now() / 1e3)),
                                console.log("Token refreshed. Expiry in " + ((r.exp - o) / 60).toFixed(2) + " minutes"),
                                localStorage.setItem(ot, "true"),
                                localStorage.setItem(it, n.token),
                                U.commit("setUser", r.user),
                                this.emit(at, { loggedIn: !0, profile: r }),
                                (e.next = 17);
                              break;
                            case 15:
                              console.log("Refresh Token not found. Logging out."), this.logOut();
                            case 17:
                              e.next = 23;
                              break;
                            case 19:
                              (e.prev = 19), (e.t0 = e["catch"](0)), console.log("Error while refreshing token. Logging out.", e.t0), this.logOut();
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 19]]
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "isAuthenticated",
              value: function () {
                return "true" === localStorage.getItem(ot);
              },
            },
            {
              key: "logOut",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                (e = e ? e + " Logging out." : "Logging out."),
                  console.log(e),
                  localStorage.removeItem(ot),
                  localStorage.removeItem(it),
                  localStorage.removeItem(st),
                  U.commit("setUser", null),
                  this.emit(at, { loggedIn: !1 }),
                  (window.document.location = window.location.origin);
              },
            },
          ]),
          n
        );
      })(rt["EventEmitter"]),
      ct = new lt(),
      ut = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticStyle: { width: "400px" } },
          [
            n(
              "b-card",
              { staticClass: "text-center" },
              [
                n("h3", [e._v("Hello!")]),
                n("br"),
                n("b-card-text", [
                  n("p", [e._v(" Happy you're here! Please contact your teacher to receive a dedicated link to join your course. ")]),
                  n("p", [e._v(" See you soon! ")]),
                ]),
              ],
              1
            ),
          ],
          1
        );
      },
      pt = [],
      dt = {},
      mt = Object(p["a"])(dt, ut, pt, !1, null, null, null),
      ht = mt.exports,
      ft = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticClass: "mt-2", staticStyle: { width: "400px" } },
          [
            e.enrollment
              ? n(
                  "b-card",
                  { staticClass: "text-center", attrs: { header: e.enrollment.lti_course.context_title } },
                  [
                    n(
                      "b-card-text",
                      { staticClass: "text-left" },
                      [
                        "agree" === e.show_form
                          ? n("div", [
                              n(
                                "div",
                                { staticClass: "mb-4" },
                                [
                                  n(
                                    "b-form-checkbox",
                                    {
                                      attrs: { name: "agreed", value: "yes", "unchecked-value": "no" },
                                      model: {
                                        value: e.form.agreed,
                                        callback: function (t) {
                                          e.$set(e.form, "agreed", t);
                                        },
                                        expression: "form.agreed",
                                      },
                                    },
                                    [
                                      e._v(" Yes, I have read and I do agree with TRUE+WAY ASL's "),
                                      n("a", { attrs: { href: "https://truewayasl.com/terms", target: "_blank" } }, [e._v("Terms of Use")]),
                                      e._v(" and "),
                                      n("a", { attrs: { href: "https://truewayasl.com/privacy", target: "_blank" } }, [e._v("Privacy Policy")]),
                                      e._v(". "),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              this.accepts_payment && this.accepts_access_code
                                ? n("div", [
                                    e._v(" Please choose below to enter your access code or to make payment to gain access to your course. "),
                                  ])
                                : this.accepts_payment
                                  ? n("div", [e._v(" Please click below to make payment to gain access to your course. ")])
                                  : n("div", [e._v(" Please click below to enter your access code to gain access to your course. ")]),
                              n(
                                "div",
                                { staticClass: "mt-4 text-center" },
                                [
                                  this.accepts_access_code
                                    ? n(
                                        "b-button",
                                        {
                                          staticClass: "mr-3",
                                          attrs: { variant: "success", disabled: "no" === e.form.agreed },
                                          on: {
                                            click: function (t) {
                                              e.show_form = "coupons";
                                            },
                                          },
                                        },
                                        [e._v("Enter Access Code ")]
                                      )
                                    : e._e(),
                                  this.accepts_payment
                                    ? n("b-button", { attrs: { variant: "success", disabled: "no" === e.form.agreed }, on: { click: e.checkout } }, [
                                        e._v("Make Payment "),
                                      ])
                                    : e._e(),
                                ],
                                1
                              ),
                            ])
                          : "coupons" === e.show_form
                            ? n(
                                "div",
                                [
                                  n(
                                    "b-input-group",
                                    { attrs: { prepend: "Access Code" } },
                                    [
                                      n("b-form-input", {
                                        attrs: { maxlength: "20", type: "text" },
                                        model: {
                                          value: e.form.coupon,
                                          callback: function (t) {
                                            e.$set(e.form, "coupon", "string" === typeof t ? t.trim() : t);
                                          },
                                          expression: "form.coupon",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  n("div", { staticClass: "mt-3" }, [
                                    this.coupons.length
                                      ? n("strong", { staticClass: "text-muted" }, [
                                          e._v(
                                            e._s(this.coupons.length) +
                                              " of " +
                                              e._s(this.enrollment.lti_course.products.length) +
                                              " codes validated: " +
                                              e._s(this.coupons.join(", "))
                                          ),
                                        ])
                                      : e._e(),
                                  ]),
                                  n(
                                    "ul",
                                    { staticClass: "mt-3" },
                                    e._l(e.coupon_errors, function (t) {
                                      return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                                    }),
                                    0
                                  ),
                                  n(
                                    "b-button",
                                    { staticClass: "mt-3", attrs: { variant: "success" }, on: { click: e.verifyCoupon } },
                                    [
                                      e._v("Submit "),
                                      this.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : "thank_you" === e.show_form
                              ? n("div", [
                                  null != e.enrollment.grade_passback_id
                                    ? n("div", [
                                        e._v(
                                          " Congratulations on completing the Enrollment process! You've unlocked the TRUE+WAY ASL digital textbook which can be found below the Enroll module in your ASL course. You may close this window. Enjoy learning TRUE+WAY ASL! "
                                        ),
                                      ])
                                    : n("div", [
                                        e._v(" Congratulations on unlocking the TRUE+WAY ASL digital textbook. To check it out, go to "),
                                        n("a", { attrs: { href: "https://" + e.enrollment.lti_course.canvas_domain } }, [
                                          e._v(e._s(e.enrollment.lti_course.canvas_domain)),
                                        ]),
                                        e._v(". Enjoy learning ASL! "),
                                      ]),
                                ])
                              : "enrolled" === e.show_form
                                ? n("div", [
                                    null != e.enrollment.grade_passback_id
                                      ? n("div", [
                                          e._v(
                                            " You are already enrolled in the TRUE+WAY ASL digital textbook. You may close this window. Enjoy learning TRUE+WAY ASL! "
                                          ),
                                        ])
                                      : n("div", [
                                          e._v(" You are already enrolled in the TRUE+WAY ASL digital textbook which can be found at "),
                                          n("a", { attrs: { href: "https://" + e.enrollment.lti_course.canvas_domain } }, [
                                            e._v(e._s(e.enrollment.lti_course.canvas_domain)),
                                          ]),
                                          e._v(". Enjoy learning TRUE+WAY ASL! "),
                                        ]),
                                  ])
                                : n(
                                    "div",
                                    [
                                      e._v(" Hang on. Getting info. "),
                                      n("b-spinner", {
                                        staticClass: "ml-2",
                                        staticStyle: { width: "1.5rem", height: "1.5rem" },
                                        attrs: { variant: "secondary" },
                                      }),
                                    ],
                                    1
                                  ),
                        n("stripe-checkout", { ref: "checkoutRef", attrs: { pk: e.stripe_key, "session-id": e.session_id } }),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : n(
                  "b-card",
                  [
                    e._v(" Hang on. Getting info. "),
                    n("b-spinner", { staticClass: "ml-2", staticStyle: { width: "1.5rem", height: "1.5rem" }, attrs: { variant: "secondary" } }),
                  ],
                  1
                ),
          ],
          1
        );
      },
      gt = [];
    y.a.defaults.headers.common["Accept"] = "application/json";
    var vt = "https://api.truewayasl.com";
    function bt(e, t) {
      return _t.apply(this, arguments);
    }
    function _t() {
      return (
        (_t = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = "".concat(vt, "/api/lti/verify_coupon_code")), (e.next = 3), y.a.post(r, { enroll_token: t, coupon_code: n });
                  case 3:
                    return (o = e.sent), e.abrupt("return", o.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        _t.apply(this, arguments)
      );
    }
    function yt(e) {
      return wt.apply(this, arguments);
    }
    function wt() {
      return (
        (wt = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = "".concat(vt, "/api/lti/get_enrollment")), (e.next = 3), y.a.post(n, { enroll_token: t });
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.lti_enrollment);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        wt.apply(this, arguments)
      );
    }
    function kt(e, t, n) {
      return St.apply(this, arguments);
    }
    function St() {
      return (
        (St = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n, r) {
            var o, i;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = "".concat(vt, "/lti/check_access?app=").concat(t, "&token=").concat(n, "&state=").concat(r)),
                      (e.next = 3),
                      y.a.get(o, { withCredentials: !0 })
                    );
                  case 3:
                    return (i = e.sent), e.abrupt("return", i.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        St.apply(this, arguments)
      );
    }
    function Ct(e) {
      return xt.apply(this, arguments);
    }
    function xt() {
      return (
        (xt = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = "".concat(vt, "/lti/get_membership?token=").concat(t)), (e.next = 3), y.a.get(n);
                  case 3:
                    return (r = e.sent), e.abrupt("return", r.data.membership);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        xt.apply(this, arguments)
      );
    }
    function At(e, t) {
      return Pt.apply(this, arguments);
    }
    function Pt() {
      return (
        (Pt = Object(T["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = "".concat(vt, "/lti/verify_access_code")), (e.next = 3), y.a.post(r, { token: t, access_code: n });
                  case 3:
                    return (o = e.sent), e.abrupt("return", o.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Pt.apply(this, arguments)
      );
    }
    function Et(e) {
      return Tt.apply(this, arguments);
    }
    function Tt() {
      return (
        (Tt = Object(T["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = "".concat(vt, "/lti/search_signs?term=") + t), (e.next = 3), y.a.get(n);
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Tt.apply(this, arguments)
      );
    }
    var Rt = n("acaf"),
      It = {
        components: { StripeCheckout: Rt["StripeCheckout"] },
        data: function () {
          return { form: { agreed: "no", coupon: null }, isSending: !1, show_form: "default", coupon_errors: [], coupons: [], enrollment: null };
        },
        computed: {
          token: function () {
            return this.$route.query.token || null;
          },
          accepts_payment: function () {
            return this.enrollment.lti_course.lti_consumer.accepts_payment;
          },
          accepts_access_code: function () {
            return this.enrollment.lti_course.lti_consumer.accepts_access_code;
          },
          stripe_key: function () {
            return "pk_live_6hvrgm1Y0ErWQJIhmct81aTp";
          },
          session_id: function () {
            return this.enrollment ? this.enrollment.session_id : null;
          },
        },
        methods: {
          getEnrollment: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!e.token) {
                            t.next = 15;
                            break;
                          }
                          return (t.prev = 1), (t.next = 4), yt(e.token);
                        case 4:
                          (e.enrollment = t.sent),
                            console.log("Enrollment", e.enrollment),
                            e.enrollment.is_processed ? (e.show_form = "thank_you") : (e.show_form = "agree"),
                            (t.next = 13);
                          break;
                        case 9:
                          (t.prev = 9), (t.t0 = t["catch"](1)), e.notifyMe(e.getErrorMessage(t.t0)), (e.need_support = !0);
                        case 13:
                          t.next = 17;
                          break;
                        case 15:
                          (e.need_support = !0), console.log("No token");
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 9]]
                );
              })
            )();
          },
          verifyCoupon: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                var n, r;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((e.isSending = !0), (t.prev = 1), !e.checkCouponForm())) {
                            t.next = 28;
                            break;
                          }
                          if (
                            ((n = e.coupons.find(function (t) {
                              return t === e.form.coupon;
                            })),
                            n)
                          ) {
                            t.next = 26;
                            break;
                          }
                          return console.log("Verifying Coupon", e.token, e.form.coupon), (t.next = 8), bt(e.token, e.form.coupon);
                        case 8:
                          (r = t.sent),
                            console.log("Verifying Coupon Response", r),
                            (t.t0 = r.status),
                            (t.next =
                              "PROCESSED" === t.t0
                                ? 13
                                : "MAX" === t.t0
                                  ? 15
                                  : "MAX_SAME_EMAIL" === t.t0
                                    ? 17
                                    : "MAX_OTHER_EMAIL" === t.t0
                                      ? 19
                                      : "OK" === t.t0
                                        ? 21
                                        : 24);
                          break;
                        case 13:
                          return (e.show_form = "thank_you"), t.abrupt("break", 24);
                        case 15:
                          return e.coupon_errors.push("This code has run out of uses. Please let your teacher know."), t.abrupt("break", 24);
                        case 17:
                          return (
                            e.coupon_errors.push(
                              "You've already used this code for another course. To transfer the code, please contact us using the chat button below."
                            ),
                            t.abrupt("break", 24)
                          );
                        case 19:
                          return (
                            e.coupon_errors.push(
                              "This code has already been used. Please return the code to where you got the code from and get a new one."
                            ),
                            t.abrupt("break", 24)
                          );
                        case 21:
                          return e.coupons.push(e.form.coupon), (e.form.coupon = ""), t.abrupt("break", 24);
                        case 24:
                          t.next = 28;
                          break;
                        case 26:
                          (e.form.coupon = ""), console.log("Coupon already added");
                        case 28:
                          t.next = 33;
                          break;
                        case 30:
                          (t.prev = 30),
                            (t.t1 = t["catch"](1)),
                            t.t1.response && 404 === t.t1.response.status
                              ? e.coupon_errors.push(t.t1.response.data.message)
                              : t.t1.response && 500 === t.t1.response.status
                                ? e.coupon_errors.push("Internal Server Error.")
                                : e.notifyMe(e.getErrorMessage(t.t1));
                        case 33:
                          e.isSending = !1;
                        case 34:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 30]]
                );
              })
            )();
          },
          checkout: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        try {
                          e.$refs.checkoutRef.redirectToCheckout();
                        } catch (n) {
                          e.notifyMe(e.getErrorMessage(n));
                        }
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          checkCouponForm: function () {
            if (
              ((this.coupon_errors = []),
              this.form.coupon || this.coupon_errors.push("Please enter the access code."),
              this.form.coupon && this.form.coupon.length < 6 && this.coupon_errors.push("The code given is not right."),
              !this.coupon_errors.length)
            )
              return !0;
          },
          getErrorMessage: function (e) {
            console.log(e);
            var t = e.message;
            return "Network Error" === t && (this.network_error = !0), e.response && (t = e.response.statusText), t;
          },
          notifyMe: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "danger";
            this.$bvToast.toast(e, { title: "Notification", solid: !0, variant: t, autoHideDelay: 2500, appendToast: !0 });
          },
          createScriptTag: function (e) {
            var t = document.createElement("script");
            return (t.type = "text/javascript"), (t.text = e), t;
          },
          addBeaconScript: function () {
            var e =
                '!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});',
              t = "window.Beacon('init', '99c004f4-81f5-469f-841d-a4e7ab4d7d6d');",
              n = this.createScriptTag(e),
              r = this.createScriptTag(t);
            document.head.appendChild(n), document.head.appendChild(r);
          },
          buildSessionDataForBeacon: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                var n, r, o, i, s;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (n = e.enrollment.lti_course.canvas_course_id),
                          (r = e.enrollment.lti_course.canvas_domain),
                          (o = e.enrollment.lti_course.context_id),
                          (i = e.enrollment.lti_course.context_label),
                          (s = e.enrollment.lti_course.context_title),
                          window.Beacon("session-data", {
                            "Enrollment Token": e.token,
                            "Course Id": n,
                            Domain: r,
                            "Context Id": o,
                            Label: i,
                            Title: s,
                          }),
                          window.Beacon("identify", { email: e.enrollment.email });
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
        mounted: function () {
          var e = this;
          return Object(T["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), e.getEnrollment();
                    case 2:
                      e.addBeaconScript(), e.buildSessionDataForBeacon();
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
      },
      Ot = It,
      Dt = Object(p["a"])(Ot, ft, gt, !1, null, null, null),
      Mt = Dt.exports,
      Lt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticClass: "mt-5", staticStyle: { width: "400px" } },
          [
            e.enrollment
              ? n(
                  "b-card",
                  { staticClass: "text-center", attrs: { header: e.enrollment.lti_course.context_title } },
                  [
                    n("b-card-text", { staticClass: "text-left" }, [
                      e.passback
                        ? n("div", [
                            e._v(
                              " Congratulations on completing the Enrollment process! You've unlocked the TRUE+WAY ASL digital textbook which can be found below the Enroll module in your ASL course. You may close this window. Enjoy learning TRUE+WAY ASL! "
                            ),
                          ])
                        : n("div", [
                            e._v(" Congratulations on unlocking the TRUE+WAY ASL digital textbook. To check it out, go to "),
                            n("a", { attrs: { href: "https://" + e.enrollment.lti_course.canvas_domain } }, [
                              e._v(e._s(e.enrollment.lti_course.canvas_domain)),
                            ]),
                            e._v(". Enjoy learning ASL! "),
                          ]),
                    ]),
                  ],
                  1
                )
              : n(
                  "b-card",
                  [
                    e._v(" Hang on. Getting info. "),
                    n("b-spinner", { staticClass: "ml-2", staticStyle: { width: "1.5rem", height: "1.5rem" }, attrs: { variant: "secondary" } }),
                  ],
                  1
                ),
          ],
          1
        );
      },
      Nt = [],
      jt = {
        data: function () {
          return { enrollment: null };
        },
        computed: {
          token: function () {
            return this.$route.query.token || null;
          },
          passback: function () {
            return null !== this.enrollment.grade_passback_id;
          },
        },
        methods: {
          getEnrollment: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!e.token) {
                            t.next = 16;
                            break;
                          }
                          return (t.prev = 1), (t.next = 4), yt(e.token);
                        case 4:
                          (n = t.sent),
                            console.log("Enrollment", n),
                            (e.enrollment = n),
                            n.is_processed ? (e.show_form = "enrolled") : (e.show_form = "agree"),
                            (t.next = 14);
                          break;
                        case 10:
                          (t.prev = 10), (t.t0 = t["catch"](1)), e.notifyMe(e.getErrorMessage(t.t0)), (e.need_support = !0);
                        case 14:
                          t.next = 18;
                          break;
                        case 16:
                          (e.need_support = !0), console.log("No token");
                        case 18:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 10]]
                );
              })
            )();
          },
          getErrorMessage: function (e) {
            console.log(e);
            var t = e.message;
            return "Network Error" === t && (this.network_error = !0), e.response && (t = e.response.statusText), t;
          },
          notifyMe: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "danger";
            this.$bvToast.toast(e, { title: "Notification", solid: !0, variant: t, autoHideDelay: 2500, appendToast: !0 });
          },
        },
        mounted: function () {
          this.getEnrollment();
        },
      },
      Wt = jt,
      Ut = Object(p["a"])(Wt, Lt, Nt, !1, null, null, null),
      Ft = Ut.exports,
      Bt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { attrs: { fluid: "" } },
          [
            e.show
              ? n("div", [n("Teacher", { attrs: { units_for_teacher: e.units_for_teacher } })], 1)
              : n(
                  "b-card",
                  { staticClass: "text-center" },
                  [
                    e.load
                      ? n("b-card-text", [e._v("Loading")])
                      : n("b-card-text", [
                          n("p", [e._v("It looks like the page expired. Please close the page and try again.")]),
                          n("p", [e._v("If it still doesn't work, contact us at hello@truewayasl.com")]),
                        ]),
                  ],
                  1
                ),
            n("div", { staticClass: "text-right" }, [n("span", { staticClass: "small text-muted" }, [e._v("context_id: " + e._s(this.context_id))])]),
          ],
          1
        );
      },
      Ht = [],
      zt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-card",
          { attrs: { "no-body": "" } },
          [
            n(
              "b-tabs",
              { attrs: { card: "" } },
              [
                n("b-tab", { attrs: { title: "What's the Sign?™", active: "" } }, [n("Wts")], 1),
                n(
                  "b-tab",
                  { attrs: { title: "Units" } },
                  [
                    n(
                      "b-nav",
                      { attrs: { id: "nav-units", fill: "", pills: "" } },
                      e._l(e.units_allowed, function (t) {
                        return n(
                          "b-nav-item",
                          {
                            key: t.name,
                            staticClass: "mr-1 mb-1",
                            staticStyle: { border: "lightgray 1px solid", "border-radius": "0.25rem" },
                            attrs: { active: t.id === e.unit_id, to: { path: "teacher", query: { unit: t.id } } },
                          },
                          [e._v(" " + e._s(t.id) + " ")]
                        );
                      }),
                      1
                    ),
                    n(
                      "b-row",
                      { staticClass: "mt-3", attrs: { id: "title-unit" } },
                      [n("b-col", [n("h2", { staticClass: "text-center" }, [e._v(" " + e._s(e.unit.name) + " - " + e._s(e.unit.title) + " ")])])],
                      1
                    ),
                    n(
                      "b-row",
                      { staticClass: "mt-3 text-center", attrs: { id: "downloads-link" } },
                      [
                        n("b-col", [
                          n("a", { attrs: { href: e.unit.link_1, target: "_blank" } }, [
                            n(
                              "div",
                              [n("b-icon", { staticStyle: { width: "40px", height: "100%" }, attrs: { icon: "file-zip", title: "zip file icon" } })],
                              1
                            ),
                            e._v(" Presentation Slides "),
                          ]),
                        ]),
                        n("b-col", [
                          n("a", { attrs: { href: e.unit.link_2, target: "_blank" } }, [
                            n(
                              "div",
                              [n("b-icon", { staticStyle: { width: "40px", height: "100%" }, attrs: { icon: "file-zip", title: "zip file icon" } })],
                              1
                            ),
                            e._v(" Suggested Activities "),
                          ]),
                        ]),
                        n("b-col", [
                          n("a", { attrs: { href: e.unit.link_3, target: "_blank" } }, [
                            n(
                              "div",
                              [n("b-icon", { staticStyle: { width: "40px", height: "100%" }, attrs: { icon: "file-zip", title: "zip file icon" } })],
                              1
                            ),
                            e._v(" Vocabulary Lists "),
                          ]),
                        ]),
                        n("b-col", [
                          n("a", { attrs: { href: e.unit.link_4, target: "_blank" } }, [
                            n(
                              "div",
                              [n("b-icon", { staticStyle: { width: "40px", height: "100%" }, attrs: { icon: "file-zip", title: "zip file icon" } })],
                              1
                            ),
                            e._v(" More Resources "),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    n(
                      "b-row",
                      { staticClass: "mt-1 mb-4", attrs: { id: "disclaimer" } },
                      [
                        n("b-col", [
                          n("small", { staticClass: "text-muted" }, [
                            e._v(
                              "Disclaimer: Due to various software, the documents here may look different on different devices. Please review for possible formatting issues before using."
                            ),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    n(
                      "b-row",
                      { attrs: { id: "quick-glance" } },
                      [
                        n(
                          "b-col",
                          [
                            n(
                              "b-tabs",
                              { attrs: { pills: "", vertical: "", "nav-wrapper-class": "pr-5" } },
                              e._l(e.unit.glances, function (t) {
                                return n("b-tab", { key: t.name, staticClass: "pt-3 pt-sm-1", attrs: { title: t.name } }, [
                                  n("b", [e._v(e._s(t.name))]),
                                  n("div", { staticClass: "pl-4 pt-2", domProps: { innerHTML: e._s(t.content) } }),
                                ]);
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                n("b-tab", { attrs: { title: "Course Resources" } }, [
                  n(
                    "div",
                    [
                      n(
                        "b-card-group",
                        { attrs: { deck: "" } },
                        e._l(e.sort_by_name(e.resources), function (t) {
                          return n(
                            "b-card",
                            {
                              key: t.name,
                              staticClass: "my-3",
                              staticStyle: { "min-width": "240px", "max-width": "240px" },
                              attrs: { "no-body": "", title: t.name },
                            },
                            [
                              n("b-card-body", [n("h5", [e._v(e._s(t.name))]), e._v(e._s(t.description))]),
                              n(
                                "b-card-footer",
                                [n("b-link", { staticClass: "card-link", attrs: { target: "_blank", href: t.link } }, [e._v("Open")])],
                                1
                              ),
                            ],
                            1
                          );
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                ]),
                n(
                  "b-tab",
                  { attrs: { title: "How-To Guide" } },
                  e._l(e.howtos, function (t) {
                    return n(
                      "div",
                      { key: t.title },
                      [
                        n("p", [n("strong", [e._v(" " + e._s(t.title) + " ")])]),
                        n(
                          "b-list-group",
                          { staticClass: "pb-4" },
                          e._l(e.sort_by_title(t.items), function (r) {
                            return n("b-list-group-item", {
                              key: r.title,
                              attrs: { button: "" },
                              domProps: { innerHTML: e._s(r.title) },
                              on: {
                                click: function (n) {
                                  return e.showHowTo(r, t.type);
                                },
                              },
                            });
                          }),
                          1
                        ),
                        n(
                          "b-modal",
                          {
                            attrs: {
                              size: "lg",
                              "modal-class": "modal-player",
                              "header-bg-variant": "dark",
                              "ok-only": "",
                              "header-text-variant": "light",
                              id: "modal-center",
                              scrollable: "",
                              title: e.selected_howto.title,
                            },
                            model: {
                              value: e.showModal,
                              callback: function (t) {
                                e.showModal = t;
                              },
                              expression: "showModal",
                            },
                          },
                          [n("p", { staticClass: "my-4", domProps: { innerHTML: e._s(e.selected_howto.content) } })]
                        ),
                      ],
                      1
                    );
                  }),
                  0
                ),
                n("b-tab", { attrs: { title: "FAQs" } }, [
                  n(
                    "div",
                    { staticClass: "accordion", attrs: { role: "tablist" } },
                    e._l(e.sort_by_question(e.asks), function (t, r) {
                      return n(
                        "b-card",
                        { key: t.question, staticClass: "mb-1", attrs: { "no-body": "" } },
                        [
                          n(
                            "b-card-header",
                            { staticClass: "p-1", attrs: { "header-tag": "header", id: "header-" + r, role: "tab" } },
                            [
                              n(
                                "b-button",
                                {
                                  directives: [
                                    { name: "b-toggle", rawName: "v-b-toggle", value: "accordion-" + r, expression: "'accordion-' + index" },
                                  ],
                                  attrs: { variant: "primary", block: "" },
                                },
                                [e._v(" " + e._s(t.question) + " ")]
                              ),
                            ],
                            1
                          ),
                          n(
                            "b-collapse",
                            { attrs: { id: "accordion-" + r, visible: 0 === r, accordion: "my-accordion", role: "tabpanel" } },
                            [n("b-card-body", [n("b-card-text", { domProps: { innerHTML: e._s(t.answer) } })], 1)],
                            1
                          ),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                ]),
              ],
              1
            ),
          ],
          1
        );
      },
      Yt = [],
      Vt =
        (n("d81d"),
        n("b0c0"),
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticStyle: { height: "600px", overflow: "scroll" } },
            [
              n(
                "b-row",
                [
                  n("b-col", { attrs: { cols: "0", md: "2" } }),
                  n(
                    "b-col",
                    { attrs: { cols: "12", md: "8" } },
                    [
                      n(
                        "b-input-group",
                        {
                          staticClass: "align-content-center",
                          scopedSlots: e._u([
                            {
                              key: "prepend",
                              fn: function () {
                                return [n("b-input-group-text", [e._v(" What's the Sign? ™ ")])];
                              },
                              proxy: !0,
                            },
                          ]),
                        },
                        [
                          n("b-form-input", {
                            attrs: {
                              disabled: e.isSending,
                              name: "search_input",
                              type: "text",
                              "aria-label": "Type to search signs",
                              "aria-describedby": "input-live-search",
                            },
                            nativeOn: {
                              keydown: function (t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.searchDictionary(1);
                              },
                            },
                            model: {
                              value: e.form.search,
                              callback: function (t) {
                                e.$set(e.form, "search", t);
                              },
                              expression: "form.search",
                            },
                          }),
                          n(
                            "b-input-group-append",
                            [
                              n(
                                "b-button",
                                {
                                  attrs: { block: "", variant: "success" },
                                  on: {
                                    click: function (t) {
                                      return e.searchDictionary(1);
                                    },
                                  },
                                },
                                [
                                  e._v("Search "),
                                  e.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      n("div", { staticClass: "mt-2 mb-4 small", attrs: { id: "input-live-search" } }, [
                        e._v(' Type in a word or a specific unit (i.e. "Unit 3.1") for a list of signs. '),
                      ]),
                    ],
                    1
                  ),
                  n("b-col", { attrs: { cols: "0", md: "2" } }),
                ],
                1
              ),
              e.total
                ? n(
                    "b-row",
                    [
                      n("b-col", { attrs: { cols: "0", md: "2" } }),
                      n(
                        "b-col",
                        { attrs: { cols: "12", md: "8" } },
                        [
                          n("div", { staticClass: "my-1" }, [e._v(e._s(e.terms.length) + " results")]),
                          e.terms.length
                            ? n(
                                "b-list-group",
                                e._l(e.terms, function (t, r) {
                                  return n("b-list-group-item", {
                                    key: t.id,
                                    attrs: { button: "" },
                                    domProps: { innerHTML: e._s(t.title) },
                                    on: {
                                      click: function (t) {
                                        return e.showSigns(r);
                                      },
                                    },
                                  });
                                }),
                                1
                              )
                            : e._e(),
                          n(
                            "b-modal",
                            {
                              attrs: {
                                "modal-class": "modal-player",
                                "header-bg-variant": "dark",
                                "ok-only": "",
                                "header-text-variant": "light",
                                id: "modal-center",
                                scrollable: "",
                                title: e.selected_term.title,
                              },
                              scopedSlots: e._u(
                                [
                                  {
                                    key: "modal-footer",
                                    fn: function () {
                                      return [
                                        n(
                                          "div",
                                          { staticClass: "w-100" },
                                          [
                                            n(
                                              "p",
                                              { staticClass: "float-left" },
                                              [
                                                0 !== e.selected_index
                                                  ? n(
                                                      "b-button",
                                                      {
                                                        staticClass: "mr-2",
                                                        attrs: { variant: "outline-primary", size: "sm" },
                                                        on: {
                                                          click: function (t) {
                                                            return e.showSigns(e.selected_index - 1);
                                                          },
                                                        },
                                                      },
                                                      [e._v(" Back ")]
                                                    )
                                                  : e._e(),
                                                e.terms.length !== e.selected_index + 1
                                                  ? n(
                                                      "b-button",
                                                      {
                                                        attrs: { variant: "outline-primary", size: "sm" },
                                                        on: {
                                                          click: function (t) {
                                                            return e.showSigns(e.selected_index + 1);
                                                          },
                                                        },
                                                      },
                                                      [e._v(" Next ")]
                                                    )
                                                  : e._e(),
                                              ],
                                              1
                                            ),
                                            n(
                                              "b-button",
                                              {
                                                staticClass: "float-right",
                                                attrs: { variant: "primary", size: "sm" },
                                                on: {
                                                  click: function (t) {
                                                    e.showModal = !1;
                                                  },
                                                },
                                              },
                                              [e._v(" Close ")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ];
                                    },
                                    proxy: !0,
                                  },
                                ],
                                null,
                                !1,
                                2550579017
                              ),
                              model: {
                                value: e.showModal,
                                callback: function (t) {
                                  e.showModal = t;
                                },
                                expression: "showModal",
                              },
                            },
                            [n("p", { staticClass: "my-4", domProps: { innerHTML: e._s(e.selected_term.content) } })]
                          ),
                        ],
                        1
                      ),
                      n("b-col", { attrs: { cols: "0", md: "2" } }),
                    ],
                    1
                  )
                : 0 === e.total
                  ? n(
                      "b-row",
                      [
                        n("b-col", { attrs: { cols: "0", md: "2" } }),
                        n("b-col", { attrs: { cols: "12", md: "8" } }, [n("p", [e._v(" Sorry, no signs found. Try another word or unit? ")])]),
                        n("b-col", { attrs: { cols: "0", md: "2" } }),
                      ],
                      1
                    )
                  : n(
                      "b-row",
                      [
                        n("b-col", { attrs: { cols: "0", md: "2" } }),
                        n("b-col", { attrs: { cols: "12", md: "8" } }, [
                          n(
                            "div",
                            { staticClass: "text-center" },
                            [e.isSending ? n("b-spinner", { staticClass: "m-5", attrs: { variant: "secondary", label: "Spinning" } }) : e._e()],
                            1
                          ),
                        ]),
                        n("b-col", { attrs: { cols: "0", md: "2" } }),
                      ],
                      1
                    ),
            ],
            1
          );
        }),
      qt = [],
      Gt =
        (n("5319"),
        n("841c"),
        {
          name: "dictionary",
          data: function () {
            return {
              selected_term: { title: null, content: null },
              selected_index: null,
              showModal: !1,
              form: { search: "" },
              terms: [],
              total: null,
              isSending: !1,
            };
          },
          methods: {
            showSigns: function (e) {
              (this.selected_index = e), (this.selected_term = this.terms[e]), (this.showModal = !0);
            },
            searchDictionary: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  var n;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (e.form.search = e.form.search.replace(/[“”]/g, '"')),
                              console.log("Searching", e.form.search),
                              (e.total = null),
                              (e.isSending = !0),
                              (e.terms = []),
                              (t.next = 8),
                              Et(e.form.search)
                            );
                          case 8:
                            (n = t.sent), (e.terms = n.data.terms), (e.total = e.terms.length), (e.isSending = !1), (t.next = 17);
                            break;
                          case 14:
                            (t.prev = 14), (t.t0 = t["catch"](0)), 404 === t.t0.response.status && (e.total = 0);
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 14]]
                  );
                })
              )();
            },
          },
          mounted: function () {},
        }),
      $t = Gt,
      Kt = (n("f8b7"), Object(p["a"])($t, Vt, qt, !1, null, null, null)),
      Qt = Kt.exports,
      Xt = {
        components: { Wts: Qt },
        props: { units_for_teacher: Array },
        data: function () {
          return {
            selected_howto: { title: "", content: "", link: "" },
            show: !0,
            load: !0,
            showModal: !1,
            units: [
              {
                id: "1",
                name: "Unit 1",
                title: "Welcome to the Deaf World!",
                link_1: "https://drive.google.com/drive/folders/1xxZMeOckzVRd-qpY_fIFKhbe77VA3cga?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/186HLUEu_jrab4pxmv7bFqqr976FdqaW2?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1Hbu0HQuEvYfx09650L2Skvk2fxhzbyo5?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1ZXTxXu8i4EL-YLVgX9KbBFmhgpE8fNd4?usp=sharing",
                glances: [
                  {
                    name: "1.1 Getting Started",
                    content:
                      "<p>Snapshots:</p><ul><li>Immersion</li><li>Different Learning Styles</li><li>Seating Arrangements</li><li>Attention Getting</li><li>Which Hand?</li><li>Signing Sightlines</li><li>The Signing Space</li><li>Backchanneling</li><li>Where Do I Look?</li></ul><p>PP Content:</p><ul><li>First Few Signs (yes, no, practice, immersion, cool/neat, see you later)</li><li>Activity: Attention-Getting Signals</li><li>Activity: Elephant</li></ul>",
                    note: null,
                  },
                  {
                    name: "1.2 Introduction to ASL",
                    content:
                      "<p>Snapshots:</p><ul><li>Common Misconceptions</li><li>Braille</li><li>Letters, Characters, and Handshapes</li><li>Basic Grammar Structure&nbsp;</li><li>Faces are Important Too</li><li>Navigating TWA</li><li>Sign Parameters</li></ul><p>PP Content:</p><ul><li>Basic Signs: different, same, remember, forget</li><li>Activity: Getting to Know Your Peers</li><li>Activity: Identify the Differences (parameters)</li></ul>",
                    note: null,
                  },
                  {
                    name: "1.3 ASL Foundations",
                    content:
                      "<p>Snapshots:</p><ul><li>Why is Everyone Signing So Fast?</li><li>Fingerspelling Tips</li><li>Learning the Alphabet</li><li>Common Sentence Types</li><li>Fingerspelling Names</li><li>Pronouns and Possessive Pronouns</li><li>HER</li><li>DeafDisabled</li></ul><p>PP Content:</p><ul><li>The ASL Alphabet</li><li>Spell this</li><li>Sign Substitute</li><li>ASL Activity: Fingerspelling</li><li>Review: Wh-Q Signs (what, who, where, when, why, which, how)</li><li>YOUR NAME WHAT?</li><li>ASL Activity: Identify Statement Type</li><li>Pronouns (index finger): I, you, she/he/they(singular), we/us, they/them (plural), it</li><li>Possessive Pronouns (open “B”): my, your, hers/his/their(singular), our/ours, their/theirs(plural), its</li><li>HER vs HER</li><li>Plural Pronouns (two-of-us, two-of-them… up to 9, a group of us, a group of them</li><li>Deaf Status (DeafBlind,&nbsp;DeafDisabled*, Deaf, Hard of Hearing, Late-deafened, hearing)</li><li>Time of the Day: morning, noon, afternoon, night</li><li>Greetings: Hello, Good morning….How are you? What’s happening, etc</li><li>Feeling/Mood: Good, Fine, Lousy, Tired, etc</li><li>Farewells: Bye, good night, see you later</li><li>Day of the Week: Monday-Sunday, See you on…, Assignment’s due on…</li><li>Inductions: Hello, my name is…, nice meeting you, I’d like to introduce…</li><li>Manners: Excuse me, May I ask a question?, Thank you-You’re welcome</li><li>Clarifications: I don’t understand, Can you please repeat that?</li><li>Conversation Starter: Guided Dialogue</li><li>More Basic Signs: finish, repeat, online, computer, context, concept, translate, if, video recording, homework, study, do, please, sorry</li><li>Opposites: Want – don’t want, like – don’t like, know – don’t know, understand – don’t understand, correct – incorrect, now – later</li></ul>",
                    note: "*DeafDisabled is a relatively new term created by Meredith Burke, a DeafDisabled woman with Cerebral Palsy. DeafDisabled essentially means Deaf people with Disabilities, however, DeafDisabled people want to be explicit about the equal importance of their intersectional identities as a Disabled person as a Deaf person, hence the merge of both words into one word:  DeafDisabled.  This is similar to DeafBlind communities’ desire to be viewed as DeafBlind, and not as a Deaf person with blindness. Please read Meredith Burke’s MA thesis (Meredith Burke’s MA Thesis) to learn more about the DeafDisabled term which includes all Deaf people with disabilities, whether the disability is visible (cerebral palsy, amputee, wheelchair user) or invisible (e.g. diabetes, ADHD, dyslexia).<br/>Likewise, to learn more about DeafBlind and Protactile language and philosophy, please review: http://www.protactile.org/",
                  },
                  {
                    name: "1.4 Classroom Actions",
                    content:
                      "<p>Snapshots:</p><ul><li>Articles (a/an &amp; the)</li><li>Noun Then Verb</li></ul><p>PP Content:</p><ul><li>Noun Then Verb</li><li>Examples of Noun then Verb: BOOK YOUR OPEN…, PENCIL IX PICK-UP…, TEACHER IX DISCUSS, WATCH/LOOK-AT, STAND-UP, SIT-DOWN, WRITE-ON…, ANSWER, DRAW</li><li>Working with your classmates: discuss a problem, brainstorming, work in a group, help</li><li>Working with a partner: Ask, share, dictate</li></ul>",
                    note: null,
                  },
                  {
                    name: "1.5 Basic Math and Numbers",
                    content:
                      "<p>Snapshots:</p><ul><li>Cardinal and Quantity</li></ul><p>PP Content:</p><ul><li>Cardinal/Quantity Numbers</li><li>Numbers: 0-66</li><li>Numbers: Tens</li><li>Numbers: Twin Double Digits</li><li>Basic Math: Addition, Subtraction, Multiplication, Divide, and Answer</li><li>More Math: How many? Altogether, Figure out, Problem</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "2",
                name: "Unit 2",
                title: "Academics",
                link_1: "https://drive.google.com/drive/folders/1lghC55rHqpxTfuEUClzgGxg7aCZf2-i-?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1PdaQSRUOLK6yhDoVsmkF7VDyveYR3YO5?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1GLGhApVKcD2SwSQ4C2ZeAnaF8IUDA1oh?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1UO6NWsVyzkiPoICJ8D4u7PkJaP9esBfN?usp=sharing",
                glances: [
                  {
                    name: "2.1 Types of Schools",
                    content:
                      "<p>Snapshots:</p><ul><li>Names with Prefixes</li><li>Names with Apostrophes</li><li>Ordinal Numbers</li><li>Higher Education Institutions</li></ul><p>PP Content:</p><ul><li>Schools: Nursery to preschool to high school, vocational school, ABE</li><li>School Types: Public, charter, parochial, private, boarding, home</li><li>School Choices for Deaf Students: Charter, Residential School, Regional Day School, public, mainstream, self-contained classrooms</li><li>Grade level (ordinal): 1st grade – 12th grade</li><li>Class Status: Preparatory to Senior</li><li>Postsecondary Education: Community college, university, graduated, enroll, law school, medical school</li><li>Review: College (common mistake – handshape: C)</li></ul>",
                    note: null,
                  },
                  {
                    name: "2.2 School Environment",
                    content:
                      "<p>Snapshot:</p><ul><li>Names with Titles</li></ul><p>PP Content:</p><ul><li>School environment: Campus, playground, different labs, different offices, campus police, library, cafeteria, auditorium, gym, registrar’s office, classroom, etc</li><li>Things in a Classroom: Whiteboard, door, window, desk, projector, etc.</li><li>School Supplies: Notebook, pencil, pen, stapler, calculator, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "2.3 Things You do in the Classroom",
                    content:
                      "<p>Snapshots:</p><ul><li>BREAK</li><li>Noun-Verb Pairs</li><li>CIRCLE and CIRCLE</li></ul><p>PP Content:</p><ul><li>School-Related Actions: Check, label, unscramble, compare, fill in the blank, multiple-choice, etc</li><li>”Circle”. Draw vs Shape</li><li>Manipulate the Signs: ”take out”, ”put…”, lift, carry, give, turn on/off, run, walk, eat, etc</li><li>Noun and Verb Pairs</li></ul>",
                    note: null,
                  },
                  {
                    name: "2.4 School Personnel and Colors",
                    content:
                      "<p>Snapshots:</p><ul><li>Agent Markers</li><li>Who is Your Teacher?</li><li>Dark, Light, and Bright Colors</li></ul><p>PP Content:</p><ul><li>School Personnel: Counselor, teacher, principal, security officer, coach, librarian, janitor, president, coordinator, etc</li><li>Colors: RYOGBV, tan, brown, black, grey, white</li><li>Different shades of colors</li><li>Neon/Bright colors</li></ul>",
                    note: null,
                  },
                  {
                    name: "2.5 School Subjects, Majors and Courses",
                    content:
                      "<p>Snapshots:</p><ul><li>Academic Degrees</li><li>Conjunctions - And & Then</li><li>Numbers 67-98</li><li>Roman Numerals</li></ul><p>PP Content:</p><ul><li>School Subjects/Courses: Math to Science to Culinary Arts, Languages</li><li>Area of Study, Majors, and Minors: Psychology, Business, Medical, ASL Studies, Engineering, Theatre, etc</li><li>Diploma/Degrees: High school, GED, AA, BA, MA, PhD, etc</li><li>To sign or not to sign Doctor (#DR vs DOCTOR)</li><li>College status: Drop out, on hold, withdraw, full—time, part-time, transfer, semester, graduated</li><li>Numbers: 67-98 (movements)</li><li>More numbers: 100, 1000, 10000, 100000, 1 million</li><li>The zero in hundreds</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "3",
                name: "Unit 3",
                title: "Family and Relationships",
                link_1: "https://drive.google.com/drive/folders/1PqvXhus1y0acC50y7HNpmh8yXbr8m8KO?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1jzK0Ii2alLfRbXzNllyEByh243clwlCg?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1y4OixfdQzPc07mcvnCBCNMs742GxwrLE?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1E6tm533DpcdRJn9buKMW7ywv-5JoW4_J?usp=sharing",
                glances: [
                  {
                    name: "3.1 Describing Basic Appearances",
                    content:
                      "<p>Snapshots:</p><ul><li>Referents</li><li>Referents - Present and Not Present</li><li>Listing and Ranking</li></ul><p>PP Content:</p><ul><li>Adult, child/children</li><li>Height: Tall, average, short</li><li>Use of Non-Manual Markers in ASL</li><li>Compliments: Handsome, So far, look different, resemblance, beautiful, cute, no change, look great</li></ul>",
                    note: null,
                  },
                  {
                    name: "3.2 Family, Friends, and Pets",
                    content:
                      "<p>Snapshots:</p><ul><li>Ranking Siblings</li><li>Gender Signs</li><li>Compound Signs</li><li>NONE and NO</li><li>CODAs and More</li><li>Ages</li><li>Deaf Dogs</li><li>Name Signs</li><li>WEDDING and MARRIED</li></ul><p>PP Content:</p><ul><li>Relationship status: Fall in love, dating, affair, break up, single, wedding, etc</li><li>Marry vs Wedding (common mistake)</li><li>Family members: grandparents, parents, siblings, cousin, aunt, uncle, step-, half-, adopted, in-laws, daughter, son, niece, nephew, etc</li><li>Babies to Seniors: pregnant, weight (at birth), babies, children, teenagers, adults, etc</li><li>Multiple Birth: Identical, Fraternal twins</li><li>None vs No</li><li>Pets: cat, dog, rabbit, fish, snake, chicken, etc</li><li>What do you like to do with your pets? (feed, play, exercise, talk with, etc)</li><li>Circle of Friends (best friends, close friends, colleagues, acquaintances, Ex)</li></ul>",
                    note: null,
                  },
                  {
                    name: "3.3 Employment Status",
                    content:
                      "<p>Snapshots:</p><ul><li>FULL and ENOUGH</li></ul><p>PP Content:</p><ul><li>Employment Status: Working, internship, self-employed, promote, retired, laid off, jobless, quit, fired, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "3.4 Milestones and Life Events",
                    content:
                      "<p>Snapshots:</p><ul><li>HAVE and HAVE-TO</li></ul><p>PP Content:</p><ul><li>HAVE-TO and HAVE</li><li>HAVE-TO, MUST, SHOULD, and NEED (sign, movement &amp; mouth morpheme)</li><li>Signs: Transitions (Later, finish/then, enter, start, year+, move-there, etc)</li><li>Year+(number): specific, era, year range, years</li><li>Life Major Events: born, school years, first car, first job, relationship, family, retired, etc</li><li>Important Documents: Birth Certificate, Driver’s license, Social Security, Passport, etc</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "4",
                name: "Unit 4",
                title: "Residences and Communities",
                link_1: "https://drive.google.com/drive/folders/1iMdkcsIE5otk-eHj853Uskb5lm9Jd4Ls?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/19dQGchhXmPuWnAkohdlZqpJxEEye7gMF?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1LnC8A6xcsKAkpRxHGtobUpU-Noh1zAvt?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1qUcu220yAQI79yaWRUGfwhrCC_yeJ0hf?usp=sharing",
                glances: [
                  {
                    name: "4.1 Transportation",
                    content:
                      "<p>Snapshots:</p><ul><li>TAKING-OFF</li><li>Lexicalized Fingerspelling</li></ul><p>PP Content:</p><ul><li>Energy: Gas, electric, hybrid</li><li>Types of Transportation: Car, van, truck, 18-wheeler, motorcycle, horse, train, subway, boat, walk, etc</li><li>Which handshape: Riding (handshapes 3 &amp; B)</li><li>Review: Noun-Verb Pairs: Car, Airplane</li><li>More Relevant Vocabulary: place, here, there, drop off, pick up, leave, gas-guzzler, commute, HOV, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "4.2 Housing and Dwellings",
                    content:
                      "<p>Snapshots:</p><ul><li>AND</li><li>THERE</li></ul><p>PP Content:</p><ul><li>Types of Housings: Apartment, townhouse, house, dorm, shelter, farm, houseboat, etc</li><li>Living Arrangements: live with, significant other, family, roommate(s), pets, live alone</li></ul>",
                    note: null,
                  },
                  {
                    name: "4.3 Places Around Town",
                    content:
                      "<p>Snapshots:</p><ul><li>Deaf Owned Businesses</li></ul><p>PP Content:</p><ul><li>Places: school, gym, city hall, park, library, police station, hospital, post office, bank, shopping mall, restaurant, hotel, Mosque, Synagogue, Temple, Church, downtown, neighborhood, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "4.4 States, Provinces, and Cities",
                    content:
                      "<p>Snapshots:</p><ul><li>Deaf Hubs</li><li>ASL in United States and Canada</li></ul><p>PP Content:</p><ul><li>Compass Rose: North, South, West, East, Northwest, Southeast, etc</li><li>United States of America: 50 states, Federal District &amp; 5 Territories</li><li>Canada: 10 Provinces &amp; 3 Territories</li><li>Major cities in US &amp; Canada</li><li>Your State/Province Neighborhoods*</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "5",
                name: "Unit 5",
                title: "Scheduling",
                link_1: "https://drive.google.com/drive/folders/1Fe_u24XzotKnltWbLq6y9r4WpWKwnq3C?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1MI4Jz4TEuBUF_7dk_DARVPNxa7v_wVeb?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1wpHAsbsGdzzPqL3zyNOBo8AgZbyyZzOg?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1s_426QiMNp6DVXycDTEl_IGcpDDK9W7D?usp=sharing",
                glances: [
                  {
                    name: "5.1 Calendar & Time Expressions",
                    content:
                      "<p>Snapshots:</p><ul><li>Numeral Incorporation</li><li>YEAR</li><li>Time and Non-Manual Markers</li><li>Ordinal Suffixes</li><li>Eyeth</li><li>Clock Numbers</li><li>Times of the Day</li><li>Telling Time</li><li>Two Degrees of Separation</li></ul><p>PP Content:</p><ul><li>Schedule</li><li>Calendar</li><li>Month: Jan – Dec</li><li>Day: Sunday-Saturday</li><li>Handshapes for Monday, Wednesday, Friday and Saturday (common mistakes)</li><li>Week, Weekend, First-fourth week of the month</li><li>Timeline within the Signing Space: Past, Present, Future</li><li>Numeral Incorporation: 1-9 for minutes, hour, day, week, month &amp; year*</li><li>Day: Yesterday, today, tomorrow,</li><li>Day: 1-9, last/past, future (only up to 3)</li><li>Week:&nbsp; 1-9, last/past, &amp; future (1-9)</li><li>Month: 1-9, last/past, &amp; future (1-9)</li><li>Year:1-5, last/past &amp; future (1-5)</li><li>More Signs: Year (many years, as the years go by, yearlong/year-round)</li><li>Dates: 1st-9th, 10th-31st</li><li>Time-related Non-Manual Markers:&nbsp; CS, MM, AHH</li><li>Moon, Earth, Sun</li><li>Time of the Day: Morning, noon, afternoon, evening, night</li><li>Length: All day, All night</li><li>LAST:&nbsp; last night, last name, last day of, last game</li><li>Clock: time, clock, hour, minute</li><li>Clock Times: 1-9, &nbsp;amount of hours, past &amp; future (1-9)</li><li>Time: 5:05, 11:11, 12:02</li><li>Time duration:&nbsp; from 4:00 to 7:00, 15 minutes, half &nbsp;an hour</li><li>Time: Miscellaneous: About, 24/7, on time, oversleep, next time, early, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "5.2 Events",
                    content:
                      "<p>Snapshots:</p><ul><li>Regional Variations</li><li>Homecoming</li></ul><p>PP Content:</p><ul><li>Event-Related: Celebrate, national holiday, decorate, symbol, parade, patriotic</li><li>Holidays and Observances: New Year’s Day, MLK, Chinese New Year, Memorial Day, Juneteeth, Canada Day, The Fourth of July, El Grito, International Deaf Day, Halloween, Day of the Dead, Ramadan, etc</li><li>Calendar Events: Birthday, wedding, reunion, homecoming, Expo, Olympics</li><li>Break (semantics): Semester break, Spring break, winter break, (holiday) break, On a break</li></ul>",
                    note: null,
                  },
                  {
                    name: "5.3 Errands",
                    content:
                      "<p>Snapshots:</p><ul><li>CLEAN</li><li>BABYSIT</li></ul><p>PP Content:</p><ul><li>Errands: Appointment/Reservation, cancel, pay bills, drop off, pick up, work, dry cleaning, grocery, doctor, bank, meeting, interview, etc</li><li>“Sitting”: babysitting, house sitting, pet sitting</li><li>Calendar-related: plan, planning, conflict, double-booking, change of plans, postpone, procrastinate, slack off, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "5.4 Reasons & Excuses",
                    content:
                      "<p>Snapshots:</p><ul><li>Explaining Why Late</li></ul><p>PP Content:</p><ul><li>Arriving late or early</li><li>Reasons &amp; Excuses: Car accident, traffic, pulled over by a cop, ran out of gas, lost keys, overslept, forgot, etc</li><li>Absent: Sick, Skip</li></ul>",
                    note: null,
                  },
                  {
                    name: "5.5 Frequency",
                    content:
                      "<p>Snapshot:</p><ul><li>FREQUENT</li><li>Common Error - FREQUENT</li><li>HAVE-TO, NEED, MUST, and SHOULD</li></ul><p>PP Content:</p><ul><li>How often? (often, sometimes, rarely, never, always, usually, etc)</li><li>Week: everyday, once, twice, three times a week, every Monday/Mondays, every morning, etc</li><li>Numeral incorporation: 1-9 = month, week, hour,&nbsp; 1-5 = year</li></ul>",
                    note: null,
                  },
                  {
                    name: "5.6 Daily Activities",
                    content:
                      "<p>Snapshot:</p><ul><li>STORE and SHOP</li><li>MONEY, BUY, and SHOP</li><li>BED and SLEEP</li><li>FEED and EAT</li></ul><p>PP Content:</p><ul><li>Daily Routines: Get up, shower, brush teeth, shave, apply makeup, go to bed, clean, wash dishes, walk the dog, go to work/school, cook, breakfast, lunch, dinner, etc</li><li>Review: A Day</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "6",
                name: "Unit 6",
                title: "Good Times",
                link_1: "https://drive.google.com/drive/folders/1TIRMOWLLUOAeV-Y_bTkZZ65xiX7rN1Wu?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1vhIUPRkbvK4uP3FR8zdgwUtsjmySySWb?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1jfu_-t4oYwMM8uvCstJZLe63e-6gBSDs?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/10M3FR2Z_DCoRzjshNIxmEoMsqzDVvol5?usp=sharing",
                glances: [
                  {
                    name: "6.1 Insights and Skills",
                    content:
                      "<p>Snapshots:</p><ul><li>Opinions</li><li>Skill Levels</li><li>Bravery</li><li>Lost in Translation</li></ul><p>PP Content:</p><ul><li>Opinions: CHAMP, KISS+FIST, #FUN, FUN, ENJOY, LIKE, OK-OK, SO-SO, DON’T-LIKE, BORING, VOMIT</li><li>What do you think of…</li><li>Activity Skills: #PRO, TERRIBLE, EXPERT, SKILL, GOOD++. SO-SO, CLUMSY. LOUSY, INEPT</li><li>How good are you at…</li><li>Bravery: RUSH, THRILL, BRAVE, RISK, BOLD, STRUGGLE, NERVOUS, CHICKEN, SCARED, CAN’T</li><li>Would you dare…?</li></ul>",
                    note: null,
                  },
                  {
                    name: "6.2 Hobbies and Interests",
                    content:
                      "<p>Snapshots:</p><ul><li>Deaf Gatherings</li></ul></li></ul></li></ul><p>PPT Content:</p><ul><li>Hobbies &amp; Interests: Cooking, baking, playing video games, reading, knitting, etc</li><li>Collections: Coins, figurines, antiques, comics, stamps, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "6.3 Sports and Recreation",
                    content:
                      "<p>Snapshots:</p><ul><li>VISIT, DRIVE, and TEXT</li><li>LAPS</li><li>Playing with Signs</li><li>Deaflypmics</li></ul><p>PP Content:</p><ul><li>Sports &amp; Recreations: Party, Socialize, playing cards, camping, swimming, snowboarding, hockey, golf, volleyball, etc</li><li>Olympics, Paralympics, Special Olympics, Deaflympics</li></ul>",
                    note: null,
                  },
                  {
                    name: "6.4 Vacations",
                    content:
                      "<p>Snapshots:</p><ul><li>Signing Camps</li></ul><p>PP Content:</p><ul><li>Vacations: Road trip, sightseeing, camping, Carnival/fair, museum, festival, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "6.5 Snack Time",
                    content:
                      "<p>Snapshot:</p><ul><li>How do you like your coffee?</li></ul><p>PP Content:</p><ul><li>Snacks: Doughnuts, popcorn, cheese, crackers, nuts, veggies, fruits, cookies, ice cream, etc</li><li>Drinks: Water, milk, juice, soda, coffee, tea, etc</li><li>How do you like your coffee/tea? (iced, hot, plain, cream, sugar, etc)</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "7",
                name: "Unit 7",
                title: "All About Food!",
                link_1: "https://drive.google.com/drive/folders/15tNaAs_UinhYM5WtyCr2NE3ZASYkhgTs?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1d5cA3kFeE60RXK3Dg6SxM6MTsDt9Eq4h?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1a9veU_ArWSgzVb46fn_gE_jpWX1IUPiH?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1-eU2T0G43qQKeWtyiZKAt8tYMOrhWnDp?usp=sharing",
                glances: [
                  {
                    name: "7.1 Fruits and Vegetables",
                    content:
                      "<p>Snapshots:</p><ul><li>EGGPLANT</li></ul><p>PP Content:</p><ul><li>Fruits: Apple, orange, lemon, bananas, watermelon, etc</li><li>Vegetables: Lettuce, onion, carrot, mushroom, corn, etc.</li></ul>",
                    note: null,
                  },
                  {
                    name: "7.2 Meats, Poultry, and Seafood",
                    content:
                      "<p>Snapshots:</p><ul><li>Categories and Sub-categories</li></ul><p>PP Content:</p><ul><li>Red Meat: Roast beef, steak, ground beef, lamb</li><li>Poultry: Chicken, turkey, duck, thighs, breasts, drumsticks, wings</li><li>Pork: Pork chop, ham, bacon, ribs, hotdog, sausage, bratwurst, pepperoni</li><li>Seafood: Fish, catfish, shrimp/prawn, lobster, crab</li></ul>",
                    note: null,
                  },
                  {
                    name: "7.3 More Food and Sweets",
                    content:
                      "<p>Snapshots:</p><ul><li>DRINK</li><li>Mouthing Portions</li><li>DEAF COFFEE</li></ul><p>PP Content:</p><ul><li>Dairy Products: Milk, sour cream, cheese, etc</li><li>Packaged Goods: Cereal,&nbsp; pasta, etc</li><li>Canned Goods: Canned fruit, canned vegetables, soup, tuna</li><li>Jams &amp; Jellies: Jam, jelly, peanut butter</li><li>Condiments: Ketchup, mustard, pickles, salsa, soy sauce, honey, etc</li><li>Baking Products: Flour, sugar, eggs, tofu, cornmeal</li><li>Baked Goods: Bread, English muffins, tortilla, etc</li><li>Beverages: Water, soda, diet soda, energy drink, powered drink, protein shake</li><li>Juice: Apple juice, orange juice, lemonade, etc</li><li>Coffee &amp; Tea: Coffee, decaf, instant coffee, tea, hot chocolate, iced tea or coffee</li><li>Liquor: Beer, alcohol, wine</li><li>Sweets: Cake, pie, ice cream, cookies, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "7.4 Regional Cuisines",
                    content:
                      "<p>Snapshots:</p><ul><li>How do you like your eggs?</li></ul><p>PP Content:</p><ul><li>Cuisine/Restaurant Types: Chinese, Mexican, Thai, Indian, Fast food, etc</li><li>Breakfast: Toast, pancakes, muffins, etc</li><li>Different Ways to Cook Eggs: Scrambled, hardboiled, poached, etc</li><li>Appetizers/Sides: Egg rolls, queso, hummus, soup, fries, etc</li><li>Entrees: Salad, taco, pizza, lasagna, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "7.5 Recipes",
                    content:
                      "<p>Snapshot:</p><ul><li>One Hand Occupied?</li><li>Measurements</li><li>Adding Ingredients</li></ul><p>PP Content:</p><ul><li>Measurements: teaspoons, measuring cups, ounces, cup, pint, quart, gallon</li><li>Ways of Preparing Food: Snapping ends of green beans, mince, peel, slice, etc</li><li>Ways of Mixing food: Add, pour, stir. whisk, mixer</li><li>Cooking Methods: Bake, fry, boil, steam, sauté, etc</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "8",
                name: "Unit 8",
                title: "People Among Us",
                link_1: "https://drive.google.com/drive/folders/1Dd-lfJut5wGiKGxWw40jQSGXIDTypNTz?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1PrNDbmx0jjRj4UPzQJTgN6XgVSXZ4Rea?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1Jr9UIW6wJghrwllEjV58K--5XkQNkayn?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1mcjtNmB8IypjmwEq44qthzTKSg0EKT60?usp=sharing",
                glances: [
                  {
                    name: "8.1 People",
                    content:
                      "<p>Snapshots:</p><ul><li>Ethnicity and Ethnic Groups</li></ul><p>PP Content:</p><ul><li>Life Stages: Born, baby, child, teen, college-age/20’s, middle-age, senior citizen, elder/older, young/younger, dead</li><li>Ethnicity and Ethnic Groups: American/Indian/Native American/First Nation or Alaska Native, Asian, Black or African American, Latino/Latina/Latinx, Indigenous peoples, Middle East, East Indian, Multi-ethnic/Multiracial, Native Hawaiian or Other Pacific Islander, White</li></ul>",
                    note: null,
                  },
                  {
                    name: "8.2 Physical Descriptions",
                    content:
                      "<p>Snapshots:</p><ul><li>Describing Others</li><li>Present and Not Present</li><li>KNOW</li><li>Commenting on Appearances</li><li>POTBELLY and PREGNANT</li><li>Tattoos</li><li>Decades</li></ul><p>PP Content:</p><ul><li>Heights: Little People, short, average, tall, growing up</li><li>Body Types: Skinny/slim, average, chubby and cute!, muscular</li><li>Hair Colors: Blonde, red hair, black hair, grey hair, white, dye, etc</li><li>Hair Types: Tight curls, curly, wavy, straight</li><li>Hair Lengths: Short, long, bald, etc</li><li>Facial Hair: Thickness of mustache/beard, shapes of mustache/beards, 5 o’clock shadow/scruffy, etc</li><li>Eyebrows: Thickness of eyebrows</li><li>Facial Features: Long eyelashes, big eyes, teeth gap, freckles, scars, etc</li><li>More Features: Tattoo, body piercing, earplugs</li></ul>",
                    note: null,
                  },
                  {
                    name: "8.3 Clothing",
                    content:
                      "<p>Snapshots:</p><ul><li>Identify then Describe</li></ul><p>PP Content:</p><ul><li>Tops: T-shirt, tank top, blouse, sleeve length, sweater, turtleneck, jacket, etc</li><li>Necklines &amp; Collars:&nbsp; V-neck, scoop, collar, disco collar, ruffle, etc</li><li>Pants &amp; Shorts: different length, type of pants, overalls, etc</li><li>Dresses &amp; Skirts: different length &amp; types</li><li>Suits, Tuxedos &amp; Uniforms</li><li>Sleepwear, Undergarments &amp; Swimsuits: Pajamas, undies, swim shorts, etc</li><li>Pockets: front, back, shirt, hidden</li><li>Sizes: XS, S, M, L, XL</li><li>Conversation Starters #2</li><li>Accessories: Purse, wallet, gloves, scarves, bowties, hats, rings,&nbsp; watches, etc</li><li>Type of Glasses: Eyeglasses, sunglasses</li><li>Earrings: Dangling, loop, fish-hoop, stud, etc</li><li>Necklaces: length, texture, sizes, etc</li><li>Socks:&nbsp; lengths &amp; pattern, stockings/pantyhose</li><li>Footwear:&nbsp; Heels height, running shoes, flip-flops, slippers, boots, etc</li><li>Patterns: solid/plain, strips, flowery, patterns, polka dots, zigzag, animal prints, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "8.4 Culture",
                    content:
                      "<p>Snapshots:</p><ul><li>Accessibility</li><li>Cultural Pride</li><li>Deaf and DeafBlind Gain</li><li>Identity First</li><li>-isms</li><li>National Deaf Organizations</li></ul><p>Lecture Slides Content:</p><ul><li>Culture</li><li>Access</li><li>Barriers</li><li>Additional Identities</li><li>Civics</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "9",
                name: "Unit 9",
                title: "My Home",
                link_1: "https://drive.google.com/drive/folders/12kI2VPm-me86OeSgCF-FT5GXooXNlZvk?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/12N0wx03ZJbU_enFtJ3pO7XiS6C5ECqGR?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1MMWM1mBsPbsfUgpcqoStdszEfOOhO1NS?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1e-SSfiZBkephKkbdCkqWi8Gp68wr-HUn?usp=sharing",
                glances: [
                  {
                    name: "9.1 Floor Plan",
                    content:
                      "<p>Snapshots:</p><ul><li>Ordinal Numbers – Floors &amp; Doors</li><li>Deaf Space</li></ul><p>PP Content:</p><ul><li>Ordinal Numbers – Floors (1st floor, 2nd floor, so on)</li><li>Lobby &amp; Hallway: Intercom, mailbox, stairway, elevator, deadbolt, fire alarm, etc</li><li>Rooms: Bedroom, kitchen, living room, bathroom, attic, basement, storage room, etc</li><li>Home Layouts: Studio &amp; 1 bathroom, 1B/1B, 2B/2 ½ B.</li></ul>",
                    note: null,
                  },
                  {
                    name: "9.2 the Exterior",
                    content:
                      "<p>Snapshots:</p><ul><li>Dinner's Ready!</li></ul><p>PP Content:</p><ul><li>Around Your Home: Mailbox, driveway, gate, balcony, front door, patio, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "9.3 The Interior",
                    content:
                      "<p>Snapshots:</p><ul><li>The Kitchen</li></ul><p>PP Content:</p><ul><li>Kitchen &amp; Dining Room Items: Cabinet, dishwasher, refrigerator, sink, table, fork, plate, cup, etc</li><li>Living Room Items: Couch, fireplace, lamp, houseplant, etc</li><li>Bathroom &amp; Bedroom Items: Mirror, faucet, bath towel, toothbrush, bed, pillow, baby room, drawers, crib, etc</li><li>Laundry Items: Washer, dryer, soap, iron, etc</li><li>Home Entertainment: Cable TV, DVD, streaming, video gaming, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "9.4 Housework",
                    content:
                      "<p>Snapshots:</p><ul><li>Doing Chores Anytime</li></ul><p>PP Content:</p><ul><li>Living Room: Dust, put away, polish, vacuum, etc</li><li>Kitchen: Wash dishes, recycle, wipe, mop, etc</li><li>Bedroom: Make bed, change the sheets, fold-put away-hang clothes</li><li>Laundry: Sorting, loading, hanging, ironing, etc</li><li>Household Problems &amp; Repairs: Power out, leaking roof, clogged toilet, etc</li><li>Home-related Professionals: Carpenter, electrician, plumber, exterminator, etc)</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "10",
                name: "Unit 10",
                title: "Finances and the Workplace",
                link_1: "https://drive.google.com/drive/folders/1Io7uenHFt0zUD8kTohhAF5ZnV3dvcRQg?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/14USGabR97P2IqcO9lyz8WLX7pfYL30So?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1pnFMVPfVu1X1Va9c2D4EzFQbYOdxxy9N?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1wqIYB2qzkRcLAZe52dB5Iu9WTo5RZbey?usp=sharing",
                glances: [
                  {
                    name: "10.1 Workplace",
                    content:
                      "<p>Snapshots:</p><ul><li>Videophones (VP)</li></ul><p>PP Content:</p><ul><li>The Workplace: Factory, construction site, post office, educational institution, working from home, etc</li><li>Office Supplies &amp; Equipment: Laptop, computer, videophone, printer, tape, stapler, conveyer belt, forklift, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "10.2 Careers",
                    content:
                      "<p>Snapshots:</p><ul><li>Agent Markers</li></ul><p>PP Content:</p><ul><li>Careers: Accountant, Artist, Baker, Computer Software Engineer, Delivery Person, Florist, Interpreter, Model, Nurse, Pilot, Reporter, Server, Welder, etc</li><li>Job Search Process: Networking, job search online, fill out the application form, interview, be presentable, making impressions, etc</li><li>Additional Job Search Terms: Competitive, training, salary, negotiate, advantages &amp; disadvantages, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "10.3 Job Skills and Activities",
                    content:
                      "<p>Snapshots:</p><ul><li>WATCH</li><li>WASH</li></ul><p>PP Content:</p><ul><li>Warehouse/Manufacturing: Assemble, parts, forklift, shipping, etc</li><li>Office: Answer the phone, meeting, filing, enter data, etc</li><li>Restaurant: Prep, cook, delivery, bus/clean, etc</li><li>Home Services: Furniture assemble, assist, inspect, repair, etc</li><li>Job Responsibilities – Miscellaneous: Design, develop, sell, supervise, etc</li><li>Soft Skills: Leadership, problem-solving, team player, work ethics, creativity, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "10.4 Payday",
                    content:
                      "<p>Snapshots:</p><ul><li>Relay Service Industry</li><li>Talking About Money</li><li>Cents</li><li>Dollar</li><li>Dollars and Cents</li></ul><p>PP Content:</p><ul><li>Income: Earning/Salary, government assistance programs, retirement/pension, pay raise, pay cut</li><li>Paycheck: Direct deposit, overtime, gross pay, personal leave, etc</li><li>Benefits &amp; Deductions: Federal income tax, health insurance, retirement plan, etc</li><li>Bills &amp; Payments: Rent, mortgage, loans, insurances, bills, etc</li><li>Banking: Cash, check, debit card, credit card, save, savings, interest rates, etc</li><li>Personal Financial Status: Economy, budget, broke, pays well, credit score, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "10.5 Shopping",
                    content:
                      "<p>Snapshots:</p><ul><li>Deaf Owned businesses</li></ul><p>PP Content:</p><ul><li>Grocery Store: Aisle, shopping cart, lines, checkout, etc</li><li>Shopping Mall: Department stores, different kind of stores (jewelry, candy, beauty, shoes, etc)</li><li>Shopping Experience: Online shopping, trying on, price tag, materials, on sale, return, exchange, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "10.6 Major Purchases",
                    content:
                      "<p>Snapshots:</p><ul><li>Economic Justice</li><li>Age of Objects</li></ul><p>PP Content:</p><ul><li>Car Shopping: Research, new or used, mileage, etc</li><li>Vehicle Features: Standard or automatic, sunroof, airbags, GPS, rear/backup camera, etc</li><li>Buying a Car: Loan application, monthly payment, down payment, trade-in, etc</li><li>Home Buying: Putting the house up for sale, offer, inspections, etc</li><li>Cost of Higher Education: Admission application, take a test, acceptance letter, scholarship, etc</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "11",
                name: "Unit 11",
                title: "Wellness and Fitness",
                link_1: "https://drive.google.com/drive/folders/15GzrOgun8FyLylQesTPrkB1sr4CbktdY?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1fBWwmGNSntmbozmuvzG4xVanpde5CD3y?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1lO4Oat2-7zGBYvhDPWUcrJ-7Y1tQZOsY?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1dlz9b0g0ZrtER_q8QeiEiSk7f3XgWpYT?usp=sharing",
                glances: [
                  {
                    name: "11.1 Health-Related Settings",
                    content:
                      "<p>Snapshots:</p><ul><li>Medical Interpreting</li></ul><p>PP Content:</p><ul><li>Health-Related Settings: Patient, vital signs monitor, IV, nurse call, ultrasound scanner, crutches, gurney, ambulance, ER, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "11.2 Health-Related Careers",
                    content:
                      "<p>Snapshots:</p><ul><li>Deaf People in the Medical Field</li></ul><p>PP Content:</p><ul><li>Health-Related Careers: Doctor, nurse, surgeon, anesthesiologist, EMT, radiologist, dietician, admission clerk, acupuncturist, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "11.3 Wellness and Nutrition",
                    content:
                      "<p>Snapshots:</p><ul><li>Height</li></ul><p>PP Content:</p><ul><li>Wellness &amp; Nutrition: Healthy, self-care, vitamins, check-up, vaccines, stress, reduce, greasy food, etc</li><li>Exercise: Personal trainer, swimming, sit-ups, stretching, running, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "11.4 Common Illnesses and Treatments",
                    content:
                      "<p>Snapshots:</p><ul><li>Temporal Aspects – Severity &amp; Frequency</li><li>Fingerspelling Medicine</li></ul><p>PP Content:</p><ul><li>Common Illness: Flu, colds, ear inflection, allergy, chickenpox, arthritis, stroke, cancer, etc</li><li>Symptoms/Signs: Dizziness, fever, seizure, nasal congestion cough, nausea, etc</li><li>Symptoms – Location: Rash, itching, swollen, bite, bruise, cut, etc</li><li>Treatments: Rest, bandage wrap, tweezers, cast, ice pack, eye drops, ointment, etc</li><li>Medicine Instructions: RX, OTC, dosage, warning label, take with food or milk, etc</li><li>To Follow or Not to Follow Doctor’s Orders: Regularly, on and off, forgot to take medicine, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "11.5 Health-Related Emergencies",
                    content:
                      "<p>Snapshots:</p><ul><li>Text to 911</li></ul><p>PP Content:</p><ul><li>Emergency Room Visit Reasons: Going into labor, heart attack, choking, accident, animal bites, stung, allergic reaction, broken bone, stabbed, etc</li><li>In the Emergency Room: Prioritized, emergency medical ID, stitches, MRI, etc</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "12",
                name: "Unit 12",
                title: "Destinations",
                link_1: "https://drive.google.com/drive/folders/1NwGFw-pkFI5ZzD1WXyYNcEcKDOjjR3Yl?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1cjGGHJjBpkG4w3zatbMOP2XTP-6795l2?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1CWUpee4IGu3vmSIz_EirEUqAGmv5vFMC?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1GmSZWJBtNsuCAqr8o9kAD5qS3whbjwqI?usp=sharing",
                glances: [
                  {
                    name: "12.1 Seasons and Weather Conditions",
                    content:
                      "<p>Snapshots:</p><ul><li>Conditional Sentences</li></ul><p>PP Content:</p><ul><li>Seasons: Spring, Summer, Fall, Winter</li><li>Weather Conditions: Sunny, rain, drizzle, snow, blizzard, foggy, etc</li><li>Temperatures: Degree, Celsius Fahrenheit, high and low temperatures, hot, cold, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "12.2 Natural Disasters",
                    content:
                      "<p>Snapshots:</p><ul><li>FEMA and Deaf People</li></ul><p>PP Content:</p><ul><li>Natural Disasters: Earthquake, flood, tornado, drought, wildfire, volcanic eruption, etc</li><li>Natural Disaster-Related Terms: Announcement, warning, flee, trapped, scared, FEMA</li></ul>",
                    note: null,
                  },
                  {
                    name: "12.3 Maps and Directions",
                    content:
                      "<p>Snapshots:</p><ul><li>Giving Directions – Landmarks</li></ul><p>PP Content:</p><ul><li>Prepositions of Place &amp; Giving Directions: Next to, across from, through, go straight, over, under, turn left/right, etc</li><li>Streets &amp; Highways: Highway, two-lane, right-middle-left lane, intersection, corner, toll, merge, exit, etc</li><li>Road Signs: Stop, speed limit, dead-end, yield, highway marker, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "12.4 Road Trip",
                    content:
                      "<p>Snapshots:</p><ul><li>Landmark Influenced Signs</li></ul><p>PP Content:</p><ul><li>Road Trip Tips: Plan ahead, calculate gas mileage, prepare for emergencies, etc</li><li>Road Trip Pre-check: Inspection, check oil, brake, radiator, etc</li><li>Essential Items You Should Keep in Your Car: Spare tire, jumper cables, road maps, first-aid kit, road safety flares, blanket, etc</li><li>Common Road Trip Problems: Lost, flat tire, engine overheat, battery dies, etc</li><li>Landmarks: Statue of Liberty, Golden Gate Bridge, CN Tower, Grand Canyon, Niagara Falls, Redwood National Park, etc</li><li>Landscapes and Waterscapes: Desert, plain, forest, rolling hills, mountain, river, lake, beach, ocean, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "12.5 World Map",
                    content:
                      "<p>Snapshots:</p><ul><li>Country Signs</li><li>Travel Vloggers</li></ul><p>PP Content:</p><ul><li>7 Continents and Major Oceans: Earth, World, International, North America, Africa, Asia, etc</li><li>Countries: different countries</li><li>Travel-Related Terms: Visited/been there, backpacking, travel, tour, tour guide</li></ul>",
                    note: null,
                  },
                  {
                    name: "12.6 Traveling Around the World",
                    content:
                      "<p>Snapshots:</p><ul><li>Communicating Abroad</li><li>Deaf Travel</li></ul><p>PP Content:</p><ul><li>Travel Plans: Research, reservation, itinerary, border, authentic, museum, cruise, train, bus, etc</li><li>The Airport: Check in, E-ticket, On-time, delayed, cancelled, missed connection, security screening, passport, board a plane, turbulence, customs, etc</li><li>Lodging: Hotel, motel, hostel, star rating, front desk, room service, etc</li><li>Popular Travel Destinations: about 28 different places</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "13",
                name: "Unit 13",
                title: "Narrative Building Blocks",
                link_1: "https://drive.google.com/drive/folders/1_qll9vYbLrEZWAbEzKlna3ZAcoR7aT6n?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1wx8wEh0QhcO19LZKBo2b_T6JrcEp0cQP?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1lpAyxDxWj7j5iNWgPkjnonuWXiS5egq0?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1ms_o-_RmdNXjFpAXGvyZknTF735kXZog?usp=sharing",
                glances: [
                  {
                    name: "13.1 Describing Concepts",
                    content:
                      "<p>Snapshots:</p><ul><li>Adjectives</li><li>Intensifiers</li></ul><p>PP Content:</p><ul><li>Sizes: Small (OO), moderate in size-distance-time related (MM), large/thick (CHA or ARCH)</li><li>Intensifiers: MM, FF, OO, “puffed cheek”, AHH, BRR, SOA, IS/INTENSE (CUTE, SHINY, SMART, COLD)</li><li>Shape, Surface &amp; Size: MM, AHH, OO, CHA, FFF, TH/UR, AHH (curvy hallway, small hallway, warped floor, etc)</li><li>Appearances: OO, MM, CHA, ARCH, puffed cheek, FFF, SOA, IS/INTENSE (fur, clean-messy, clean-dirty)</li><li>Taste Touch: Scoville scale, Coffee taste, pillow softness, skin roughness, etc</li><li>Feelings &amp; Personality/Qualities: Grumpy, curious, shy, cautious, playful, smart, proud, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "13.2 Onomatopoeia",
                    content:
                      "<p>Snapshots:</p><ul><li>Onomatopoeia</li><li>Being Noisy</li><li>Speaking Gibberish</li></ul><p>PP Content:</p><ul><li><p>Onomatopoeia…</p><ul><li>Animal: Dog, cat, cow, duck, bee, lion, gorilla, etc</li><li>Action: Ice cream fall, vacuum, clock ticking, car-related, etc</li><li>Body &amp; Bodily Functions: burp, snore, gargle, cough, fart, etc</li><li>Visual Noise: light flickering, twinkling stars, railroad crossing light flashing, car headlight, dimmed light, TV static, etc</li><li>Elements: Earth, air/wind, fire, water,</li></ul></li></ul>",
                    note: null,
                  },
                  {
                    name: "13.3 Colors",
                    content:
                      "<p>Snapshots:</p><ul><li>Color Ranges</li><li>Color Mixing</li><li>Identifying Products Through Color</li></ul><p>PP Content:</p><ul><li>Color Ranges &amp; Color mixing: Apple red to dark red, tan to mocha, black to pitch black, so on.</li></ul>",
                    note: null,
                  },
                  {
                    name: "13.4 Opening & Closing",
                    content:
                      "<p>Snapshots:</p><ul><li>Diamond-Style Stories</li><li>Openings and Closings</li><li>Mouthing Time Expressions</li></ul><p>PP Content:</p><ul><li>Time-Related Non-Manual Markers: CS/Intense MM, AHH (ancient , long time ago, recently, soon, tomorrow, far future, etc)&nbsp;</li><li>Telling a Short Story using Time Expression: Once upon a time…Someday in the far-distance future, futuristic, etc</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "14",
                name: "Unit 14",
                title: "Narratives",
                link_1: "https://drive.google.com/drive/folders/1omR-1uweq47iXhAL3uQBy4wPkWjPmqm9?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1xQ9DT6LzDWwhhpZ2SkFqSzteRN1XvJXC?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1R3wfeVqAr0hAev8G1NyqfgSC3P7btx4V?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1MtFuXOq0SpnuipX-UEPxP_5CMEoGrARl?usp=sharing",
                glances: [
                  {
                    name: "14.1 Who did What to Whom?",
                    content:
                      "<p>Snapshots:</p><ul><li>Who Did What to Whom</li><li>TO</li><li>To and Adverb</li><li>To and Location</li></ul><p>PP Content:</p><ul><li>Possible Directions: —GIVE— (one time, repeatedly, randomly, etc), ASK, TEACH, PITY, etc</li><li>TO+Adverbs: ____-MEET(shy), ____-TOSS(clumsily), etc</li><li>TO+Location: CHILD-HIGH-FIVE, PARENT-TEACH, etc</li><li>Not all verbs in ASL can be directional: Drink, cry, lie, work, eat, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "14.2 Constantly and Repeatedly",
                    content:
                      "<p>Snapshots:</p><ul><li>Temporal Aspects</li><li>Temporal Aspect Examples</li></ul><p>PP Content:</p><ul><li>Ordinarily: Sign (not modified) + MM</li><li>Regularly &amp; Concentratedly: Sign (modified) + press lips/tight lips</li><li>Hurriedly: Sign (modified) + intense(mouth)</li><li>Continually: Sign (modified) + small-AHH</li><li>Prolongedly: Sign (modified) + larger-AHH</li><li>Prolongedly &amp; Repeatedly: Sign (modified) + STA STA</li><li>Now try with different action verbs: WORK, DRIVE, JUMPING , DANCING, PLAYING VIDEO GAMES, SCRATCHING, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "14.3 Becoming the Character",
                    content:
                      "<p>Snapshots:</p><ul><li>Surrogates</li><li>Personification</li><li>Anthropomorphism</li><li>Perspective</li></ul><p>PP Content:</p><ul><li>Surrogates examples: Toddler playing, nosy neighbor, upset driver, etc</li><li>Personification examples: Plane, palm tree, lawn mower, etc</li><li>Anthropomorphism examples: Hummingbird, shark, crab, etc</li><li>Perspective examples: Looking up in water, from inside a mailbox, looking down from a building, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "14.4 Putting it All Together",
                    content:
                      "<p>Snapshots:</p><ul><li>History of ASL Storytelling</li><li>Deaf Narrative Themes</li><li>Storytelling Components</li><li>Telling Stories</li><li>Translated Stories</li></ul><p>PP Content:</p><ul><li>Story Structure: Opening, climax, summary, close, diamond-shape</li><li>Essential Components: shoulder-shift, character, visualize, rhythm, noun, etc</li><li>Types of Stories: 1) Overcoming the obstructions, 2) Rebirth, 3) Quest, 4) Rags to Riches, 5) Tragedy, 6) Comedy, 7) Deaf themed</li><li>Deaf Narrative Themes: 1) The discovery and development of a Deaf identity, 2) Success Story, triumph, 3) The leverage of being Deaf or knowing sign language</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "15",
                name: "Unit 15",
                title: "History",
                link_1: "https://drive.google.com/drive/folders/1SGakpV2xiVqQQaU0Mml3KMoUEK0W8jNH?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1EqLdtUcXHu0LKInXAckMrgQy6NN2FrMq?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1StR9_U9PuPxgYiNNiw70EkkyoCRuoi0i?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1mmzhQ-SZlCjXP_Hflsc3ZKmF06kKTAaR?usp=sharing",
                glances: [
                  {
                    name: "15.1 US and Canadian History",
                    content:
                      "<p>Snapshots:</p><ul><li>Registers</li><li>Specialized Discourses</li><li>Year and Year Ranges</li></ul><p>PP Content:</p><ul><li>Before 1400s: Indigenous people</li><li>Late 1400s-1500s: France &amp; Britain explored &amp; colonized Canada &amp; US<br>1500s: Epidemic/pandemic, colonization</li><li>1600s/17th Century: Europe Migrants, slaves, population growth, colonies, Christian, trading</li><li>1700s/18th Century: Revolution, taxation, civil wars, Declaration of Independence, US Constitution, assimilation</li><li>1800s/19th Century: Indian reservations, War of 1812, Industrial Revolution, civil war, abolition, Canada independence</li><li>1900s/20th Century: WW1, WW2, suffrage, The Great Depression, civil rights movement, segregation</li></ul>",
                    note: null,
                  },
                  {
                    name: "15.2 US and Canadian Deaf History",
                    content:
                      "<p>Snapshots:</p><ul><li>Discussing the Past</li><li>Origins of ASL</li><li>Deaf History</li><li>Early ASL</li><li>Deaf and Dumb</li></ul><p>PP Content:</p><ul><li>1500s-1700s: First Deaf School (private school in Spain), first public Deaf school in France</li><li>1800s: American School for the Deaf, Gallaudet University, AGB, oralism, ICED, NAD</li><li>1900-1959: Veditz film, ICSS, AAAD-&gt;USADSF, WFD</li><li>1960-1990: Stokoe, NTID, CC, DPN, ADA, Gary Malkowski</li><li>1991-2017: ASL &amp; LSQ in Canada, VRS, SAB, Nyle</li><li>Technology – Telephone Timeline: Before TTY, TTY device size became smaller &amp; portable, relay services, texting/online chat, VRS, smartphone</li><li>More History Links</li></ul>",
                    note: null,
                  },
                  {
                    name: "15.3 Breaking Records",
                    content:
                      "<p>Snapshots:</p><ul><li>Comparative and Superlative Adjectives</li><li>Autobiographies and Biographies</li></ul><p>PP Content:</p><ul><li>Firsts: “Selfie”, skyscraper, “incandescent” light bulb, football huddle, first films with ASL, solo flight by a woman, moon, Barack Obama, Oscar – Marlee Matlin, NASA – Johanna Lucht, etc</li><li>Incredible Records: Oldest cat, longest fingernails, hottest chili, etc</li><li>Biographies: Sacajawea, Frederick Douglass, Harriet Tubman, Sitting Bull, Cesar Chavez, Maya Angelou, Stephen Hawking, Sonia Sotomayor</li><li>Deaf Biographies Links: Dr. Shirley Allen, Dr. Glenn Anderson, Linda Bove, Leroy Colombo, Leah Hernandez-Katz, William “Dummy” Hoy, and many more!</li><li>More Links: Famous firsts, biography, world records</li></ul>",
                    note: null,
                  },
                  {
                    name: "15.4 Museums and Historical Tours",
                    content:
                      "<p>Snapshots:</p><ul><li>Deaf Museums</li><li>Museum Access</li><li>Great Blacks in Wax Museum</li></ul><p>PP Content:</p><ul><li>Museum Terminology: Artifact, art, sculpture, curator, care, preservation, etc</li><li>Museum Access: Captions/subtitles, script, audio, interpreter, Deaf tour guide, Augmented Reality</li><li>The Experience: Looking back, memory, visualize, fascinating, sad, analyze, etc</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "16",
                name: "Unit 16",
                title: "The Human Body",
                link_1: "https://drive.google.com/drive/folders/1l5GNdzHQoLK9SqfLjvrvohAH6-6M2oJp?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1RAKctDGZFatRIaIgFmHiLK2KTB6YPFuW?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1mgITWeBvbbxYFy42qQ10XzqcbJ_er6h8?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1gS4-usKmhiVrc2BwhqLfmPLUoKZqQL0p?usp=sharing",
                glances: [
                  {
                    name: "16.1 External Parts",
                    content:
                      "<p>Snapshots:</p><ul><li>Describing External Parts</li><li>Sign language Gain</li><li>Universal Design</li><li>Our Senses</li></ul><p>PP Content:</p><ul><li>Depiction – Body: Head, ears, arm, hands, legs, foot, eyebrows, etc</li><li>Depiction – Head &amp; Face: Nodding, shaking, jerk, bow, “taken by surprise”, eyes movement, winking, pupils movement, eyelids, eyelashes, flaring nostrils, etc.</li><li>Depiction – BodyMovements/Positions: Straight, stiff, slouched, etc</li><li>Depiction – Leg Movements/Positions: Running, sprinting, trail running (rough terrain), parkour, slipped, limping, sitting on the floor, legs propped on table, yoga positions, gymnastics positions, etc</li><li>Depiction – Foot/Feet Movement/Positions: Standing, walking, foot-tapping, tip-toe, ballet, sprain, etc.</li><li>Senses: Sight/vision, touch, smell, hearing and taste</li></ul>",
                    note: null,
                  },
                  {
                    name: "16.2 Internal Parts",
                    content:
                      "<p>Snapshots:</p><ul><li>Describing Internal Parts</li><li>Bodily Noises</li></ul><p>PP Content:</p><ul><li>Human Body Systems: Skeletal, immune, nervous, muscular, reproductive respiratory, cardiovascular, digestive</li><li>Internal Organs: Heart, brain, liver, lungs, stomach, kidneys, spleen, colon, small intestine</li><li>Integumentary/Skin System: Skin (layer, protect, injury, etc), hair &amp; nails (healthy, brittle, etc)</li><li>Musculoskeletal System: Bone, ligaments, muscle (spasm, twitch, pulled muscle, etc), nerve/brain stimulate/control, skull, joints, socket joint, etc</li><li>Respiratory System: Lungs, diaphragm, inhale, exhale, blow, hard to breathe, wheezing, hold breath, hiccup, etc</li><li>Cardiovascular/Circulatory System: Blood, heart pumping, circulate, oxygen, clogged, dizzy, etc</li><li>Nervous System: Brain, spinal cord, nerves, disc, neurons, paralysis, tingling, etc</li><li>Immune System: Infection, disease, contagious, prevent, cells, etc</li><li>Digestive System: Mouth, esophagus, stomach, liver, chewing, constipated, burping, bloating, etc</li><li>Urinary System: Kidney, kidney stone, bladder, hold in, accidental, etc</li><li>Reproductive System: Ovaries, Uterus, menstruating, sperm, erection, miscarriage, STD, HIV, condom, protection, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "16.3 Medial Procedures",
                    content:
                      '<p>Snapshots:</p><ul><li>Medical Field</li><li>Emergency Calls</li><li>Emergency Interpreting</li><li>The Gory Details</li></ul></li></ul></li></ul><p><span style="background-color: #ffff00;">*Warning – some pictures may contain graphic materials. Viewer direction is advised.</span></p><p>PP Content:</p><ul><li>Surgery &amp; Types of Surgery: Elective, semi-elective, exploratory, emergency, transplant, cosmetic, amputation, etc</li><li>Common Surgical Procedures: Laser, microsurgery, suturing, staples, biopsy, grafts, cataract, tonsillectomy, joint replacement, heart bypass, etc</li><li>Preoperative Care: Medical exam, X-ray, blood count, blood types, etc</li><li>Staging for Surgery: Change clothes, vital signs, IV, anesthesia, etc</li><li>Cosmetic/Plastic/Reconstructive Surgery: Cleft, scar repair, weight loss surgery, botox, facelift, breast implants, buttock lift, etc</li><li>Post-operative Care: Catheter, surgical drain, infection, chemotherapy, dialysis, recovery, etc</li></ul>',
                    note: null,
                  },
                  {
                    name: "16.4 Personal Hygiene",
                    content:
                      "<p>Snapshots:</p><ul><li>Deaf Schools</li><li>Deaf Hygienic Practices</li><li>Signing Dentists</li></ul><p>PP Content:</p><ul><li>Personal Grooming/Hygiene: Bath, shampoo, exfoliating scrub, nail clippers, cotton balls, deodorant (slid, roll-on, spray, etc), shave (razor, electric, waxing, etc), picking nose, hands-on handrails, hand washing, disinfectant, sanitizing wipes, etc</li><li>Skin Conditions: Moles, acne, rash, measles, hives, warts, blisters, dry skin, fungus, ingrown nail, ear infection, body odor, etc</li><li>Dental Hygiene: Mouthwash, toothbrush, toothpick, floss, tongue scraper, etc</li><li>Dental Issues: Stained teeth, teeth whitening (and its methods), braces, filling, tooth extraction, dentures, dry mouth, etc</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "17",
                name: "Unit 17",
                title: "Sports and Activities",
                link_1: "https://drive.google.com/drive/folders/1Z9VGA5ou7DfdQhnbQkUn8MvQ9s3Je-HO?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1LaZZfhfx3qhYKn8ZVsMvNohW8fzQUr-W?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1Z9LTbFI2yuPxAvEmdywfT9lqnJaN8GwA?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/14csA1y6SrvicZDF2YYT_pfKnd16BtKRz?usp=sharing",
                glances: [
                  {
                    name: "17.1 All About Movement",
                    content:
                      "<p>Snapshots:</p><ul><li>Describing Movements</li><li>Flying Objects</li><li>Different Perspectives</li></ul><p>PP Content:</p><ul><li>General Movements: Balance, strength, running (speed – accelerating, decelerating, zigzag, etc), crawl, dive, lift, dragging, throw, catch, hit, punch, slap (face, forehead, knee, etc), jump, leap,etc</li><li>Head Movement: Rotation, hearing, getting air (swimming), head dodging the ball (ball missed), head-related metaphors (HEAD-DOWN = busted, guilty, humbled, etc), HEAD-NOD (playing along, not really paying attention, caving in, etc)</li><li>Arm/Hand Movements: Tennis (grip, swinging, etc), baseball/softball (swing, grip, throwing, missed, etc), hockey (bolding &amp; handling, passing the puck, etc), lacrosse (scooping, shoot the ball..etc), curling (holding &amp; sliding granite stones/rocks), football/rugby (holding, passing, catching from different angles, etc), volleyball (serve, block, spiking, etc), swimming, karate/MMA (punch, chop, etc), yoga, skiing, javelin, archery, etc</li><li>Leg Movements: Basketball, yoga, soccer, baseball/softball, skiing &amp; snowboarding, volleyball &amp; beach volleyball, synchronized swimming, diving, karate/MMA, football/rugby, field &amp; track, hurdles, gymnastics, skateboarding, bobsledding, etc</li><li>Feet Movements: Skiing &amp; snowboarding, soccer, ballet, tap dancing, etc</li><li>Body Movements: Body bending, twist, etc</li><li>Ball Movements: Fastball, slow, curve, bad throw, etc</li><li>Exercises &amp; Motions: Squat, pushup, plank, lunges, jumping jacks, crunches, etc</li><li>Different Views/Point of Views: Player’s view (on the field, playing), field view (coach’s view, fans’ view), sideline/dugout, audience’ view, bird’s eye/drone view (view from the top, across the field), etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "17.2 Individual Sports and Activities",
                    content:
                      "<p>Snapshots:</p><ul><li>Sounds in Sports</li><li>Legends and Leaders</li><li>Signing as an Advantage</li></ul><p>PP Content:</p><ul><li>Different Types of Individual Sports: Archery, bowling, boxing, disc golf, fencing, gaming, racquetball, rowing, wrestling, etc</li><li>Sportsmanly: Competitive, ambitious, honest, challenge, struggle, tough, overcome, accept, mature, etc</li><li>Unsportsmanlike: Talk trash, cheating, blaming, bitter, belittle, rude, arrogant, discouraged, give-up, complain, etc</li><li>Roles: Opponent, referee, teammate, fans, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "17.3 Team and Competitive Sports",
                    content:
                      "<p>Snapshots:</p><ul><li>Access to Sporting Events</li><li>Deaf Gain in Team Sports</li><li>Deaf Sporting Organizations</li><li>Team Signs</li><li>Deaf School Sports and Rivalry</li><li>Game Periods</li></ul><p>PP Content:</p><ul><li>Team Sports: Basketball, cheerleading, curling, football, ice hockey, etc</li><li>Game Periods: Full game, two halves, start of the period (mouthing: MM), close to end of period (mouthing: CS), halftime, overtime, etc</li><li>Number of Players Playing: One-on-one, five-on-five, 11-players, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "17.4 Sporting Facts and Stats",
                    content:
                      "<p>Snapshots:</p><ul><li>Sport Statistics</li><li>Stadiums and Seating</li><li>Deaflympics</li><li>Sports Injuries</li></ul><p>PP Content:</p><ul><li>Stadium Features: Baseball field, multi-use stadium, domed stadium, jumbovision, floodlights, tailgating, skybox, concession areas, hot dogs, popcorn, entrance from fan’s perspective, entrance from player’s perspective, sportscaster, converts, etc</li><li>Sporting Equipment: Goalposts, cleats, gloves, nets, goggles, skates, rails, helmet, chin-strap, mat, ball machine, etc</li><li>Team Roles &amp; Responsibilities: First string, coach, statistician, umpire, massage therapists, etc</li><li>Numbers in Sports: Cardinal (counting numbers), ordinal (ordering) numbers, ranking, rating, height, weight, age, years, decimals, percentage, points, scores, records, jersey numbers, yards, salary, etc</li><li>Injuries Related: Muscle torn, groin pull, ACL tear, concussion, brace, heating pad, therapy, warm-up, etc</li></ul>",
                    note: null,
                  },
                ],
              },
              {
                id: "18",
                name: "Unit 18",
                title: "Animals and Terrains",
                link_1: "https://drive.google.com/drive/folders/1EG9QO_s-CsprO8FTxcVzigVqNVfiSvJa?usp=sharing",
                link_2: "https://drive.google.com/drive/folders/1ipQ3m55pIC1cdOHTFYURx-B53VULDFeS?usp=sharing",
                link_3: "https://drive.google.com/drive/folders/1YY3c2bW7fEcCe72xZOoPUbl2q093M6Sz?usp=sharing",
                link_4: "https://drive.google.com/drive/folders/1uGxYktdj3XHoftYftAjCN5683tC7sGDK?usp=sharing",
                glances: [
                  {
                    name: "18.1 How Animals Move",
                    content:
                      "<p>Snapshots:</p><ul><li>Animal Plurality</li><li>Depicting Animal Movement</li></ul><p>PP Content:</p><ul><li>Animal Movement: Bipedal, quadrupedal, six-legs (e.g. insects), eight-legs, multi-armed (e.g. centipedes, vertical-fish, horizontal-fish (e.g. rays), flying bird, etc</li><li>Parts Used for Moving: legs, wings, fins, dorsal fin, tails, etc</li><li>Self-propelled: running, jumping, hopping, swimming, flying, soaring, gliding</li><li>Passive Locomotion: Sailing, kiting, rolling</li><li>Locomotion Modes – Aquatic:&nbsp; Buoyancy, jet propulsion, thrust, etc</li><li>Locomotion Modes – Terrestrial: Galloping, balancing, jumping, waddling, slithering, etc</li><li>Locomotion Modes – Arboreal (trees, etc): Swing, hanging, jumping from-branch-to-another, etc</li><li>Locomotion Modes – Fossorial(underground): Burrowing, nose-digging, tunnels, etc</li><li>Locomotion Modes – Aerial (air): Gravity, lift, “V” formation, flapping, gliding, pick-up-with-talons, pick-up-with-beaks, attacking, etc</li><li>Animal Interaction: Head butt, flight, escape, migration, lick, hide, camouflage, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "18.2 Mammals, Birds & Arthropods",
                    content:
                      "<p>Snapshots:</p><ul><li>Deaf Cats and Dogs</li><li>Weather and Climate</li><li>Animal Habitats</li></ul><p>PP Content:</p><ul><li>Terrains: Earth, tectonic plates, mountain, hilly, cliff/ridge, valley, cave, grassland/plains, forest, jungle, desert, swamp, island, urban, water current, erosion, etc</li><li>Weather and Climate: Weather forecast, paleoclimatology, barometer, ocean temperature, global warming, equator, tropical, sea level, high altitude, sunny, snowy, etc</li><li>Habitats: Flora, fauna, moss, rock, vernal pool, food, predator, prey, shelter, invasive alien species, pests, deforestation, draining marshland, bottom trawling, pollution, etc</li><li>Mammals: Milk, womb, marsupials, large brains, echolocation, evolution, herbivores, carnivorous, armadillo, bear, deer, fox, lion, porcupine, tiger, walrus, etc</li><li>Birds: Feather, preen, beaks, nest, eggs, flocking, blue jay, eagle, owl, pelican, penguin, woodpecker, etc</li><li>Arthropods: Exoskeleton, segmented body, appendages, ants, bees, butterflies, crabs, dragonfly, mosquito, praying mantis, scorpions, spiders, ticks, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "18.3 Fish, Reptiles and Amphibians",
                    content:
                      "<p>Snapshots:</p><ul><li>&nbsp;Signing Fish, Reptiles, and Amphibians</li><li>Water</li><li>Natural Disasters</li></ul><p>PP Content:</p><ul><li>Their Parts and How They Move: Gills, eyes shape, eyes position, eyes movements, scales, vocal sac, fangs, forked tongue, mandible (fish jaws), bottom-feeder, fish jumping out of the water, fish flopping on land, etc</li><li>How Fish, Reptiles &amp; Amphibians Touch and Feel: Moist, slippery, clammy, scaly, smooth, etc</li><li>Fish: Anglerfish, catfish, clownfish, marlin, piranha, salmon, seahorse, shark, tuna,etc</li><li>Reptiles: Alligators, lizard, snake, sea turtle, tortoise, dinosaur, etc</li><li>Amphibians: Toads, frogs, tadpole, salamander/newt</li><li>Life Cycle: Spawning, carry eggs/babies on its back, mouth-brooders, male pregnancy/pouch (i.e. seahorses), nesting/burying eggs, guarding eggs, abandon eggs, mutations,etc</li><li>Offensive &amp; Defensive Behaviors: Camouflage, poison, sting, bite, bright colors, flee, fight, projectiles, etc</li><li>Feeding Behaviors: Swallowing its prey whole, eats, cannibalism, fishing pole-like appendage, constrict, etc</li><li>Water-related: Still-water, rough-water, waterfall, low/high tide, river, pond, wetland, water cycle, etc</li></ul>",
                    note: null,
                  },
                  {
                    name: "18.4 Interesting Animal Facts",
                    content:
                      "<p>Snapshots:</p><ul><li>A Deaf Dolphin</li><li>Diverse Ways of Sensing</li></ul><p>PP Content:</p><ul><li>Reactions to Interesting Animal Facts: Only-one, different, fascinate, intriguing, scary, cute, ugly, record, best, slow/fast, strong, never-heard, serious, true-biz, wow, shock, lie-not-true, made-up, doubt, pensive, sad, hope</li><li>Conversation Starters</li><li>Group Discussion</li><li>ASL activity</li><li>SO-FAR YOU LEARN WHAT?</li></ul>",
                    note: null,
                  },
                ],
              },
            ],
            resources: [
              {
                name: "Curricular Resources",
                description: "Check out curricular resources here, including curricular mapping, comparison & ACTFL standards",
                link: "https://drive.google.com/drive/folders/11JUW0ESCVLIex45haLKUxdzz6PZdijjz?usp=sharing",
              },
              {
                name: "Technology",
                description: "Review browser and tech specs for TWA products.  Test your browser, storage, and internet bandwidth here.",
                link: "https://docs.google.com/document/d/e/2PACX-1vSOPhl2OOAnpO0bBhYGlDKzm0rmJxCLYtISgbESpajLJbwJbRSGg4kCf7ZYdgdYh5yetGiS-Gh347wo/pub?embedded=true",
              },
              {
                name: "Newsletter",
                description: "Sign up for TWA’s triannual newsletter! And browse past issues.",
                link: "https://docs.google.com/document/d/e/2PACX-1vTTmac5QlamJ2R-iFOfxKuqSvll9ePA4ao95JPf-96m3RaJbKn2psFsuTjWH_i8Eqw9NnMEWtfWhiWR/pub?embedded=true",
              },
              {
                name: "Webinars",
                description: "Join us during TWA’s monthly webinars! And check out recordings of past webinars.",
                link: "https://docs.google.com/document/d/e/2PACX-1vT9LdRLxAX8ZaGTmDxb5okKdbOIrNVf9dho9_glKiC4xsId4ODK5N01lCtfCprN31fphTnWRF1A2zFJ/pub?embedded=true",
              },
              {
                name: "Pricing & ISBNs",
                description: "Bookstore orders made easy - access pricing and ISBN information here.",
                link: "https://docs.google.com/document/d/12QTOu5LyltP5Hs9fVXeMs5jgVRSMS21f4CFsWv9xdl4/edit?usp=sharing",
              },
              {
                name: "Clock to Credit Hours",
                description: "Find out how many TRUE+WAY ASL units are recommended for a course.",
                link: "https://docs.google.com/document/d/e/2PACX-1vRo1vTcHO5sC0fk_cR6lI_HZpLu6Ja5nk2iZPTXS85clBv6XqP6XJ5x3Gp-Fy7vRZ-qxlmTvi_1P2a1/pub?embedded=true",
              },
              {
                name: "Contact Information",
                description: "Need to reach out to TRUE+WAY ASL? We’re here for you!",
                link: "https://docs.google.com/document/d/e/2PACX-1vRwFXZHjtVzN9YcfkuicK1ZJEQx5gxg1fjezr3FkXyWuZiVnp6qGlQzEh0O7S5Ca9tvMCqJVf38FR8D/pub",
              },
              {
                name: "Drop-in Hours for Teachers",
                description: "Have questions? Want to bounce ideas off other TWA teachers? Come and stop by!",
                link: "https://docs.google.com/document/d/e/2PACX-1vQ8-mYdxzVQBoxxLbVxhJsYwb6qCwipNnDpe5qKiIyoWz1cqXeapWDEaFGIOTz0Dt_zEgc3TAq7TUof/pub",
              },
              {
                name: "List of Updates",
                description: "One of the perks of a digital curriculum! TRUE+WAY ASL is constantly evolving. Check here for a list of updates.",
                link: "https://docs.google.com/document/d/1ufVsejb_dURP_8aTFvm_7GemZsdKZZdDglyCGOrYhNY/edit",
              },
              {
                name: "Sample Syllabi",
                description: "Check out sample syllabi and assignment schedule for different combinations of units.",
                link: "https://drive.google.com/drive/folders/1S-JRe7Ng0hnQDSVAceaQj1jI4YqUJC52?usp=sharing",
              },
              {
                name: "Screening and Placement",
                description: "Already know some ASL? Use this guide to determine which units to start with.",
                link: "https://docs.google.com/spreadsheets/d/1BhDaNEreqQvpYbqVlMZnO8BQXv-HUO5h8QdnQEEUyXg/edit?usp=sharing",
              },
              {
                name: "Instructor’s Table of Contents",
                description:
                  "View the full Units 1–18 Table of Contents, including all instructor-led lessons and activities provided for each unit.",
                link: "https://docs.google.com/document/d/1b9G91V5_h2SWLUbLHmFENx7IL0N2wyQ_JzCwfqfgGQY/edit?usp=sharing",
              },
            ],
            asks: [
              {
                question: "There’s Some Confusion about Time Zones in my Course...",
                answer:
                  "<p>With online or hybrid courses or even face-to-face courses with students who travel across time zones, it is important to establish the time zone in your syllabus. And explain that all due dates follow this time zone.</p><p>To check (or change) the time zone your course is in, go to your course, click on “Settings” > “Course Details” - scroll down and you’ll see “Time Zone”.</p><p>When building a course on the TWA platform, we always identify the time zone of the school and set the course time zone to follow the school location.</p>",
              },
              {
                question: "How Long Do Students Have Access To My Course?",
                answer:
                  "<p>Students have access to the TRUE+WAY ASL textbook for the duration of your course, typically corresponding to a quarter or semester. Once your course concludes, their access ends as well. If you’re teaching at a high school, please contact us for yearly pricing options. If a student has an incomplete and requires additional time, feel free to reach out to us at hello@truewayasl.com.</p><p>Note: If your course is hosted on your school’s platform, please check with your school’s Help Desk or IT team for specific policies regarding access.</p>",
              },
              {
                question: "How to Prevent Cheating?",
                answer:
                  "<p>TWA already includes these features:</p><p>1) The answers are “shuffled”. e.g. answer “a” will not be “a” next time.<br/>2) It’s difficult to copy the questions/answers as they’re heavily in video.</p><p>Some ideas/suggestions for you:</p>1) Rearrange the question order anytime, by simply dragging things around<br/>2) Add new questions to keep them on their toes (just film and upload!). Be sure to move this question around in the assignment.<br/>3) Add more questions to their own question bank and provide different variations of the same assignment to students<br/>4) Set a time for all assignments (limit to 30 mins, 1 hour, etc.) to make sure students stay focused (and do not have time to find answers)<br/>5) Have students take the quiz or test at the same time, and watch them (via Zoom or in-person)<br/>6) Ask that their phones be taken out and placed face down, visible on screen/in class.  If they have smart watches, have them taken off and placed downwards.<br/>7) Ask their college if they have something that controls the students’ screens as the students take a test (e.g. Respondus)<br/>8) Intentionally weight production assignments and tests more than comprehension assignments - so that the students who cheat on comprehension assignments will struggle with production assignments, and grades will reflect this",
              },
              {
                question: 'What is "With Text" and "Less Text" Presentation Slides?',
                answer:
                  '<p>As you see, there are two similar presentation slides for most TRUE+WAY ASL units.  Presentation slides with English words on the slides, by the pictures, is called "with text".  Presentation slides without English words by the pictures are called "less text".  It is up to you which one you want to pick for your course.  The content is the same.</p><p>And why don\'t all of the units have the "with text" and "less text" option?  Some of the advanced units have images and phrases that do not have a clean 1:1 translation from ASL to English, however, check the notes below the slide itself for more information as to what the images refer to.</p>',
              },
              {
                question: "Why doesn't TRUE+WAY ASL use .gifs?",
                answer:
                  '<p>TRUE+WAY ASL strives to adhere to WCAG 2.1 standards for digital textbooks.  WCAG stands for "Web Content Accessibility Guidelines".  WCAG 2.1 states that .gifs are highly discouraged because they trigger seizures and even death when viewed by people with photosensitive epilepsy. Since this finding, TWA has replaced .gifs with photos and/or videos that can be controlled by users (e.g. with stop or play buttons).</p> <p>Please let us know if you see a .gif in your course that needs to be replaced.  The TWA Hello Team is always happy to assist.  Email us at hello@truewayasl.com anytime.</p>',
              },
              {
                question: "Removing Students From My Course",
                answer:
                  "<p>If your student is no longer in your course, and you'd like to have their name no longer listed in your grades, email hello@truewayasl.com with the course name and the student name. TWA will deactivate their account.  Their name will no longer be in your gradebook, but their \"history\" will be kept in case it is needed in the future.</p> <p>If your course is on your school's Canvas platform, please ask your school's Help Desk/IT team as to their policy regarding student drop/withdrawals.</p>",
              },
              {
                question: "My Old Course(s) is No Longer on my Dashboard",
                answer:
                  'After a period of time passes, and as you get new courses, your older courses seem to disappear from your dashboard.  Worry none - they\'re still there!  All you have to do is click on "Courses" on the left side of the screen, then scroll down and click on "All Courses", and you\'ll find your older courses!',
              },
              {
                question: "Do I Have to Teach Everything in my TWA Course?",
                answer:
                  "You can!  Some want to use specific content, but not all.  That’s fine.  It’s your course, use whatever you want.  Just like you would with a textbook - you’d use what you want to teach/cover in your course.",
              },
              {
                question: "Why is a Link or a Video Not Working?",
                answer:
                  "If you see something that's not working, please contact us at hello@truewayasl.com detailing the issue and location.  We will take a look into this and try our best to address the issue as possible.",
              },
              {
                question: "I Have a Question I Prefer to Ask in ASL",
                answer:
                  'Stop by anytime during our “Drop-In” session for Teachers. Here’s <a target="_blank" href="https://docs.google.com/document/u/1/d/e/2PACX-1vQ8-mYdxzVQBoxxLbVxhJsYwb6qCwipNnDpe5qKiIyoWz1cqXeapWDEaFGIOTz0Dt_zEgc3TAq7TUof/pub">the schedule</a>.',
              },
              {
                question: "Where’s my Course(s)?",
                answer:
                  "<p>If you requested the build of your TRUE+WAY ASL course(s) recently but have not yet gotten an invitation to your course, please search your email for an email from no-reply@truewayasl.com. It is possible your course invitation may have gone to your spam folder.</p><p>If you haven’t put in your course request yet with hello@truewayasl.com, please email with the following information:</p><p>Your School or Organization name:</br>Which Term (which quarter, semester, and/or year):<br>Course Name:<br>Units Wanted:<br></p>This will help save time and get your course built and sent to you sooner!",
              },
              {
                question: "Why are Bookstore and TRUE+WAY ASL Prices Different?",
                answer:
                  "The prices differ because bookstores have additional expenses, such as inventory processing, leasing costs, and staff salaries, leading them to mark up the prices for the textbooks they sell - to cover these overhead costs.",
              },
              {
                question: "Is TRUE+WAY ASL affiliated with GoReact?",
                answer:
                  '<p>TRUE+WAY ASL and GoReact are separate products with no official affiliation or association.</p>For Go-React-related matters, contact their support team directly at <a target="_blank" href="https://help.goreact.com/hc/en-us">https://help.goreact.com.</a>',
              },
              {
                question: "What if I Didn’t Finish Teaching a Unit in My Course?",
                answer:
                  "<p>We understand that when teachers are new to the TRUE+WAY ASL textbooks, they may underestimate the time needed to cover all the units. As a result, some teachers may find themselves with an untaught unit at the end of the course. As a one-time exception, we are happy to work with you to carry over the untaught unit to your next course. This will require coordinating with your program and stakeholders to adjust the unit sequence, ensuring a smooth and successful experience for both you and your students.</p>",
              },
              {
                question: "How do I add an app to my Canvas course?",
                answer:
                  "<p>Examples of apps include Kaltura, GoReact, Zoom, Flip, Respondus, YouTube, etc.  On Basic (learn.truewayasl.com) and Premium (asl.instructure.com), go to “Settings” in your course menu, then click on “Apps” in the top header.  If you’re able to find what you want, let us know.</p><p>Free app?  Just email us at hello@truewayasl.com and we’ll be happy to install the app you want for your course.</p><p>Paid/licensed app?  Please ask your school’s IT for the key and shared secret so we can install the app to your course.</p><p>If your course is on your school’s platform, contact your school’s IT.</p>",
              },
              {
                question: "Why are there Spanish Translations?",
                answer:
                  "<p>TRUE+WAY ASL incorporates Spanish translations where appropriate to assist students. While the textbook focuses on developing proficiency in ASL, some materials such as slides, snapshots, and module titles are also available in ASL, English, and Spanish. Assignments, quizzes, and tests are provided in ASL and English only, without Spanish translations. TRUE+WAY ASL aims to scaffold learning effectively, enabling students with strong Spanish reading and writing skills to leverage their linguistic background to engage with ASL content. Additionally, given that Spanish is the second most widely used language in the United States, the grammatical and structural similarities between ASL and Spanish offer further advantages for students with a Spanish background.</p>",
              },
            ],
            howtos: [
              {
                title: "ASL Explanation (a.k.a., What is…?)",
                type: "modal",
                items: [
                  {
                    title: 'What are Lecture Slides - "With Text" and "Less Text"?',
                    content:
                      "<div style='position:relative;height:0;padding-bottom:56.25%'><iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/189adbb01f1febc890/99b7a5c5df0ee832?playerTheme=dark&amp;playerColor=' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen></iframe></div>",
                  },
                  {
                    title: "What are Snapshots?",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:56.25%'><iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/e89adab61c1de5cc60/54551d240c66eadc?playerTheme=dark&amp;playerColor=' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen></iframe></div>",
                  },
                  {
                    title: "What is Peer Observation Assessment (POA)?",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:56.25%'><iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/709adbb01f1fe4c5f8/7787e2b4389c797c?playerTheme=dark&amp;playerColor=' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen></iframe></div>",
                  },
                  {
                    title: "What is Self-Observation Analysis Report (SOAR)?",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:56.25%'><iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/a49adab61c1de5c32c/b60226e09a3969aa?playerTheme=dark&amp;playerColor=' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen></iframe></div>",
                  },
                ],
              },
              {
                title: "Downloadable Instructions",
                type: "link",
                items: [
                  {
                    title: "Adding Your Course(s) to Your Mobile Device: For Teachers Only",
                    content:
                      "https://docs.google.com/document/d/e/2PACX-1vTjzRafkp0tamm7S-wJMafNBe5M-Y89KOhPgYfG59Mg-joR3rQ-0F_DH-i8SeabhZVKj4Uy6YDNqK-a/pub",
                  },
                  {
                    title: "Uploading & Submitting YouTube Videos",
                    content: "https://docs.google.com/document/d/1JppTjwQypo5DJBw8tGL9hcPIOIlW84WyQvMkqkXpqyI/edit?usp=sharing",
                  },
                  {
                    title: "Setting up Groups Inside Your Course",
                    content: "https://docs.google.com/document/d/1TlGV7Iy0DKg9bpmRFA2VjoTQ6_12fPqOzJJ0OybbKNI/edit",
                  },
                  {
                    title: "Accessibility: Increasing Font Size",
                    content: "https://docs.google.com/document/d/1DONyddcWUDo8HCbItYn_9ScRF09pv1dWR7I5vKb5zZI/edit?usp=sharing",
                  },
                  {
                    title: "Accessibility: Printing Worksheets, Quizzes or Tests",
                    content: "https://docs.google.com/document/d/1T6wBQPxp4FD8j8JriJN93DRmp5IuBYYRlOv6ppSIIrQ/edit?usp=sharing",
                  },
                  {
                    title: "Adding an Assignment",
                    content: "https://docs.google.com/document/d/1U9jNW37nomP2WFUrBPBX66TQBby_vIPm6vGa7ZFK5Yg/edit?usp=sharing",
                  },
                  {
                    title: "Adding GoReact Inside Your Course",
                    content: "https://drive.google.com/file/d/1txwy094LxZgV7LdrbRNpThCQyTBGnaXV/view?usp=sharing",
                  },
                  {
                    title: "Adding Links In Your Course",
                    content: "https://docs.google.com/document/d/1DsieQZA7jW_EOIoh_6r96pZBbE-CqDoEUQNlvfcTYAU/edit?usp=sharing",
                  },
                  {
                    title: "Adding Syllabus In Your Course",
                    content: "https://docs.google.com/document/d/1Frk5CYOR7eQyZ7sAxA6C0y_1cmkcliQmE1ZuO_uPUCQ/edit?usp=sharing",
                  },
                  {
                    title: "Automated Grading for Missing or Late Submissions",
                    content: "https://docs.google.com/document/d/1OJNITXaYUO-4K11hD01Tya4LtdxBo_zRVqNP9ygV_mA/edit?usp=sharing",
                  },
                  {
                    title: "Creating a Recorded Presentation (For Apple/Mac Devices)",
                    content:
                      "https://docs.google.com/presentation/d/1FPgN5gP5BmPGdevn31qgAwpMmzPAfX2D/edit?usp=sharing&ouid=112292259460381094271&rtpof=true&sd=true",
                  },
                  {
                    title: "Embedding Lecture Videos In Your Course",
                    content:
                      "https://docs.google.com/document/d/1QP-LGYeuINlDF4wtGzi95VVPENGkAwpC/edit?usp=sharing&ouid=112292259460381094271&rtpof=true&sd=true",
                  },
                  {
                    title: "Extending a Due Date for a Specific Student(s)",
                    content: "https://docs.google.com/document/d/1LalCyREisWGvPg2-XIDX50byfA72fSjBeLjT_SQYhWU/edit?usp=sharing",
                  },
                  {
                    title: "Giving a Student an Extra Attempt",
                    content: "https://docs.google.com/document/d/1vPFeELUCDdbeg4qpvOhxTTcOCgxbIoiAoc5hjVjcsLE/edit?usp=sharing",
                  },
                  {
                    title: "Giving Students Extra Credit or Points",
                    content: "https://docs.google.com/document/d/1ZjsHqKxRlrqyChth059NCp6HTnkvYf6crFpJAFs5MZE/edit?usp=sharing",
                  },
                  {
                    title: "Integrating Flipgrid Inside Your Course",
                    content: "https://docs.google.com/document/d/1sDopZxyGGO2MpCu0hJtEQG3fqK0ehiEVmhFCQ0JOHj0/edit?usp=sharing",
                  },
                  {
                    title: "Rearranging Modules",
                    content: "https://docs.google.com/document/d/1F0RWXHnAVkBYqxIjY7OazUB-9kkaGrZE9UcoOnLSHu8/edit?usp=sharing",
                  },
                  {
                    title: "Rearranging Your Course Menu",
                    content: "https://docs.google.com/document/d/1uu4q5Qetfi26Vn2BhU8hq9hmYvlyrgsoCYMcFAVgJ_s/edit?usp=sharing",
                  },
                  {
                    title: "Setting up Sections Inside Your Course",
                    content: "https://docs.google.com/document/d/17Ug7z1Z5V7nEXGYK7V1sKgJfL9q3xT0d1iu6dX6nD9I/edit?usp=sharing",
                  },
                  {
                    title: "Shifting Due Dates Forward",
                    content: "https://docs.google.com/document/d/13JTNYD-1b7GQtxBG3_6uChaHpe9y2NTBLvecWf4jwyE/edit?usp=sharing",
                  },
                  {
                    title: "Signopardy Instructions",
                    content: "https://docs.google.com/document/d/1NgcbC17bs673SnuJXMoTr3aLgdJli5oKN5oXP1JuxRA/edit?usp=sharing",
                  },
                  {
                    title: "Teacher & Student Views",
                    content: "https://docs.google.com/document/d/1EGmfFsAIb8rR0MA7t7LVQtLjeTEcRHM5JKTKUJMjSxU/edit?usp=sharing",
                  },
                  {
                    title: "Uploading a Syllabus or File",
                    content: "https://docs.google.com/document/d/1LRotaOLT9rGK5vCNNMNBXoA1v2RJm16Sb3nLvoGuWtQ/edit?usp=sharing",
                  },
                  {
                    title: "Unpublishing vs. Deleting Modules",
                    content: "https://docs.google.com/document/d/1Vh0MiL3rEhqVf4yne2UzXkCykjkOXFzAgeGWv6qQGwA/edit?usp=sharing",
                  },
                  {
                    title: "Adjusting Weighted Category Percentages",
                    content: "https://docs.google.com/document/d/17Ip-EnDb05TvQwDGc2n6XoamIkUCTR4TaJqXAcRjS9I/edit?usp=sharing",
                  },
                  {
                    title: "Adding a Link to Your Course Menu",
                    content: "https://docs.google.com/document/d/14jugb03Te0yfNfeXo07sCDqVOGQ5rAvhAmgifWoywTo/edit?usp=sharing",
                  },
                  {
                    title: "Checking Your Course Time Zone",
                    content: "https://docs.google.com/document/d/10hP3kfWExzEetHSUa8RRNmMV292X2OMyqROqsIUxpsw/edit?usp=sharing",
                  },
                  {
                    title: "Locking an Assignment, Quiz or Test",
                    content: "https://docs.google.com/document/d/1WKZkcwwxaedYmT1DE3duk6nml6ht-VLABCOEodFRdDE/edit?usp=sharing",
                  },
                  {
                    title: "Unhiding Student Grades",
                    content: "https://docs.google.com/document/d/1_VxhRpYt9FiJTIhTf8JBJvBWmNIO09QJ53i7cvbTY7I/edit?usp=sharing",
                  },
                  {
                    title: "Viewing Specific Grading Columns",
                    content: "https://docs.google.com/document/d/1Nh20KxCYOLNEqrCbCTlBCgR5HidCd4NbG3597TLbzFE/edit?usp=sharing",
                  },
                  {
                    title: "Exporting Course Grades",
                    content: "https://docs.google.com/document/d/1o0D1hNlj9bCGrL-ZfDri9KpT5StwYzOQvSTk9KVajSg/edit?usp=sharing",
                  },
                  {
                    title: "Printing or Saving Individual Student Grades",
                    content: "https://docs.google.com/document/d/1tCkEq-q-L_NkDy7qMF4Szjl3KBonVrAKLLzZukwPBb4/edit?usp=sharing",
                  },
                  {
                    title: "Copying Content from a Course to a New Course",
                    content: "https://docs.google.com/document/d/1hY2kOwhO5fsgcxa_pYebbfQ7i7OYWYUGpHTxBSL3AMA/edit?usp=sharing",
                  },
                ],
              },
              {
                title: "Screen Recorded Instructions",
                type: "modal",
                items: [
                  {
                    title: "Cheating Prevention: Part 1",
                    content:
                      '<div style=\'position:relative;height:0;padding-bottom:56.25%\'><iframe src="https://videos.sproutvideo.com/embed/ea9fd8b8151de6c163/b3a9f3b4ae54a1f1?playerTheme=dark&playerColor=" style=\'position:absolute;width:100%;height:100%;left:0;top:0\' frameborder="0" width="100%" height="100%" allowfullscreen></iframe></div>',
                  },
                  {
                    title: "Cheating Prevention: Part 2",
                    content:
                      '<div style=\'position:relative;height:0;padding-bottom:56.25%\'><iframe src="https://videos.sproutvideo.com/embed/d391d7b31d1ee0c35a/b54c3bd3a7114947?playerTheme=dark&playerColor=" style=\'position:absolute;width:100%;height:100%;left:0;top:0\' frameborder="0" width="100%" height="100%" allowfullscreen></iframe></div>',
                  },
                  {
                    title: "GoReact: Adding an External Tool",
                    content:
                      '<div style=\'position:relative;height:0;padding-bottom:56.25%\'><iframe src="https://videos.sproutvideo.com/embed/4d9fdfbf101fe6c5c4/0515e07e6bad7730?playerTheme=dark&playerColor=" style=\'position:absolute;width:100%;height:100%;left:0;top:0\' frameborder="0" width="100%" height="100%" allowfullscreen></iframe></div>',
                  },
                  {
                    title: "GoReact Library Collection",
                    content:
                      '<div style=\'position:relative;height:0;padding-bottom:56.25%\'><iframe src="https://videos.sproutvideo.com/embed/d39fdfbf101fe6c35a/c87696d715cc600b?playerTheme=dark&playerColor=" style=\'position:absolute;width:100%;height:100%;left:0;top:0\' frameborder="0" width="100%" height="100%" allowfullscreen></iframe></div>',
                  },
                  {
                    title: "Premium: Attendance & Access Report Tools",
                    content:
                      '<div style=\'position:relative;height:0;padding-bottom:56.25%\'><iframe src="https://videos.sproutvideo.com/embed/ac9ed4bf1b1de7c225/5ec0c011b399188a?playerTheme=dark&playerColor=" style=\'position:absolute;width:100%;height:100%;left:0;top:0\' frameborder="0" width="100%" height="100%" allowfullscreen></iframe></div>',
                  },
                  {
                    title: "Premium: Teacher and Student Mobile Apps",
                    content:
                      '<div style=\'position:relative;height:0;padding-bottom:56.25%\'><iframe src="https://videos.sproutvideo.com/embed/709ed4bf1b1de7c6f9/6b5ea50e6117591a?playerTheme=dark&playerColor=" style=\'position:absolute;width:100%;height:100%;left:0;top:0\' frameborder="0" width="100%" height="100%" allowfullscreen></iframe></div>',
                  },
                  {
                    title: "Premium: Video Recording Instructions",
                    content:
                      '<div style=\'position:relative;height:0;padding-bottom:56.25%\'><iframe src="https://videos.sproutvideo.com/embed/ea9ed4bf1b1de7c463/f2cb4c113edf33a6?playerTheme=dark&playerColor=" style=\'position:absolute;width:100%;height:100%;left:0;top:0\' frameborder="0" width="100%" height="100%" allowfullscreen></iframe></div>',
                  },
                  {
                    title: "Adding GoReact Inside Your Course",
                    content:
                      '<div style=\'position:relative;height:0;padding-bottom:78.4182944259171%\'><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ9rmBbWwQQ8zxqbguO9DuLfnbyQQCWCY7UQwLpoyRuQ2X-kYkL2A8ostZW2MOznxmtvo5EPHydcWwm/embed?start=false&loop=false&delayms=3000" style=\'position:absolute;width:100%;height:100%;left:0;top:0\' frameborder="0" width="100%" height="100%" allowfullscreen></iframe></div>',
                  },
                  {
                    title: "Changing Your Course Menu",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:78.4182944259171%'><iframe class='sproutvideo-player' src='https://truewayasl.vids.io/videos/ea9ddab21f1be7c663/changing-course-menu' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen></iframe></div>",
                  },
                  {
                    title: "Editing a Quiz",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:84.53307392996109%'><iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/ea9ddbb21b18e3c463/560f0ccbd7a99e40?playerTheme=dark&amp;playerColor=' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen></iframe></div>",
                  },
                  {
                    title: "Navigating Modules",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:78.4182944259171%'><iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/709ddbb11f10e3c9f9/e0c71e07e44061c5?playerTheme=dark&amp;playerColor=' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen></iframe></div>",
                  },
                  {
                    title: "Setting Weighted Categories",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:56.25%'><iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/ac9fd8b41f15eec125/9fcc144f69b3c54f?playerTheme=dark&amp;playerColor='style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen referrerpolicy='no-referrer-when-downgrade' title='Video Player'></iframe></div>",
                  },
                  {
                    title: "Adding Your Lecture Video",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:78.4182944259171%'><iframe class='sproutvideo-player' src='https://docs.google.com/presentation/d/e/2PACX-1vT_Cmf1Adw3NsbiS4BvRzUvjr4mwGV-Oik9CTSX0v3JMbSX2DUyKHJt_GB-CkXi6KbVOgVtu_yu7UZh/embed?start=false&loop=false&delayms=3000' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen></iframe></div>",
                  },
                  {
                    title: "Editing Quiz Answers",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:78.4182944259171%'><iframe class='sproutvideo-player' src='https://docs.google.com/presentation/d/e/2PACX-1vQk35w-Yeou4Zr6VZH8aiBQs7x6K--Q_MCwutcMvBSYt9dGLsi4iVatvV-6ceBS0TtjHf48wEBAYnxq/embed?start=false&loop=false&delayms=3000' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen></iframe></div>",
                  },
                  {
                    title: "Moving Modules and Teacher/Student View",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:78.4182944259171%'><iframe class='sproutvideo-player' src='https://docs.google.com/presentation/d/e/2PACX-1vS3xpHDNFhtonGHWm6_xSSLlAOUUi2fHrTWdQA2tySiPh5B4_-w-mepgFFdsTzxXsQ1UZhm6xsrK3Uf/embed?start=false&loop=false&delayms=3000' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen></iframe></div>",
                  },
                  {
                    title: "Rearranging Your Course Menu",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:78.4182944259171%'><iframe class='sproutvideo-player' src='https://docs.google.com/presentation/d/e/2PACX-1vTOzXvP-DPjikfPEYHdo727PZbqzVuAqJOuqleKouQDBiWzkXqMA6htBatjpLZ4EHSFlyaBWmOQDFvS/embed?start=false&loop=false&delayms=3000' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen></iframe></div>",
                  },
                  {
                    title: "Searching Inside Your Gradebook",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:78.4182944259171%'><iframe class='sproutvideo-player' src='https://docs.google.com/presentation/d/e/2PACX-1vTNO8sYVlqykoVR7iR0LT13du7Lljd4RhJ7pepq_oCip22SZWKHQnK0obyhm1A9shbHgKavP1DgGLT2/embed?start=false&loop=false&delayms=3000' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen></iframe></div>",
                  },
                  {
                    title: "Setting Assignment Due Dates",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:78.4182944259171%'><iframe class='sproutvideo-player' src='https://docs.google.com/presentation/d/e/2PACX-1vTE3PBv1Seom5fuRWYboeHPJ6MHDiCqVTOPU48qA5j_ZNPi3oOfk2UGlCYxF3N8VzDAxChwIEyDjj8N/embed?start=false&loop=false&delayms=3000' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen></iframe></div>",
                  },
                  {
                    title: "Grading Tips & Tricks",
                    content:
                      '<div style=\'position:relative;height:0;padding-bottom:56.25%\'><iframe src="https://videos.sproutvideo.com/embed/449fdcb71c1be2cfcd/d563167c86f1ca18?playerTheme=dark&playerColor=" style=\'position:absolute;width:100%;height:100%;left:0;top:0\' frameborder="0" width="100%" height="100%" allowfullscreen></iframe></div>',
                  },
                  {
                    title: "SOAR and POA Teaching Tips",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:56.25%'><iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/119fd9b8151cedc598/58076006207b6b50?playerTheme=dark&amp;playerColor=' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen referrerpolicy='no-referrer-when-downgrade' title='Video Player'></iframe></div>",
                  },
                  {
                    title: "Integrating <i>What's the Sign?</i> Activities in your TWA Course",
                    content:
                      "<div style='position: relative; padding-bottom: 71.14624505928853%; height: 0;'><iframe src='https://www.loom.com/embed/7404d2a07fd241e7a3ed7771795e2825' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;'></iframe></div>",
                  },
                  {
                    title: "Finding Updates to TWA Textbook",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:39.92419456727732%'><iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/1190d2b31414e5cb98/27e9efac7df0bb3b?playerTheme=dark&amp;playerColor=2f3437' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder=\"0\" allowfullscreen referrerpolicy='no-referrer-when-downgrade' title='Video Player'></iframe></div>",
                  },
                  {
                    title: "Premium: Canvas’ Newest Features (Nov. 2023)",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:56.25%'><iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/a790d0b01a13e3cb2e/d0e011bc4521b15e?playerTheme=dark&amp;playerColor=2f3437' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen referrerpolicy='no-referrer-when-downgrade' title='Video Player'></iframe></div>",
                  },
                  {
                    title: "New Course or Course Copy?  Tips from an Experienced TWA Teacher",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:66.66666666666666%'><iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/7990dbb81e19efccf0/7d3b7231b1c38d50?playerTheme=dark&amp;playerColor=2f3437' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen referrerpolicy='no-referrer-when-downgrade' title='Video Player'></iframe></div>",
                  },
                  {
                    title: "Adapting TWA for Online, Hybrid and Onsite Courses",
                    content:
                      "<div style='position:relative;height:0;padding-bottom:56.25%'><iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/0691d2b11f15e9c58f/09116aeaa37b1a2f?playerTheme=dark&amp;playerColor=2f3437' style='position:absolute;width:100%;height:100%;left:0;top:0' frameborder='0' allowfullscreen referrerpolicy='no-referrer-when-downgrade' title='Video Player'></iframe></div>",
                  },
                ],
              },
            ],
          };
        },
        computed: {
          unit: function () {
            var e = this;
            return this.units.find(function (t) {
              return t.id === e.unit_id;
            });
          },
          unit_id: function () {
            return this.$route.query.unit || this.units_allowed[0].id;
          },
          units_allowed: function () {
            var e = this;
            return this.units_for_teacher.map(function (t) {
              return e.units[parseInt(t) - 1];
            });
          },
        },
        methods: {
          sort_by_name: function (e) {
            return e.slice().sort(function (e, t) {
              return e.name < t.name ? -1 : e.name > t.name ? 1 : 0;
            });
          },
          sort_by_title: function (e) {
            return e.slice().sort(function (e, t) {
              return e.title < t.title ? -1 : e.title > t.title ? 1 : 0;
            });
          },
          sort_by_question: function (e) {
            return e.slice().sort(function (e, t) {
              return e.question < t.question ? -1 : e.question > t.question ? 1 : 0;
            });
          },
          showHowTo: function (e, t) {
            (this.selected_howto = e), "link" === t ? window.open(this.selected_howto.content, "_blank") : (this.showModal = !0);
          },
        },
      },
      Jt = Xt,
      Zt = (n("5684"), Object(p["a"])(Jt, zt, Yt, !1, null, "b3493e96", null)),
      en = Zt.exports,
      tn = {
        components: { Teacher: en },
        data: function () {
          return { units_for_teacher: ["1"], context_id: null, show: !1, load: !0 };
        },
        methods: {
          checkCookie: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), H();
                        case 3:
                          (n = t.sent),
                            console.log("response", n),
                            (e.units_for_teacher = n.units_for_teacher),
                            (e.context_id = n.context_id),
                            (e.show = !0),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10), (t.t0 = t["catch"](0)), console.log(t.t0);
                        case 13:
                          e.load = !1;
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            )();
          },
        },
        mounted: function () {
          this.checkCookie();
        },
      },
      nn = tn,
      rn = Object(p["a"])(nn, Bt, Ht, !1, null, null, null),
      on = rn.exports,
      sn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("b-container", [n("Wts")], 1);
      },
      an = [],
      ln = { name: "dictionary", components: { Wts: Qt } },
      cn = ln,
      un = Object(p["a"])(cn, sn, an, !1, null, null, null),
      pn = un.exports,
      dn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.isDataLoaded
          ? n(
              "b-container",
              { staticStyle: { width: "400px" } },
              [
                n("script", { attrs: { type: "application/javascript", defer: "", src: "https://js.stripe.com/v3" } }),
                this.course
                  ? n(
                      "b-card",
                      { staticClass: "text-center", attrs: { header: this.course.name } },
                      [
                        0 === e.is_live
                          ? n("b-badge", { staticStyle: { color: "#983705" }, attrs: { variant: "warning" } }, [e._v("TEST MODE")])
                          : e._e(),
                        n(
                          "b-card-text",
                          { staticClass: "text-left" },
                          [
                            n("b", [e._v(" Teacher(s) ")]),
                            e._l(this.course.teachers, function (t) {
                              return n("div", { key: t.id, staticClass: "mt-2" }, [e._v(" " + e._s(t.display_name) + " ")]);
                            }),
                            n("br"),
                            n("b", [e._v(" Unit(s) ")]),
                            n(
                              "div",
                              { staticClass: "mt-2" },
                              e._l(this.twa_course.products, function (t) {
                                return n("span", { key: t.product_code }, [e._v(" " + e._s(t.name) + " ")]);
                              }),
                              0
                            ),
                            n("br"),
                            "email" === e.show_form
                              ? n(
                                  "div",
                                  [
                                    n("b", [e._v("Your TWA Account")]),
                                    n(
                                      "b-input-group",
                                      {
                                        staticClass: "mt-3",
                                        scopedSlots: e._u(
                                          [
                                            {
                                              key: "prepend",
                                              fn: function () {
                                                return [n("b-input-group-text", { staticStyle: { width: "95px" } }, [e._v(" Name ")])];
                                              },
                                              proxy: !0,
                                            },
                                          ],
                                          null,
                                          !1,
                                          1854551055
                                        ),
                                      },
                                      [
                                        n("b-form-input", {
                                          attrs: { name: "name", type: "text" },
                                          model: {
                                            value: e.form.name,
                                            callback: function (t) {
                                              e.$set(e.form, "name", t);
                                            },
                                            expression: "form.name",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n(
                                      "b-input-group",
                                      {
                                        staticClass: "mt-2",
                                        scopedSlots: e._u(
                                          [
                                            {
                                              key: "prepend",
                                              fn: function () {
                                                return [n("b-input-group-text", { staticStyle: { width: "95px" } }, [e._v(" Email ")])];
                                              },
                                              proxy: !0,
                                            },
                                          ],
                                          null,
                                          !1,
                                          2488011652
                                        ),
                                      },
                                      [
                                        n("b-form-input", {
                                          attrs: { name: "email", type: "email" },
                                          model: {
                                            value: e.form.email,
                                            callback: function (t) {
                                              e.$set(e.form, "email", t);
                                            },
                                            expression: "form.email",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n(
                                      "b-input-group",
                                      {
                                        staticClass: "mt-2",
                                        scopedSlots: e._u(
                                          [
                                            {
                                              key: "prepend",
                                              fn: function () {
                                                return [n("b-input-group-text", { staticStyle: { width: "95px" } }, [e._v(" Password ")])];
                                              },
                                              proxy: !0,
                                            },
                                          ],
                                          null,
                                          !1,
                                          2591930167
                                        ),
                                      },
                                      [
                                        n("b-form-input", {
                                          attrs: { name: "password", type: "password" },
                                          model: {
                                            value: e.form.password,
                                            callback: function (t) {
                                              e.$set(e.form, "password", t);
                                            },
                                            expression: "form.password",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n(
                                      "ul",
                                      { staticClass: "mt-3" },
                                      e._l(e.email_errors, function (t) {
                                        return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                                      }),
                                      0
                                    ),
                                    n(
                                      "b-button",
                                      { attrs: { block: "", variant: "success" }, on: { click: e.sendCode } },
                                      [
                                        e._v("Sign Up "),
                                        this.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : e._e(),
                            "magic_code" === e.show_form
                              ? n(
                                  "div",
                                  [
                                    n("h5", [e._v("Check your inbox")]),
                                    n("span", { staticClass: "text-muted" }, [e._v("Sent to " + e._s(e.form.email))]),
                                    n(
                                      "b-input-group",
                                      { staticClass: "my-3" },
                                      [
                                        n(
                                          "b-input-group-prepend",
                                          { attrs: { "is-text": "" } },
                                          [n("font-awesome-icon", { attrs: { icon: e.icon } })],
                                          1
                                        ),
                                        n("b-input", {
                                          attrs: { placeholder: "code", autocomplete: "off" },
                                          model: {
                                            value: e.form.code,
                                            callback: function (t) {
                                              e.$set(e.form, "code", t);
                                            },
                                            expression: "form.code",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n(
                                      "ul",
                                      e._l(e.magic_errors, function (t) {
                                        return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                                      }),
                                      0
                                    ),
                                    n(
                                      "b-button",
                                      { attrs: { block: "", variant: "success" }, on: { click: e.verifyCode } },
                                      [
                                        e._v("Verify Email "),
                                        this.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : e._e(),
                            "checkout" === e.show_form
                              ? n("div", [
                                  n("h5", [e._v("Your email has been verified")]),
                                  n("span", { staticClass: "text-muted" }, [
                                    e._v("Please choose below to enter your access code(s) or to make payment to gain access to your course."),
                                  ]),
                                  n(
                                    "div",
                                    { staticClass: "mt-4 d-flex justify-content-around" },
                                    [
                                      n(
                                        "b-form-checkbox",
                                        {
                                          attrs: { name: "agreed", value: "yes", "unchecked-value": "no" },
                                          model: {
                                            value: e.form.agreed,
                                            callback: function (t) {
                                              e.$set(e.form, "agreed", t);
                                            },
                                            expression: "form.agreed",
                                          },
                                        },
                                        [
                                          n("small", { staticClass: "text-muted" }, [
                                            e._v("Yes, I have read and I do agree with TRUE+WAY ASL's "),
                                            n(
                                              "a",
                                              {
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function (t) {
                                                    return e.$bvModal.show("terms");
                                                  },
                                                },
                                              },
                                              [e._v("Terms of Use")]
                                            ),
                                            e._v(" and "),
                                            n(
                                              "a",
                                              {
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function (t) {
                                                    return e.$bvModal.show("privacy");
                                                  },
                                                },
                                              },
                                              [e._v("Privacy Policy")]
                                            ),
                                            e._v("."),
                                          ]),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  n(
                                    "div",
                                    { staticClass: "mt-4 d-flex justify-content-around" },
                                    [
                                      n(
                                        "b-button",
                                        {
                                          attrs: { variant: "success", disabled: "no" === e.form.agreed },
                                          on: {
                                            click: function (t) {
                                              e.show_form = "coupons";
                                            },
                                          },
                                        },
                                        [e._v("Enter Code(s) ")]
                                      ),
                                      n("b-button", { attrs: { variant: "success", disabled: "no" === e.form.agreed }, on: { click: e.checkout } }, [
                                        e._v("Make Payment"),
                                      ]),
                                    ],
                                    1
                                  ),
                                ])
                              : e._e(),
                            "coupons" === e.show_form
                              ? n(
                                  "div",
                                  [
                                    n(
                                      "b-input-group",
                                      { attrs: { prepend: "Access Code" } },
                                      [
                                        n("b-form-input", {
                                          attrs: { type: "text" },
                                          model: {
                                            value: e.form.coupon,
                                            callback: function (t) {
                                              e.$set(e.form, "coupon", "string" === typeof t ? t.trim() : t);
                                            },
                                            expression: "form.coupon",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n("div", { staticClass: "mt-3" }, [
                                      this.coupons.length
                                        ? n("strong", { staticClass: "text-muted" }, [
                                            e._v(
                                              e._s(this.coupons.length) +
                                                " of " +
                                                e._s(this.twa_course.products.length) +
                                                " codes validated: " +
                                                e._s(this.coupons.join(", "))
                                            ),
                                          ])
                                        : e._e(),
                                    ]),
                                    n(
                                      "ul",
                                      { staticClass: "mt-3" },
                                      e._l(e.coupon_errors, function (t) {
                                        return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                                      }),
                                      0
                                    ),
                                    n(
                                      "b-button",
                                      { staticClass: "mt-4", attrs: { block: "", variant: "success" }, on: { click: e.verifyCoupon } },
                                      [
                                        e._v("Submit "),
                                        this.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : e._e(),
                            "already_enrolled" === e.show_form
                              ? n(
                                  "div",
                                  [
                                    n("h3", [e._v("Hello again!")]),
                                    n("b-card-text", [
                                      n("p", [
                                        e._v(" I see that you are already enrolled. You can login at "),
                                        n(
                                          "a",
                                          { attrs: { href: e.learn_link } },
                                          [e._v(e._s(e.learn_link) + " "), n("b-icon", { attrs: { "font-scale": "1", icon: "box-arrow-up-right" } })],
                                          1
                                        ),
                                      ]),
                                    ]),
                                  ],
                                  1
                                )
                              : e._e(),
                            "thank_you" === e.show_form
                              ? n(
                                  "div",
                                  [
                                    n("h3", [e._v("Thank you!")]),
                                    n("b-card-text", [
                                      n("p", [e._v(" Your access has been processed. You should receive a confirmation email shortly. ")]),
                                      n("p", [
                                        e._v(" Come login at "),
                                        n(
                                          "a",
                                          { attrs: { href: e.learn_link } },
                                          [e._v(e._s(e.learn_link) + " "), n("b-icon", { attrs: { "font-scale": "1", icon: "box-arrow-up-right" } })],
                                          1
                                        ),
                                      ]),
                                    ]),
                                  ],
                                  1
                                )
                              : e._e(),
                          ],
                          2
                        ),
                      ],
                      1
                    )
                  : e._e(),
              ],
              1
            )
          : n(
              "b-container",
              { staticStyle: { width: "400px" } },
              [
                n("b-card", { staticClass: "text-center" }, [
                  e.network_error
                    ? n(
                        "div",
                        [
                          n("h3", [e._v("Uh oh!")]),
                          n("br"),
                          n("b-card-text", [n("p", [e._v(" Koko has been playing with the cables again. Sorry! Try again in a few. ")])]),
                        ],
                        1
                      )
                    : e.need_support
                      ? n(
                          "div",
                          [
                            n("h3", [e._v("Gosh!")]),
                            n("br"),
                            n("b-card-text", [
                              n("p", [e._v(" We don't recognize your course link. Double check with your teacher? Maybe there's a typo. ")]),
                              n("p", [e._v(" We will still be here for you! ")]),
                            ]),
                          ],
                          1
                        )
                      : n(
                          "div",
                          [
                            e._v(" Hang on. Getting info. "),
                            n("b-spinner", {
                              staticClass: "ml-2",
                              staticStyle: { width: "1.5rem", height: "1.5rem" },
                              attrs: { variant: "secondary" },
                            }),
                          ],
                          1
                        ),
                ]),
              ],
              1
            );
      },
      mn = [],
      hn =
        (n("c975"),
        n("25f0"),
        {
          data: function () {
            return {
              form: { email: null, password: null, code: null, agreed: "no", coupon: null },
              email_errors: [],
              magic_errors: [],
              coupon_errors: [],
              isDataLoaded: !1,
              pseudonym: { account_id: null, unique_id: null, password: null },
              isSending: !1,
              show_form: "email",
              icon: ["fa", "envelope"],
              code: null,
              course: null,
              twa_course: null,
              enrollment: null,
              coupons: [],
              need_support: !1,
              network_error: !1,
            };
          },
          watch: {
            "form.email": function (e) {
              this.form.email = e.toLowerCase();
            },
          },
          computed: {
            token: function () {
              return this.$route.query.token || null;
            },
            lms_url: function () {
              return "https://learn.truewayasl.com";
            },
            stripe_key: function () {
              return "pk_live_6hvrgm1Y0ErWQJIhmct81aTp";
            },
            learn_link: function () {
              return "https://learn.truewayasl.com";
            },
            stripe_success_url: function () {
              var e = "https://";
              "localhost:8080" === location.host && (e = "http://");
              var t = e + location.host + "/success?live=" + this.is_live + "&course_id=" + this.course.id;
              return t;
            },
            is_live: function () {
              var e = 0;
              return "https://learn.truewayasl.com" === this.lms_url && (e = 1), e;
            },
          },
          methods: {
            getErrorMessage: function (e) {
              console.log(e);
              var t = e.message;
              return "Network Error" === t && (this.network_error = !0), e.response && (t = e.response.statusText), t;
            },
            notifyMe: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "danger";
              this.$bvToast.toast(e, { title: "Notification", solid: !0, variant: t, autoHideDelay: 2500, appendToast: !0 });
            },
            getLineItems: function () {
              var e = this.twa_course.products;
              console.log("products", e);
              var t = [];
              return (
                e.forEach(function (e) {
                  t.push({ price: e.stripe_price_id, quantity: 1 });
                }),
                t
              );
            },
            getToken: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!e.token) {
                              t.next = 17;
                              break;
                            }
                            return (t.prev = 1), (t.next = 4), X(e.token);
                          case 4:
                            return (e.twa_course = t.sent), (t.next = 7), ae(e.twa_course.canvas_course_id);
                          case 7:
                            (e.lti_course = t.sent), e.$router.push({ path: "/verify", query: { course: e.lti_course.context_id } }), (t.next = 15);
                            break;
                          case 11:
                            (t.prev = 11), (t.t0 = t["catch"](1)), e.notifyMe(e.getErrorMessage(t.t0)), (e.need_support = !0);
                          case 15:
                            t.next = 19;
                            break;
                          case 17:
                            (e.need_support = !0), console.log("No token");
                          case 19:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[1, 11]]
                  );
                })
              )();
            },
            checkEmailForm: function (e) {
              if (
                ((this.email_errors = []),
                (this.form.name && -1 !== this.form.name.indexOf(" ")) || this.email_errors.push("First and last name please."),
                (this.form.email && this.validEmail(this.form.email)) || this.email_errors.push("Email does not look right."),
                (!this.form.password || this.form.password.length < 8) && this.email_errors.push("Password needs to be least 8 characters."),
                !this.email_errors.length)
              )
                return !0;
            },
            checkMagicForm: function (e) {
              if (
                ((this.magic_errors = []),
                this.form.code || this.magic_errors.push("Please enter the code to verify your email."),
                this.form.code && this.form.code.length < 4 && this.magic_errors.push("The code given is not right."),
                !this.magic_errors.length)
              )
                return !0;
            },
            checkCouponForm: function (e) {
              if (
                ((this.coupon_errors = []),
                this.form.coupon || this.coupon_errors.push("Please enter the access code."),
                this.form.coupon && this.form.coupon.length < 6 && this.coupon_errors.push("The code given is not right."),
                !this.coupon_errors.length)
              )
                return !0;
            },
            validEmail: function (e) {
              var t =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return t.test(e);
            },
            sendCode: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((e.isSending = !0), (t.prev = 1), !e.checkEmailForm())) {
                              t.next = 8;
                              break;
                            }
                            return console.log("Sending Code"), (t.next = 6), Z(e.token, e.form.name, e.form.email, e.form.password);
                          case 6:
                            t.sent, (e.show_form = "magic_code");
                          case 8:
                            t.next = 14;
                            break;
                          case 10:
                            (t.prev = 10), (t.t0 = t["catch"](1)), e.notifyMe(e.getErrorMessage(t.t0)), (e.show_form = "email");
                          case 14:
                            e.isSending = !1;
                          case 15:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[1, 10]]
                  );
                })
              )();
            },
            verifyCode: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  var n;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((e.isSending = !0), (t.prev = 1), !e.checkMagicForm())) {
                              t.next = 8;
                              break;
                            }
                            return console.log("Verifying Code"), (t.next = 6), te(e.token, e.form.email, e.form.code);
                          case 6:
                            (n = t.sent),
                              n.enrollment &&
                                ((e.enrollment = n.enrollment),
                                n.enrollment.is_processed
                                  ? (console.log("Enrollment is already processed. Redirecting to Already Enrolled page."),
                                    (e.show_form = "already_enrolled"))
                                  : (console.log("Enrollment is not yet processed. Redirecting to Checkout page."), (e.show_form = "checkout")));
                          case 8:
                            t.next = 13;
                            break;
                          case 10:
                            (t.prev = 10),
                              (t.t0 = t["catch"](1)),
                              404 === t.t0.response.status
                                ? e.magic_errors.push("The code given is not right.")
                                : e.notifyMe(e.getErrorMessage(t.t0));
                          case 13:
                            e.isSending = !1;
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[1, 10]]
                  );
                })
              )();
            },
            verifyCoupon: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  var n, r;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((e.isSending = !0), (t.prev = 1), !e.checkCouponForm())) {
                              t.next = 15;
                              break;
                            }
                            if (
                              ((n = e.coupons.find(function (t) {
                                return t === e.form.coupon;
                              })),
                              n)
                            ) {
                              t.next = 13;
                              break;
                            }
                            return console.log("Verifying Coupon"), (t.next = 8), re(e.token, e.form.email, e.form.coupon);
                          case 8:
                            (r = t.sent),
                              console.log("Verifying Coupon Response", r),
                              r.message &&
                                (console.log(r.message),
                                "PROCESSED" === r.status
                                  ? (e.show_form = "thank_you")
                                  : "MAX" === r.status
                                    ? e.coupon_errors.push("That code has already been activated. Please contact your seller.")
                                    : "OK" === r.status && (e.coupons.push(e.form.coupon), (e.form.coupon = ""))),
                              (t.next = 15);
                            break;
                          case 13:
                            (e.form.coupon = ""), console.log("Coupon already added");
                          case 15:
                            t.next = 20;
                            break;
                          case 17:
                            (t.prev = 17),
                              (t.t0 = t["catch"](1)),
                              404 === t.t0.response.status
                                ? e.coupon_errors.push("The code given is not right.")
                                : e.notifyMe(e.getErrorMessage(t.t0));
                          case 20:
                            e.isSending = !1;
                          case 21:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[1, 17]]
                  );
                })
              )();
            },
            checkout: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  var n;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          try {
                            (n = Stripe(e.stripe_key)),
                              n
                                .redirectToCheckout({
                                  lineItems: e.getLineItems(),
                                  mode: "payment",
                                  successUrl: e.stripe_success_url,
                                  cancelUrl: location.toString(),
                                  customerEmail: e.form.email,
                                  clientReferenceId: e.enrollment.id.toString(),
                                })
                                .then(function (e) {
                                  if (e.error) {
                                    var t = document.getElementById("error-message");
                                    t.textContent = e.error.message;
                                  }
                                }),
                              e.notifyMe("Checking out", "success");
                          } catch (r) {
                            e.notifyMe(e.getErrorMessage(r));
                          }
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
          },
          mounted: function () {
            this.getToken();
          },
        }),
      fn = hn,
      gn = (n("db2e"), Object(p["a"])(fn, dn, mn, !1, null, null, null)),
      vn = gn.exports,
      bn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.isDataLoaded
          ? n(
              "b-container",
              { staticClass: "mt-2", staticStyle: { width: "378px" } },
              [
                this.lti_course
                  ? n(
                      "b-card",
                      { staticClass: "text-center", attrs: { header: this.lti_course.context_title } },
                      [
                        n(
                          "b-card-text",
                          { staticClass: "text-left" },
                          [
                            n("b", [e._v(" Teacher(s) ")]),
                            e._l(this.lti_course.teachers, function (t) {
                              return n("div", { key: t.id }, [e._v(" " + e._s(t.display_name) + " ")]);
                            }),
                            n("div", { staticClass: "mt-2" }, [n("b", [e._v(" Unit(s) ")])]),
                            n(
                              "p",
                              e._l(this.lti_course.products, function (t) {
                                return n("span", { key: t.product_code }, [e._v(" " + e._s(t.name) + " ")]);
                              }),
                              0
                            ),
                            "email" === e.show_form
                              ? n(
                                  "div",
                                  { staticClass: "mt-3" },
                                  [
                                    n("b", [e._v("Your TWA Account")]),
                                    n(
                                      "b-input-group",
                                      {
                                        staticClass: "mt-2",
                                        scopedSlots: e._u(
                                          [
                                            {
                                              key: "prepend",
                                              fn: function () {
                                                return [n("b-input-group-text", { staticStyle: { width: "105px" } }, [e._v(" First Name ")])];
                                              },
                                              proxy: !0,
                                            },
                                          ],
                                          null,
                                          !1,
                                          2577145453
                                        ),
                                      },
                                      [
                                        n("b-form-input", {
                                          attrs: { name: "first_name", type: "text" },
                                          model: {
                                            value: e.form.first_name,
                                            callback: function (t) {
                                              e.$set(e.form, "first_name", t);
                                            },
                                            expression: "form.first_name",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n(
                                      "b-input-group",
                                      {
                                        staticClass: "mt-2",
                                        scopedSlots: e._u(
                                          [
                                            {
                                              key: "prepend",
                                              fn: function () {
                                                return [n("b-input-group-text", { staticStyle: { width: "105px" } }, [e._v(" Last Name ")])];
                                              },
                                              proxy: !0,
                                            },
                                          ],
                                          null,
                                          !1,
                                          2632128189
                                        ),
                                      },
                                      [
                                        n("b-form-input", {
                                          attrs: { name: "last_name", type: "text" },
                                          model: {
                                            value: e.form.last_name,
                                            callback: function (t) {
                                              e.$set(e.form, "last_name", t);
                                            },
                                            expression: "form.last_name",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n(
                                      "b-input-group",
                                      {
                                        staticClass: "mt-2",
                                        scopedSlots: e._u(
                                          [
                                            {
                                              key: "prepend",
                                              fn: function () {
                                                return [n("b-input-group-text", { staticStyle: { width: "105px" } }, [e._v(" Email ")])];
                                              },
                                              proxy: !0,
                                            },
                                          ],
                                          null,
                                          !1,
                                          223771324
                                        ),
                                      },
                                      [
                                        n("b-form-input", {
                                          attrs: { name: "email", type: "email" },
                                          model: {
                                            value: e.form.email,
                                            callback: function (t) {
                                              e.$set(e.form, "email", t);
                                            },
                                            expression: "form.email",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n(
                                      "b-input-group",
                                      {
                                        staticClass: "mt-2",
                                        scopedSlots: e._u(
                                          [
                                            {
                                              key: "prepend",
                                              fn: function () {
                                                return [n("b-input-group-text", { staticStyle: { width: "105px" } }, [e._v(" Password ")])];
                                              },
                                              proxy: !0,
                                            },
                                          ],
                                          null,
                                          !1,
                                          351122927
                                        ),
                                      },
                                      [
                                        n("b-form-input", {
                                          attrs: { name: "password", type: "password" },
                                          model: {
                                            value: e.form.password,
                                            callback: function (t) {
                                              e.$set(e.form, "password", t);
                                            },
                                            expression: "form.password",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n(
                                      "b-input-group",
                                      {
                                        staticClass: "mt-2",
                                        scopedSlots: e._u(
                                          [
                                            {
                                              key: "prepend",
                                              fn: function () {
                                                return [n("b-input-group-text", { staticStyle: { width: "105px" } }, [e._v(" Confirm ")])];
                                              },
                                              proxy: !0,
                                            },
                                          ],
                                          null,
                                          !1,
                                          1882159810
                                        ),
                                      },
                                      [
                                        n("b-form-input", {
                                          attrs: { name: "confirm_password", type: "password" },
                                          model: {
                                            value: e.form.confirm_password,
                                            callback: function (t) {
                                              e.$set(e.form, "confirm_password", t);
                                            },
                                            expression: "form.confirm_password",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n("p", { staticClass: "text-right text-muted small" }, [
                                      e._v("New here? Returning?"),
                                      n("br"),
                                      e._v(" Either way, type your password here"),
                                    ]),
                                    n(
                                      "ul",
                                      { staticClass: "mt-3" },
                                      e._l(e.email_errors, function (t) {
                                        return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                                      }),
                                      0
                                    ),
                                    n("vue-recaptcha", {
                                      ref: "recaptcha",
                                      attrs: { sitekey: e.site_key },
                                      on: { verify: e.onCaptchaVerified, expired: e.onRecaptchaExpired },
                                    }),
                                    n(
                                      "b-button",
                                      {
                                        staticClass: "mt-3",
                                        attrs: { block: "", variant: "success", disabled: !e.isCaptchaVerified },
                                        on: { click: e.sendPin },
                                      },
                                      [
                                        e._v("Verify Email "),
                                        this.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : e._e(),
                            "magic_code" === e.show_form
                              ? n(
                                  "div",
                                  [
                                    n("h5", { staticClass: "mt-3" }, [e._v("Check your email")]),
                                    n("span", { staticClass: "text-muted" }, [e._v("Sent to " + e._s(e.form.email))]),
                                    n(
                                      "b-input-group",
                                      { staticClass: "my-3" },
                                      [
                                        n(
                                          "b-input-group-prepend",
                                          { attrs: { "is-text": "" } },
                                          [n("font-awesome-icon", { attrs: { icon: e.icon } })],
                                          1
                                        ),
                                        n("b-input", {
                                          attrs: { placeholder: "pin number", autocomplete: "off" },
                                          model: {
                                            value: e.form.pin_number,
                                            callback: function (t) {
                                              e.$set(e.form, "pin_number", t);
                                            },
                                            expression: "form.pin_number",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n(
                                      "ul",
                                      e._l(e.magic_errors, function (t) {
                                        return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                                      }),
                                      0
                                    ),
                                    n(
                                      "b-button",
                                      { attrs: { block: "", variant: "success" }, on: { click: e.verifyPin } },
                                      [
                                        e._v("Verify Pin Number "),
                                        this.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : e._e(),
                            "thank_you" === e.show_form
                              ? n(
                                  "div",
                                  [
                                    n("h3", [e._v("Thank you!")]),
                                    n("b-card-text", [
                                      n("p", [e._v(" Your access has been processed. You should receive a confirmation email shortly. ")]),
                                      n("p", [
                                        e._v(" Come login at "),
                                        n(
                                          "a",
                                          { attrs: { href: e.login_url } },
                                          [e._v(e._s(e.login_url) + " "), n("b-icon", { attrs: { "font-scale": "1", icon: "box-arrow-up-right" } })],
                                          1
                                        ),
                                      ]),
                                    ]),
                                  ],
                                  1
                                )
                              : e._e(),
                            e._e(),
                          ],
                          2
                        ),
                      ],
                      1
                    )
                  : e._e(),
              ],
              1
            )
          : n(
              "b-container",
              { staticStyle: { width: "400px" } },
              [
                n("b-card", { staticClass: "text-center" }, [
                  e.network_error
                    ? n(
                        "div",
                        [
                          n("h3", [e._v("Uh oh!")]),
                          n("br"),
                          n("b-card-text", [n("p", [e._v(" Koko has been playing with the cables again. Sorry! Try again in a few. ")])]),
                        ],
                        1
                      )
                    : e.need_support
                      ? n(
                          "div",
                          [
                            n("h3", [e._v(e._s(e.errorContent.title))]),
                            e.errorContent.subtitle ? n("p", [e._v(e._s(e.errorContent.subtitle))]) : e._e(),
                            n("br"),
                            n("b-card-text", [
                              n("div", { domProps: { innerHTML: e._s(e.errorContent.message) } }),
                              e.errorContent.showFooter ? n("p", [e._v(" We will still be here for you! ")]) : e._e(),
                            ]),
                          ],
                          1
                        )
                      : n(
                          "div",
                          [
                            e._v(" Hang on. Getting info. "),
                            n("b-spinner", {
                              staticClass: "ml-2",
                              staticStyle: { width: "1.5rem", height: "1.5rem" },
                              attrs: { variant: "secondary" },
                            }),
                          ],
                          1
                        ),
                ]),
              ],
              1
            );
      },
      _n = [],
      yn = (n("8a79"), n("e096")),
      wn = {
        components: { VueRecaptcha: yn["a"] },
        data: function () {
          return {
            form: { email: null, password: null, pin_number: null, agreed: "no", coupon: null, recaptcha_response: null },
            email_errors: [],
            magic_errors: [],
            coupon_errors: [],
            isDataLoaded: !1,
            isSending: !1,
            show_form: "email",
            icon: ["fa", "envelope"],
            code: null,
            canvas_course: null,
            lti_course: null,
            canvas_domain: null,
            enrollment: null,
            need_support: !1,
            error_reason: null,
            network_error: !1,
            isCaptchaVerified: !1,
          };
        },
        watch: {
          "form.email": function (e) {
            this.form.email = e.toLowerCase();
          },
        },
        computed: {
          token: function () {
            return this.$route.query.course || null;
          },
          name: function () {
            return this.form.first_name + " " + this.form.last_name;
          },
          email_domain: function () {
            return this.lti_course.lti_consumer.email_domain || null;
          },
          lms_url: function () {
            return "https://learn.truewayasl.com";
          },
          is_live: function () {
            var e = 0;
            return "https://learn.truewayasl.com" === this.lms_url && (e = 1), e;
          },
          site_key: function () {
            return "6LdeY8QpAAAAAKuE8oYXJH6kvbpnYQaUs1n5m_Vt";
          },
          login_url: function () {
            return this.canvas_domain
              ? (console.log("Using canvas domain:", this.canvas_domain), "https://" + this.canvas_domain)
              : (console.log("canvas domain not set."), "");
          },
          errorContent: function () {
            return "join_link_expired" === this.error_reason
              ? {
                  title: "Missed the sign-up window?",
                  subtitle: "Don't worry — we've got you!",
                  message: '<p><strong>Already signed up?</strong> Login here <a href="'
                    .concat(this.login_url, '" target="_blank">')
                    .concat(this.login_url, "</a></p><p><strong>Need to sign up?</strong> Contact your teacher to request an extension.</p>"),
                  showFooter: !1,
                }
              : {
                  title: "Gosh!",
                  message: "<p>We don't recognize your course link. Double check with your teacher? Maybe there's a typo.</p>",
                  showFooter: !0,
                };
          },
        },
        methods: {
          getErrorMessage: function (e) {
            console.log(e);
            var t = e.message;
            return "Network Error" === t && (this.network_error = !0), e.response && (t = e.response.statusText), t;
          },
          notifyMe: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "danger";
            this.$bvToast.toast(e, { title: "Notification", solid: !0, variant: t, autoHideDelay: 2500, appendToast: !0 });
          },
          getCourse: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (e.token) {
                            t.next = 4;
                            break;
                          }
                          return e.setError("no_token"), console.log("No token."), t.abrupt("return");
                        case 4:
                          return (t.prev = 4), (t.next = 7), ae(e.token);
                        case 7:
                          (e.lti_course = t.sent),
                            (n = e.validateCourse(e.lti_course)),
                            n ? e.setError(n) : ((e.need_support = !1), (e.error_reason = null), (e.isDataLoaded = !0)),
                            (t.next = 16);
                          break;
                        case 12:
                          (t.prev = 12), (t.t0 = t["catch"](4)), console.log("Error fetching course:", t.t0), e.handleFetchError(t.t0);
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[4, 12]]
                );
              })
            )();
          },
          validateCourse: function (e) {
            return e.lti_consumer.key.startsWith("twa_")
              ? e.lti_consumer.key.startsWith("twa_") && e.is_expired
                ? "course_expired"
                : 0 === e.products.length
                  ? "no_products"
                  : "available" !== e.workflow_state
                    ? "workflow_not_available"
                    : null
              : "not_twa_hosted";
          },
          handleFetchError: function (e) {
            var t, n, r;
            ((this.need_support = !0), 403 === (null === (t = e.response) || void 0 === t ? void 0 : t.status))
              ? (console.log(e.response),
                (null === (n = e.response.data) || void 0 === n ? void 0 : n.canvas_domain) && (this.canvas_domain = e.response.data.canvas_domain),
                (this.error_reason =
                  "Course join link has expired" === (null === (r = e.response.data) || void 0 === r ? void 0 : r.error)
                    ? "join_link_expired"
                    : "access_forbidden"))
              : ((this.error_reason = "network_error"), this.notifyMe(this.getErrorMessage(e)));
          },
          setError: function (e) {
            (this.need_support = !0), (this.error_reason = e);
          },
          sendPin: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((e.isSending = !0), (t.prev = 1), !e.checkEmailForm())) {
                            t.next = 7;
                            break;
                          }
                          return console.log("Sending Code"), (t.next = 6), Z(e.token, e.name, e.form.email, e.form.password, e.recaptcha_response);
                        case 6:
                          e.show_form = "magic_code";
                        case 7:
                          t.next = 13;
                          break;
                        case 9:
                          (t.prev = 9), (t.t0 = t["catch"](1)), e.notifyMe(e.getErrorMessage(t.t0)), (e.show_form = "email");
                        case 13:
                          e.isSending = !1;
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 9]]
                );
              })
            )();
          },
          verifyPin: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((e.isSending = !0), (t.prev = 1), !e.checkMagicForm())) {
                            t.next = 8;
                            break;
                          }
                          return console.log("Verifying Code"), (t.next = 6), te(e.token, e.form.email, e.form.pin_number);
                        case 6:
                          (n = t.sent), n.lti_enrollment && e.$router.push({ path: "/pay", query: { token: n.lti_enrollment.token } });
                        case 8:
                          t.next = 13;
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t["catch"](1)),
                            404 === t.t0.response.status ? e.magic_errors.push("The code given is not right.") : e.notifyMe(e.getErrorMessage(t.t0));
                        case 13:
                          e.isSending = !1;
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 10]]
                );
              })
            )();
          },
          checkEmailForm: function () {
            (this.email_errors = []),
              (!this.form.first_name || this.form.first_name.length < 2) && this.email_errors.push("First name needs to be at least 2 letters"),
              (!this.form.last_name || this.form.last_name.length < 2) && this.email_errors.push("Last name needs to be at least 2 letters"),
              (this.form.email && this.validateEmail(this.form.email)) || this.email_errors.push("Email does not look right."),
              this.email_domain &&
                !this.form.email.endsWith("@" + this.email_domain) &&
                this.email_errors.push("@" + this.email_domain + " is required"),
              (!this.form.password || this.form.password.length < 8 || this.form.password.length > 64) &&
                this.email_errors.push("Password needs to be between 8 to 64 characters in length."),
              (this.form.confirm_password && this.form.password === this.form.confirm_password) || this.email_errors.push("Passwords must match.");
            var e = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
              t = e.test(this.form.password);
            if (
              (t ||
                this.email_errors.push(
                  "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
                ),
              (e = /^(?!(.*123|.*abc|.*password)).*$/),
              (t = e.test(this.form.password)),
              t || this.email_errors.push("Password must not contain common patterns (123, abc, password)."),
              (this.form.password.toLowerCase().includes(this.form.first_name.toLowerCase()) ||
                this.form.password.toLowerCase().includes(this.form.last_name.toLowerCase())) &&
                this.email_errors.push("Password cannot include your first or last name."),
              !this.email_errors.length)
            )
              return !0;
          },
          checkMagicForm: function () {
            if (
              ((this.magic_errors = []),
              this.form.pin_number || this.magic_errors.push("Please enter the pin number to verify your email."),
              this.form.pin_number && this.form.pin_number.length < 4 && this.magic_errors.push("The pin number given is not right."),
              !this.magic_errors.length)
            )
              return !0;
          },
          validateEmail: function (e) {
            var t =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return t.test(e);
          },
          onCaptchaVerified: function (e) {
            e && ((this.recaptcha_response = e), (this.isCaptchaVerified = !0));
          },
          onRecaptchaExpired: function () {
            this.isCaptchaVerified = !1;
          },
        },
        mounted: function () {
          this.getCourse();
        },
      },
      kn = wn,
      Sn = Object(p["a"])(kn, bn, _n, !1, null, null, null),
      Cn = Sn.exports,
      xn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticStyle: { width: "400px" } },
          [
            n(
              "b-card",
              { staticClass: "text-center" },
              [
                n("h3", [e._v("Thank you!")]),
                n("br"),
                n("b-card-text", [
                  n("p", [e._v(" Your payment has been processed. You should receive a confirmation email shortly. ")]),
                  n("p", [n("b", [n("a", { attrs: { href: e.learn_link } }, [e._v("Come join the course!")])])]),
                ]),
              ],
              1
            ),
          ],
          1
        );
      },
      An = [],
      Pn = {
        name: "course_list",
        computed: {
          learn_link: function () {
            var e = this.$route.query.course_id;
            return "https://learn.truewayasl.com/courses/" + e;
          },
        },
      },
      En = Pn,
      Tn = Object(p["a"])(En, xn, An, !1, null, null, null),
      Rn = Tn.exports,
      In = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticStyle: { width: "380px" } },
          [
            n(
              "b-card",
              { staticStyle: { height: "350px" }, attrs: { header: "Login" } },
              [
                n(
                  "b-form",
                  { on: { submit: e.onSubmit } },
                  [
                    n("transition", { attrs: { name: "slide-fade", mode: "out-in" } }, [
                      e.show_target
                        ? n(
                            "div",
                            { key: "email" },
                            [
                              n("br"),
                              "sms" === e.connection
                                ? n("small", { staticClass: "text-muted" }, [
                                    e._v(" Enter your mobile or "),
                                    n(
                                      "a",
                                      {
                                        attrs: { href: "" },
                                        on: {
                                          click: function (t) {
                                            t.preventDefault(), (e.connection = "email");
                                          },
                                        },
                                      },
                                      [e._v("use your email")]
                                    ),
                                  ])
                                : e._e(),
                              "email" === e.connection
                                ? n("small", { staticClass: "text-muted" }, [
                                    e._v(" Enter your email or "),
                                    n(
                                      "a",
                                      {
                                        attrs: { href: "" },
                                        on: {
                                          click: function (t) {
                                            t.preventDefault(), (e.connection = "sms");
                                          },
                                        },
                                      },
                                      [e._v("use your mobile")]
                                    ),
                                  ])
                                : e._e(),
                              n(
                                "b-input-group",
                                { staticClass: "my-3" },
                                [
                                  n(
                                    "b-input-group-prepend",
                                    { attrs: { "is-text": "" } },
                                    [n("font-awesome-icon", { attrs: { "fixed-width": "", icon: e.icon } })],
                                    1
                                  ),
                                  n("b-input", {
                                    attrs: { name: "target", placeholder: e.placeholder, autofocus: "" },
                                    model: {
                                      value: e.target,
                                      callback: function (t) {
                                        e.target = t;
                                      },
                                      expression: "target",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : n(
                            "div",
                            { key: "code" },
                            [
                              n("small", { staticClass: "text-muted" }, [e._v(" A message with the code has been sent to " + e._s(e.target) + ".")]),
                              n(
                                "b-input-group",
                                { staticClass: "my-3" },
                                [
                                  n("b-input-group-prepend", { attrs: { "is-text": "" } }, [n("font-awesome-icon", { attrs: { icon: e.icon } })], 1),
                                  n("b-input", {
                                    attrs: { placeholder: "your code", autocomplete: "one-time-code", autofocus: "" },
                                    model: {
                                      value: e.code,
                                      callback: function (t) {
                                        e.code = t;
                                      },
                                      expression: "code",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                    ]),
                    e.show_target
                      ? n("vue-recaptcha", {
                          ref: "recaptcha",
                          attrs: { sitekey: e.site_key },
                          on: { verify: e.onCaptchaVerified, expired: e.onRecaptchaExpired },
                        })
                      : e._e(),
                    e.show_target
                      ? e._e()
                      : n("b-button", { staticClass: "mr-2 mt-3", attrs: { variant: "outline-primary" }, on: { click: e.goBack } }, [e._v(" Back")]),
                    n(
                      "b-button",
                      { staticClass: "mt-3", attrs: { variant: "primary", disabled: !e.isCaptchaVerified }, on: { click: e.onSubmit } },
                      [e._v("Submit "), this.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e()],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      On = [],
      Dn =
        (n("466d"),
        {
          components: { VueRecaptcha: yn["a"] },
          data: function () {
            return {
              show_target: !0,
              target: null,
              code: null,
              isSending: !1,
              isAuthenticated: !1,
              profile: {},
              connection: "email",
              isCaptchaVerified: !1,
              recaptcha_response: null,
            };
          },
          watch: {
            target: function (e) {
              "sms" === this.connection && e && e.length > 2 && !e.match(/^\+1/) && (this.target = "+1" + e);
            },
          },
          computed: {
            icon: function () {
              return "sms" === this.connection ? ["fa", "mobile-alt"] : ["fa", "envelope"];
            },
            placeholder: function () {
              return "sms" === this.connection ? "+15551231234" : "yours@example.com";
            },
            site_key: function () {
              return "6LdeY8QpAAAAAKuE8oYXJH6kvbpnYQaUs1n5m_Vt";
            },
          },
          methods: {
            goBack: function () {
              (this.code = null), (this.show_target = !0), (this.isCaptchaVerified = !1);
            },
            onSubmit: function (e) {
              e.preventDefault(),
                this.isCaptchaVerified
                  ? !0 === this.show_target
                    ? this.createMagic()
                    : this.login()
                  : this.$bvToast.toast("Captcha Not Verified", {
                      title: "Alert",
                      solid: !0,
                      variant: "danger",
                      autoHideDelay: 5e3,
                      appendToast: !0,
                    });
            },
            createMagic: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (e.isSending = !0), (t.prev = 1), (t.next = 4), e.$auth.createMagic(e.connection, e.target, e.recaptcha_response);
                          case 4:
                            (e.show_target = !1), (t.next = 11);
                            break;
                          case 7:
                            (t.prev = 7),
                              (t.t0 = t["catch"](1)),
                              e.$bvToast.toast(t.t0.response.statusText, {
                                title: "Alert",
                                solid: !0,
                                variant: "danger",
                                autoHideDelay: 5e3,
                                appendToast: !0,
                              }),
                              (e.show_target = !0);
                          case 11:
                            e.isSending = !1;
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[1, 7]]
                  );
                })
              )();
            },
            login: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e.isSending = !0),
                            (t.next = 3),
                            e.$auth.login(e.connection, e.target, e.code).catch(function (t) {
                              e.$bvToast.toast(t.response.statusText, {
                                title: "Alert",
                                solid: !0,
                                variant: "danger",
                                autoHideDelay: 5e3,
                                appendToast: !0,
                              });
                            })
                          );
                        case 3:
                          (e.isSending = !1), e.$router.push({ path: e.$route.query.redirect || "/course" });
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            handleLoginEvent: function (e) {
              (this.isAuthenticated = e.loggedIn), (this.profile = e.profile);
            },
            onCaptchaVerified: function (e) {
              e && ((this.recaptcha_response = e), (this.isCaptchaVerified = !0));
            },
            onRecaptchaExpired: function () {
              this.isCaptchaVerified = !1;
            },
          },
        }),
      Mn = Dn,
      Ln = (n("d6db"), Object(p["a"])(Mn, In, On, !1, null, null, null)),
      Nn = Ln.exports,
      jn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticStyle: { width: "600px" } },
          [
            n(
              "b-card",
              [
                n("h3", [e._v("Check Access Code")]),
                n("br"),
                n(
                  "b-card-text",
                  [
                    n(
                      "b-input-group",
                      { attrs: { prepend: "Access Code" } },
                      [
                        n("b-form-input", {
                          attrs: { type: "text" },
                          on: {
                            keyup: function (t) {
                              return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.checkCoupon(t);
                            },
                          },
                          model: {
                            value: e.form.coupon,
                            callback: function (t) {
                              e.$set(e.form, "coupon", t);
                            },
                            expression: "form.coupon",
                          },
                        }),
                        n(
                          "b-input-group-append",
                          [
                            n(
                              "b-button",
                              { attrs: { variant: "success" }, on: { click: e.checkCoupon } },
                              [
                                e._v("Submit "),
                                e.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    n(
                      "ul",
                      { staticClass: "mt-3" },
                      e._l(e.coupon_errors, function (t) {
                        return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                      }),
                      0
                    ),
                    n(
                      "ul",
                      e._l(e.coupons, function (t) {
                        return n("li", { key: t.id }, [
                          n(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function (n) {
                                  return n.preventDefault(), e.selectCoupon(t);
                                },
                              },
                            },
                            [e._v(e._s(t.coupon_code))]
                          ),
                        ]);
                      }),
                      0
                    ),
                    e.coupon
                      ? n(
                          "div",
                          [
                            n("div", [
                              e.coupon.product.product_code.match(/K12(?!D)|Pilot/)
                                ? n(
                                    "ul",
                                    {
                                      staticClass: "text-success font-weight-bold",
                                      staticStyle: { "list-style-type": "none", margin: "0", padding: "0" },
                                    },
                                    [
                                      n("li", [e._v("Access Code: " + e._s(e.coupon.coupon_code))]),
                                      n("li", [e._v("Product: " + e._s(e.coupon.product.product_code))]),
                                      n("li", [
                                        e._v(
                                          "Usage: " +
                                            e._s(e.uniques.length + e.enrollment_uniques.length) +
                                            "/" +
                                            e._s(e.coupon.max_usage) +
                                            " emails"
                                        ),
                                      ]),
                                      e.coupon.expires_at
                                        ? n("li", [e._v("Valid thru: " + e._s(new Date(e.coupon.expires_at).toLocaleString()))])
                                        : e._e(),
                                    ]
                                  )
                                : n(
                                    "ul",
                                    {
                                      staticClass: "text-success font-weight-bold",
                                      staticStyle: { "list-style-type": "none", margin: "0", padding: "0" },
                                    },
                                    [
                                      n("li", [e._v("Access Code: " + e._s(e.coupon.coupon_code))]),
                                      n("li", [e._v("Product: " + e._s(e.coupon.product.product_code))]),
                                      n("li", [
                                        e._v(
                                          "Usage: " +
                                            e._s(e.coupon.lti_enrollments.length + e.coupon.memberships.length) +
                                            "/" +
                                            e._s(e.coupon.max_usage) +
                                            " enrollments"
                                        ),
                                      ]),
                                      e.coupon.expires_at
                                        ? n("li", [e._v("Valid thru: " + e._s(new Date(e.coupon.expires_at).toLocaleString()))])
                                        : e._e(),
                                    ]
                                  ),
                            ]),
                            n("br"),
                            n(
                              "b-tabs",
                              { attrs: { "content-class": "mt-3" } },
                              [
                                n("b-tab", { attrs: { title: "Enrollments" } }, [
                                  n("div", { staticClass: "mb-3" }, [
                                    e._v(
                                      " Enrollments (" +
                                        e._s(
                                          e.coupon.lti_enrollments.filter(function (e) {
                                            return e.is_processed;
                                          }).length
                                        ) +
                                        "/" +
                                        e._s(e.coupon.lti_enrollments.length) +
                                        ") "
                                    ),
                                    e.coupon.lti_enrollments.length
                                      ? n(
                                          "div",
                                          [
                                            n("b-table", {
                                              attrs: {
                                                bordered: !0,
                                                small: !0,
                                                items: e.coupon.lti_enrollments,
                                                fields: e.lti_fields,
                                                "thead-class": "d-none",
                                              },
                                              scopedSlots: e._u(
                                                [
                                                  {
                                                    key: "cell(email)",
                                                    fn: function (t) {
                                                      return [
                                                        t.item.is_processed
                                                          ? n(
                                                              "a",
                                                              {
                                                                staticClass: "text-success font-weight-bold",
                                                                staticStyle: { "max-width": "350px", "word-break": "break-word" },
                                                                attrs: { href: "/course/" + t.item.context_id },
                                                              },
                                                              [e._v(e._s(t.value))]
                                                            )
                                                          : n(
                                                              "a",
                                                              {
                                                                staticClass: "text-muted",
                                                                staticStyle: { "max-width": "350px", "word-break": "break-word" },
                                                                attrs: { href: "/course/" + t.item.context_id },
                                                              },
                                                              [e._v(e._s(t.value))]
                                                            ),
                                                      ];
                                                    },
                                                  },
                                                  {
                                                    key: "cell(updated_at)",
                                                    fn: function (t) {
                                                      return [
                                                        t.item.is_processed
                                                          ? n(
                                                              "div",
                                                              { staticClass: "text-success font-weight-bold", staticStyle: { width: "150px" } },
                                                              [e._v(e._s(t.value))]
                                                            )
                                                          : n("div", { staticClass: "text-muted", staticStyle: { width: "150px" } }),
                                                      ];
                                                    },
                                                  },
                                                ],
                                                null,
                                                !1,
                                                3329474880
                                              ),
                                            }),
                                          ],
                                          1
                                        )
                                      : e._e(),
                                  ]),
                                  n("div", [
                                    e._v(
                                      " LTI 1.3 Enrollments (" +
                                        e._s(
                                          e.coupon.memberships.filter(function (t) {
                                            return t.processed_at != e.nil;
                                          }).length
                                        ) +
                                        "/" +
                                        e._s(e.coupon.memberships.length) +
                                        ") "
                                    ),
                                    e.coupon.memberships.length
                                      ? n(
                                          "div",
                                          [
                                            n("b-table", {
                                              attrs: {
                                                bordered: !0,
                                                small: !0,
                                                items: e.coupon.memberships,
                                                fields: e.membership_fields,
                                                "thead-class": "d-none",
                                              },
                                              scopedSlots: e._u(
                                                [
                                                  {
                                                    key: "cell(email)",
                                                    fn: function (t) {
                                                      return [
                                                        t.item.processed_at != e.nil
                                                          ? n(
                                                              "a",
                                                              {
                                                                staticClass: "text-success font-weight-bold",
                                                                staticStyle: { "max-width": "350px", "word-break": "break-word" },
                                                                attrs: { href: "/activate_course/" + t.item.token },
                                                              },
                                                              [e._v(e._s(t.value))]
                                                            )
                                                          : n(
                                                              "a",
                                                              {
                                                                staticClass: "text-muted",
                                                                staticStyle: { "max-width": "350px", "word-break": "break-word" },
                                                                attrs: { href: "/activate_course/" + t.item.token },
                                                              },
                                                              [e._v(e._s(t.value))]
                                                            ),
                                                      ];
                                                    },
                                                  },
                                                  {
                                                    key: "cell(processed_at)",
                                                    fn: function (t) {
                                                      return [
                                                        t.item.processed_at != e.nil
                                                          ? n(
                                                              "div",
                                                              { staticClass: "text-success font-weight-bold", staticStyle: { width: "150px" } },
                                                              [e._v(e._s(t.value))]
                                                            )
                                                          : n("div", { staticClass: "text-muted", staticStyle: { width: "150px" } }),
                                                      ];
                                                    },
                                                  },
                                                ],
                                                null,
                                                !1,
                                                3405136447
                                              ),
                                            }),
                                          ],
                                          1
                                        )
                                      : e._e(),
                                  ]),
                                ]),
                                e.coupon.lti_enrollments.length || e.coupon.memberships.length
                                  ? n("b-tab", { attrs: { title: "Emails" } }, [
                                      e.coupon.lti_enrollments.length
                                        ? n("div", { staticClass: "mb-3" }, [
                                            e._v(" Enrollments "),
                                            n("div", [
                                              n(
                                                "ul",
                                                e._l(e.uniques, function (t) {
                                                  return n("li", { key: t.id, staticStyle: { "list-style": "none" } }, [
                                                    n("span", [e._v(e._s(t.email))]),
                                                  ]);
                                                }),
                                                0
                                              ),
                                            ]),
                                          ])
                                        : e._e(),
                                      e.coupon.memberships.length
                                        ? n("div", [
                                            e._v(" LTI 1.3 Enrollments "),
                                            n("div", [
                                              n(
                                                "ul",
                                                e._l(e.enrollment_uniques, function (t) {
                                                  return n("li", { key: t.id, staticStyle: { "list-style": "none" } }, [
                                                    n("span", [e._v(e._s(t.email))]),
                                                  ]);
                                                }),
                                                0
                                              ),
                                            ]),
                                          ])
                                        : e._e(),
                                    ])
                                  : e._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : e._e(),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Wn = [],
      Un =
        (n("4de4"),
        n("c740"),
        {
          data: function () {
            return {
              form: { coupon: this.$route.params.code },
              isSending: !1,
              coupon_errors: [],
              coupon: null,
              coupons: [],
              lti_fields: [
                { key: "email", label: "Email" },
                { key: "updated_at", label: "Processed At", formatter: this.formatDate },
              ],
              membership_fields: [
                { key: "email", label: "Email" },
                { key: "processed_at", label: "Processed At", formatter: this.formatDate },
              ],
            };
          },
          computed: {
            uniques: function () {
              var e = function (e, t, n) {
                var r = function (t) {
                  return t.email === e.email;
                };
                return n.findIndex(r) === t;
              };
              return this.coupon.lti_enrollments.filter(e);
            },
            enrollment_uniques: function () {
              var e = function (e, t, n) {
                var r = function (t) {
                  return t.email === e.email;
                };
                return n.findIndex(r) === t;
              };
              return this.coupon.memberships.filter(e);
            },
          },
          methods: {
            handleLoginEvent: function (e) {
              (this.isAuthenticated = e.loggedIn), (this.profile = e.profile);
            },
            checkCoupon: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e.isSending = !0),
                              (e.coupon = null),
                              (e.coupons = null),
                              (e.coupon_errors = []),
                              (t.prev = 4),
                              (t.next = 7),
                              me(e.form.coupon)
                            );
                          case 7:
                            (e.coupons = t.sent), (t.next = 13);
                            break;
                          case 10:
                            (t.prev = 10),
                              (t.t0 = t["catch"](4)),
                              t.t0.response && 404 === t.t0.response.status
                                ? e.coupon_errors.push("Access code not found")
                                : t.t0.response && 500 === t.t0.response.status
                                  ? e.coupon_errors.push("Internal Server Error")
                                  : console.log(t.t0);
                          case 13:
                            e.isSending = !1;
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[4, 10]]
                  );
                })
              )();
            },
            formatDate: function (e) {
              var t = new Date(e),
                n = { year: "numeric", month: "2-digit", day: "2-digit" },
                r = t.toLocaleString("en-US", n);
              return r;
            },
            selectCoupon: function (e) {
              (this.coupon = e),
                (this.coupon.lti_enrollments = this.coupon.lti_enrollments.sort(function (e, t) {
                  return e.email > t.email ? 1 : -1;
                }));
            },
          },
        }),
      Fn = Un,
      Bn = Object(p["a"])(Fn, jn, Wn, !1, null, null, null),
      Hn = Bn.exports,
      zn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticStyle: { width: "600px" } },
          [
            n(
              "b-card",
              [
                n("h3", [e._v("Activate 1.1 Course")]),
                n("br"),
                n(
                  "b-card-text",
                  [
                    n(
                      "b-input-group",
                      { attrs: { prepend: "Identifier" } },
                      [
                        n("b-form-input", {
                          attrs: { type: "text" },
                          on: {
                            keyup: function (t) {
                              return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.checkCourse(t);
                            },
                          },
                          model: {
                            value: e.form.context_id,
                            callback: function (t) {
                              e.$set(e.form, "context_id", t);
                            },
                            expression: "form.context_id",
                          },
                        }),
                        n(
                          "b-input-group-append",
                          [
                            n(
                              "b-button",
                              { attrs: { variant: "success" }, on: { click: e.checkCourse } },
                              [
                                e._v("Submit "),
                                e.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    n(
                      "ul",
                      { staticClass: "mt-3" },
                      e._l(e.course_errors, function (t) {
                        return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                      }),
                      0
                    ),
                    e.courses
                      ? n(
                          "div",
                          [
                            n(
                              "b-tabs",
                              e._l(e.courses, function (t, r) {
                                return n(
                                  "b-tab",
                                  { key: t.id, attrs: { title: "asl.instructure.com" === t.canvas_domain ? "Premium" : "Basic" } },
                                  [
                                    n("br"),
                                    t.products.length && t.lti_consumer.key.startsWith("twa_")
                                      ? n("p", [
                                          e._v(" Join Link: "),
                                          n("span", { staticClass: "mr-2", staticStyle: { "user-select": "all" } }, [e._v(e._s(e.join_url(r)))]),
                                          n(
                                            "a",
                                            { attrs: { href: e.join_url(r), target: "_blank" } },
                                            [n("b-icon", { attrs: { "font-scale": "1.2", icon: "box-arrow-up-right" } })],
                                            1
                                          ),
                                        ])
                                      : e._e(),
                                    e._v(" CID: " + e._s(t.canvas_course_id)),
                                    n("br"),
                                    e._v(" Name: " + e._s(t.context_title)),
                                    n("br"),
                                    e._v(" Code: " + e._s(t.context_label)),
                                    n("br"),
                                    e._v(" Domain: " + e._s(t.canvas_domain)),
                                    n("br"),
                                    e._v(" State: " + e._s(t.workflow_state)),
                                    n("br"),
                                    t.lti_consumer.key.startsWith("twa_")
                                      ? n("div", [
                                          t.term_info && (t.term_info.start_at || t.term_info.end_at)
                                            ? n("div", [
                                                e._v(
                                                  " Term Date: " +
                                                    e._s(t.term_info.start_at || "whenever") +
                                                    " - " +
                                                    e._s(t.term_info.end_at || "whenever")
                                                ),
                                                n("br"),
                                              ])
                                            : e._e(),
                                          n("br"),
                                          n(
                                            "div",
                                            { staticClass: "d-flex align-items-center my-2" },
                                            [
                                              n("span", { staticClass: "mr-2" }, [e._v("Expires:")]),
                                              n("b-form-datepicker", {
                                                staticClass: "w-50",
                                                attrs: { min: e.today },
                                                model: {
                                                  value: e.form.expires_at[r],
                                                  callback: function (t) {
                                                    e.$set(e.form.expires_at, r, t);
                                                  },
                                                  expression: "form.expires_at[index]",
                                                },
                                              }),
                                              n(
                                                "b-button",
                                                {
                                                  staticClass: "ml-2",
                                                  attrs: { size: "sm", variant: "outline-secondary" },
                                                  on: {
                                                    click: function (t) {
                                                      return e.clearExpiryDate(r);
                                                    },
                                                  },
                                                },
                                                [e._v(" Clear ")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ])
                                      : e._e(),
                                    n(
                                      "div",
                                      { staticClass: "d-flex align-items-center my-1" },
                                      [
                                        n("span", { staticClass: "mr-2" }, [e._v("WTS Access:")]),
                                        n(
                                          "b-form-checkbox",
                                          {
                                            attrs: { switch: "" },
                                            model: {
                                              value: e.form.allows_wts[r],
                                              callback: function (t) {
                                                e.$set(e.form.allows_wts, r, t);
                                              },
                                              expression: "form.allows_wts[index]",
                                            },
                                          },
                                          [e._v(" " + e._s(e.form.allows_wts[r] ? "Enabled" : "Disabled") + " ")]
                                        ),
                                      ],
                                      1
                                    ),
                                    n("br"),
                                    e._v(" School: " + e._s(t.lti_consumer.name) + " ("),
                                    n("router-link", { attrs: { to: "/manage_consumer?key=" + t.lti_consumer.key } }, [
                                      e._v(e._s(t.lti_consumer.key)),
                                    ]),
                                    e._v(")"),
                                    n("br"),
                                    e._v(" Accepts Payment: " + e._s(t.lti_consumer.accepts_payment ? "Enabled" : "Disabled")),
                                    n("br"),
                                    e._v(" Accepts Access Code: " + e._s(t.lti_consumer.accepts_access_code ? "Enabled" : "Disabled")),
                                    n("br"),
                                    n("br"),
                                    e._v(" Teacher(s): "),
                                    e._l(t.teachers, function (t) {
                                      return n("div", { key: t.id }, [e._v(" " + e._s(t.display_name) + " ")]);
                                    }),
                                    n("br"),
                                    e._v(" Products: "),
                                    n("span", { staticClass: "text-success font-weight-bold" }, [
                                      e._v(
                                        e._s(
                                          t.products
                                            .map(function (e) {
                                              return e.product_code;
                                            })
                                            .join(", ")
                                        )
                                      ),
                                    ]),
                                    n("b-form-select", {
                                      staticClass: "mt-2 mb-2",
                                      attrs: { options: e.products_options, multiple: "", "select-size": 12 },
                                      model: {
                                        value: e.form.selected_products[r],
                                        callback: function (t) {
                                          e.$set(e.form.selected_products, r, t);
                                        },
                                        expression: "form.selected_products[index]",
                                      },
                                    }),
                                    t
                                      ? n(
                                          "b-button",
                                          {
                                            staticClass: "mt-2",
                                            attrs: { size: "sm", text: "Button", variant: "primary", disabled: e.is_button_disabled(r) },
                                            on: {
                                              click: function (t) {
                                                return e.setProducts(r);
                                              },
                                            },
                                          },
                                          [e._v(" Change ")]
                                        )
                                      : e._e(),
                                    n("br"),
                                    n("br"),
                                    e.activation_histories[r]
                                      ? n(
                                          "div",
                                          [
                                            e._v(" Activation History: "),
                                            n("b-table", { attrs: { bordered: !0, small: !0, items: e.activation_histories[r] } }),
                                          ],
                                          1
                                        )
                                      : e._e(),
                                  ],
                                  2
                                );
                              }),
                              1
                            ),
                          ],
                          1
                        )
                      : e._e(),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Yn = [],
      Vn =
        (n("a15b"),
        n("45fc"),
        n("07ac"),
        {
          data: function () {
            return {
              form: {
                context_id: this.$route.params.context_id,
                selected_products: {},
                allows_wts: {},
                accepts_payment: {},
                accepts_access_code: {},
                expires_at: {},
                term_start_date: {},
                term_end_date: {},
              },
              isSending: !1,
              course_errors: [],
              courses: [],
              activations: [],
              activation_histories: {},
              today: new Date().toISOString().split("T")[0],
            };
          },
          computed: {
            products: function () {
              return M.query()
                .orderBy("name")
                .get()
                .filter(function (e) {
                  return "zfree" !== e.name.toLowerCase();
                });
            },
            products_options: function () {
              return this.products.map(function (e) {
                return { value: e.id, text: e.name + " (" + e.product_code + ") " };
              });
            },
            users: function () {
              return L.query().orderBy("id").get();
            },
          },
          methods: {
            handleLoginEvent: function (e) {
              (this.isAuthenticated = e.loggedIn), (this.profile = e.profile);
            },
            getData: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.prev = 0), (t.next = 3), ie();
                          case 3:
                            return (t.next = 5), ze();
                          case 5:
                            t.next = 11;
                            break;
                          case 7:
                            (t.prev = 7),
                              (t.t0 = t["catch"](0)),
                              e.notifyMe(e.getErrorMessage(t.t0)),
                              t.t0.response && 401 === t.t0.response.status && e.$auth.logOut("Unauthorized.");
                          case 11:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 7]]
                  );
                })
              )();
            },
            is_button_disabled: function (e) {
              var t = this.courses[e],
                n = this.form,
                r = {
                  products:
                    JSON.stringify(n.selected_products[e]) !==
                    JSON.stringify(
                      t.products.map(function (e) {
                        return e.id;
                      })
                    ),
                  wts: n.allows_wts[e] !== t.allows_wts,
                  payment: n.accepts_payment[e] !== t.lti_consumer.accepts_payment,
                  accessCode: n.accepts_access_code[e] !== t.lti_consumer.accepts_access_code,
                  expiry: n.expires_at[e] !== t.expires_at,
                };
              return !Object.values(r).some(function (e) {
                return e;
              });
            },
            join_url: function (e) {
              var t = "https://";
              return "localhost:8080" === location.host && (t = "http://"), t + location.host + "/verify?course=" + this.courses[e].context_id;
            },
            setProducts: function (e) {
              var t = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function n() {
                  var r;
                  return regeneratorRuntime.wrap(function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = t.courses[e]),
                            console.log("Updating", r.context_id, "with products", t.form.selected_products[e].toString()),
                            (r.product_ids = t.form.selected_products[e]),
                            (r.allows_wts = t.form.allows_wts[e]),
                            (r.lti_consumer.accepts_payment = t.form.accepts_payment[e]),
                            (r.lti_consumer.accepts_access_code = t.form.accepts_access_code[e]),
                            (r.expires_at = t.form.expires_at[e]),
                            (n.next = 9),
                            pe(r)
                          );
                        case 9:
                          (t.courses[e] = n.sent), t.$set(t.activations, e, t.courses[e].lti_activations), t.generateActivationHistory(e);
                        case 12:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            checkCourse: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e.isSending = !0),
                              (e.courses = []),
                              (e.course_errors = []),
                              (e.form.selected_products = []),
                              (e.form.allows_wts = []),
                              (e.form.accepts_payment = []),
                              (e.form.accepts_access_code = []),
                              (e.form.expires_at = []),
                              (e.activations = []),
                              (e.activation_histories = {}),
                              (t.prev = 10),
                              (t.next = 13),
                              ce(e.form.context_id)
                            );
                          case 13:
                            (e.courses = t.sent),
                              e.courses && e.courses.length > 0
                                ? e.courses.forEach(function (t, n) {
                                    var r, o;
                                    e.form.selected_products[n] ||
                                      (e.$set(
                                        e.form.selected_products,
                                        n,
                                        t.products.map(function (e) {
                                          return e.id;
                                        })
                                      ),
                                      e.$set(e.form.allows_wts, n, t.allows_wts),
                                      e.$set(e.form.accepts_payment, n, t.lti_consumer.accepts_payment),
                                      e.$set(e.form.accepts_access_code, n, t.lti_consumer.accepts_access_code),
                                      e.$set(e.form.expires_at, n, t.expires_at),
                                      e.$set(e.form.term_start_date, n, null === (r = t.term_info) || void 0 === r ? void 0 : r.start_at),
                                      e.$set(e.form.term_end_date, n, null === (o = t.term_info) || void 0 === o ? void 0 : o.end_at));
                                    e.activations[n] || e.$set(e.activations, n, t.lti_activations), e.generateActivationHistory(n);
                                  })
                                : (e.form.selected_products = []),
                              (t.next = 20);
                            break;
                          case 17:
                            (t.prev = 17),
                              (t.t0 = t["catch"](10)),
                              t.t0.response && 404 === t.t0.response.status
                                ? e.course_errors.push("Course not found")
                                : t.t0.response && 500 === t.t0.response.status
                                  ? e.coupon_errors.push("Internal Server Error")
                                  : console.log(t.t0);
                          case 20:
                            e.isSending = !1;
                          case 21:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[10, 17]]
                  );
                })
              )();
            },
            generateActivationHistory: function (e) {
              var t = this;
              this.$set(this.activation_histories, e, []),
                this.activations[e].forEach(function (n) {
                  var r = "n/a";
                  if (null != n.user_id) {
                    var o = t.users.find(function (e) {
                      return n.user_id === e.id;
                    });
                    o && (r = o.first_name + " " + o.last_name.charAt(0) + ".");
                  }
                  var i = [];
                  n.product_ids &&
                    Array.isArray(n.product_ids) &&
                    (i = n.product_ids
                      .map(function (e) {
                        var n = t.products.find(function (t) {
                          return t.id === e;
                        });
                        return n ? n.product_code : null;
                      })
                      .filter(Boolean)),
                    t.activation_histories[e].push({ date: new Date(n.activated_at).toLocaleString(), products: i.join(","), user: r });
                });
            },
            clearExpiryDate: function (e) {
              var t = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function n() {
                  return regeneratorRuntime.wrap(function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          t.$set(t.form.expires_at, e, null);
                        case 1:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
          },
          mounted: function () {
            this.getData();
          },
        }),
      qn = Vn,
      Gn = Object(p["a"])(qn, zn, Yn, !1, null, null, null),
      $n = Gn.exports,
      Kn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticStyle: { width: "400px" } },
          [
            n(
              "b-card",
              [
                n("h3", [e._v("Process Enrollment")]),
                n("br"),
                n(
                  "b-card-text",
                  [
                    n(
                      "b-input-group",
                      { attrs: { prepend: "Token" } },
                      [
                        n("b-form-input", {
                          attrs: { autocomplete: "off", type: "text" },
                          on: {
                            keyup: function (t) {
                              return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getEnrollment(t);
                            },
                          },
                          model: {
                            value: e.form.token,
                            callback: function (t) {
                              e.$set(e.form, "token", t);
                            },
                            expression: "form.token",
                          },
                        }),
                        n(
                          "b-input-group-append",
                          [
                            n(
                              "b-button",
                              { attrs: { variant: "success" }, on: { click: e.getEnrollment } },
                              [
                                e._v("Submit "),
                                this.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    n(
                      "ul",
                      { staticClass: "mt-3 mb-0" },
                      e._l(e.token_errors, function (t) {
                        return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                      }),
                      0
                    ),
                    e.enrollment
                      ? n("div", [
                          n("b", [e._v("Enrollments:")]),
                          n("ul", { staticClass: "pl-0 pt-2" }, [
                            n("li", { staticStyle: { "list-style": "none" } }, [e._v(e._s(e.enrollment.email))]),
                            n("li", { staticStyle: { "list-style": "none" } }, [
                              n("a", { attrs: { href: "/course/" + e.enrollment.lti_course.context_id } }, [
                                e._v(e._s(e.enrollment.lti_course.context_title)),
                              ]),
                              e.enrollment.is_processed
                                ? n(
                                    "span",
                                    {
                                      directives: [{ name: "b-tooltip", rawName: "v-b-tooltip.hover", modifiers: { hover: !0 } }],
                                      staticClass: "ml-1 badge border border-muted text-success",
                                      attrs: { title: new Date(e.enrollment.updated_at).toLocaleString() },
                                    },
                                    [e._v("p")]
                                  )
                                : e._e(),
                              e.enrollment.is_processed && (e.enrollment.coupons.length > 0 || e.enrollment.stripe_event_id)
                                ? n(
                                    "span",
                                    {
                                      directives: [{ name: "b-tooltip", rawName: "v-b-tooltip.hover", modifiers: { hover: !0 } }],
                                      staticClass: "ml-1 badge border border-secondary text-secondary",
                                      attrs: {
                                        title:
                                          e.enrollment.coupons.length > 0
                                            ? e.enrollment.coupons[0].coupon_code
                                            : e.enrollment.stripe_event_id
                                              ? "stripe"
                                              : "",
                                      },
                                    },
                                    [
                                      e._v(
                                        " " + e._s(e.enrollment.coupons.length > 0 ? "coupon" : e.enrollment.stripe_event_id ? "stripe" : "") + " "
                                      ),
                                    ]
                                  )
                                : e._e(),
                            ]),
                            n("li", { staticStyle: { "list-style": "none" } }, [e._v(" " + e._s(e.enrollment.lti_course.canvas_domain) + " ")]),
                          ]),
                          n("ul", { staticClass: "p-0" }, [
                            e.enrollment.is_processed
                              ? e._e()
                              : n(
                                  "li",
                                  { staticStyle: { "list-style": "none" } },
                                  [
                                    n(
                                      "b-button",
                                      { attrs: { variant: "success", size: "sm" }, on: { click: e.processEnrollment } },
                                      [
                                        e._v("Process "),
                                        this.isProcessing ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                            e.enrollment.is_processed
                              ? n(
                                  "li",
                                  { staticStyle: { "list-style": "none" } },
                                  [
                                    n(
                                      "b-button",
                                      { attrs: { variant: "success", size: "sm" }, on: { click: e.unProcessEnrollment } },
                                      [
                                        e._v("UnProcess "),
                                        this.isProcessing ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : e._e(),
                          ]),
                        ])
                      : e._e(),
                    e.membership
                      ? n("div", [
                          n("b", [e._v("LTI 1.3 Enrollment:")]),
                          n("ul", { staticClass: "pl-0 pt-2" }, [
                            n("li", { staticStyle: { "list-style": "none" } }, [e._v(e._s(e.membership.email))]),
                            n("li", { staticStyle: { "list-style": "none" } }, [
                              e._v(" " + e._s(e.membership.context.context_title) + " "),
                              e.membership.processed_at
                                ? n(
                                    "span",
                                    {
                                      directives: [{ name: "b-tooltip", rawName: "v-b-tooltip.hover", modifiers: { hover: !0 } }],
                                      staticClass: "badge border border-muted text-success",
                                      attrs: { title: new Date(e.membership.processed_at).toLocaleString() },
                                    },
                                    [e._v("p")]
                                  )
                                : e._e(),
                              n(
                                "span",
                                {
                                  directives: [{ name: "b-tooltip", rawName: "v-b-tooltip.hover", modifiers: { hover: !0 } }],
                                  staticClass: "ml-1 badge border border-muted text-muted",
                                  attrs: { title: e.membership.role },
                                },
                                [e._v(e._s(e.membership.role.charAt(0)))]
                              ),
                              e.membership.processed_at && (e.membership.coupon || e.membership.stripe_event_id)
                                ? n(
                                    "span",
                                    {
                                      directives: [{ name: "b-tooltip", rawName: "v-b-tooltip.hover", modifiers: { hover: !0 } }],
                                      staticClass: "ml-1 badge border border-secondary text-secondary",
                                      attrs: {
                                        title: e.membership.coupon ? e.membership.coupon.coupon_code : e.membership.stripe_event_id ? "stripe" : "",
                                      },
                                    },
                                    [e._v(" " + e._s(e.membership.coupon ? "coupon" : e.membership.stripe_event_id ? "stripe" : "") + " ")]
                                  )
                                : e._e(),
                            ]),
                            n("li", { staticStyle: { "list-style": "none" } }, [
                              e._v(" " + e._s(e.membership.context.deployment.credential.platform.iss.slice(8)) + " "),
                            ]),
                          ]),
                          n("ul", { staticClass: "p-0" }, [
                            e.membership.processed_at
                              ? e._e()
                              : n(
                                  "li",
                                  { staticStyle: { "list-style": "none" } },
                                  [
                                    n(
                                      "b-button",
                                      { attrs: { variant: "success", size: "sm" }, on: { click: e.processMembership } },
                                      [
                                        e._v("Process "),
                                        this.isProcessing ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                            e.membership.processed_at
                              ? n(
                                  "li",
                                  { staticStyle: { "list-style": "none" } },
                                  [
                                    n(
                                      "b-button",
                                      { attrs: { variant: "success", size: "sm" }, on: { click: e.unProcessMembership } },
                                      [
                                        e._v("UnProcess "),
                                        this.isProcessing ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : e._e(),
                          ]),
                        ])
                      : e._e(),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Qn = [],
      Xn = {
        data: function () {
          return {
            form: { token: this.$route.query.token || this.$route.params.token },
            isSending: !1,
            isProcessing: !1,
            token_errors: [],
            enrollment: null,
            membership: null,
          };
        },
        methods: {
          handleLoginEvent: function (e) {
            (this.isAuthenticated = e.loggedIn), (this.profile = e.profile);
          },
          getEnrollment: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e.isSending = !0),
                            (e.enrollment = null),
                            (e.membership = null),
                            (e.token_errors = []),
                            (t.prev = 4),
                            (t.next = 7),
                            _e(e.form.token)
                          );
                        case 7:
                          (e.enrollment = t.sent), console.log("Enrollment", e.enrollment), (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t["catch"](4)),
                            (t.t0.response && 404 === t.t0.response.status) ||
                              (t.t0.response && 500 === t.t0.response.status ? e.token_errors.push("Internal Server Error") : console.log(t.t0));
                        case 14:
                          if (e.enrollment) {
                            t.next = 25;
                            break;
                          }
                          return (t.prev = 15), (t.next = 18), Pe(e.form.token);
                        case 18:
                          (e.membership = t.sent), console.log("Membership", e.membership), (t.next = 25);
                          break;
                        case 22:
                          (t.prev = 22),
                            (t.t1 = t["catch"](15)),
                            t.t1.response && 404 === t.t1.response.status
                              ? e.token_errors.push("Enrollment nor Membership not found")
                              : t.t1.response && 500 === t.t1.response.status
                                ? e.token_errors.push("Internal Server Error")
                                : console.log(t.t1);
                        case 25:
                          e.isSending = !1;
                        case 26:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [
                    [4, 11],
                    [15, 22],
                  ]
                );
              })
            )();
          },
          processEnrollment: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (e.isProcessing = !0), (e.token_errors = []), (t.prev = 2), (t.next = 5), we(e.form.token);
                        case 5:
                          (e.enrollment = t.sent), console.log("Enrollment", e.enrollment), (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t["catch"](2)),
                            t.t0.response && 404 === t.t0.response.status
                              ? e.token_errors.push("Not found")
                              : t.t0.response && 500 === t.t0.response.status
                                ? e.token_errors.push("Internal Server Error")
                                : (t.t0.response.data.error && e.token_errors.push(t.t0.response.data.error),
                                  t.t0.response.data.errors && e.token_errors.push(t.t0.response.data.errors),
                                  console.log(t.t0));
                        case 12:
                          e.isProcessing = !1;
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 9]]
                );
              })
            )();
          },
          processMembership: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (e.isProcessing = !0), (e.token_errors = []), (t.prev = 2), (t.next = 5), Te(e.form.token);
                        case 5:
                          (e.membership = t.sent), console.log("Membership", e.membership), (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t["catch"](2)),
                            t.t0.response && 404 === t.t0.response.status
                              ? e.token_errors.push("Not found")
                              : t.t0.response && 500 === t.t0.response.status
                                ? e.token_errors.push("Internal Server Error")
                                : (t.t0.response.data.error && e.token_errors.push(t.t0.response.data.error),
                                  t.t0.response.data.errors && e.token_errors.push(t.t0.response.data.errors),
                                  console.log(t.t0));
                        case 12:
                          e.isProcessing = !1;
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 9]]
                );
              })
            )();
          },
          unProcessEnrollment: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (e.isProcessing = !0), (e.token_errors = []), (t.prev = 2), (t.next = 5), Se(e.form.token);
                        case 5:
                          (e.enrollment = t.sent), console.log("Enrollment", e.enrollment), (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t["catch"](2)),
                            t.t0.response && 404 === t.t0.response.status
                              ? e.token_errors.push("Not found")
                              : t.t0.response && 500 === t.t0.response.status
                                ? e.token_errors.push("Internal Server Error")
                                : (t.t0.response.data.error && e.token_errors.push(t.t0.response.data.error),
                                  t.t0.response.data.errors && e.token_errors.push(t.t0.response.data.errors),
                                  console.log(t.t0));
                        case 12:
                          e.isProcessing = !1;
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 9]]
                );
              })
            )();
          },
          unProcessMembership: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (e.isProcessing = !0), (e.token_errors = []), (t.prev = 2), (t.next = 5), Ie(e.form.token);
                        case 5:
                          (e.membership = t.sent), console.log("Membership", e.membership), (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t["catch"](2)),
                            t.t0.response && 404 === t.t0.response.status
                              ? e.token_errors.push("Not found")
                              : t.t0.response && 500 === t.t0.response.status
                                ? e.token_errors.push("Internal Server Error")
                                : (t.t0.response.data.error && e.token_errors.push(t.t0.response.data.error),
                                  t.t0.response.data.errors && e.token_errors.push(t.t0.response.data.errors),
                                  console.log(t.t0));
                        case 12:
                          e.isProcessing = !1;
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 9]]
                );
              })
            )();
          },
        },
      },
      Jn = Xn,
      Zn = Object(p["a"])(Jn, Kn, Qn, !1, null, null, null),
      er = Zn.exports,
      tr = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticStyle: { width: "400px" } },
          [
            n(
              "b-card",
              [
                n("h3", [e._v("Check Email")]),
                n("br"),
                n(
                  "b-card-text",
                  [
                    n(
                      "b-input-group",
                      { attrs: { prepend: "Email" } },
                      [
                        n("b-form-input", {
                          attrs: { trim: "", autocomplete: "off", type: "text" },
                          on: {
                            keyup: function (t) {
                              return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getEnrollments(t);
                            },
                          },
                          model: {
                            value: e.form.email,
                            callback: function (t) {
                              e.$set(e.form, "email", t);
                            },
                            expression: "form.email",
                          },
                        }),
                        n(
                          "b-input-group-append",
                          [
                            n(
                              "b-button",
                              { attrs: { variant: "success" }, on: { click: e.getEnrollments } },
                              [
                                e._v("Submit "),
                                this.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    n(
                      "ul",
                      { staticClass: "mt-3" },
                      e._l(e.email_errors, function (t) {
                        return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                      }),
                      0
                    ),
                    e.enrollments.length
                      ? n("div", [
                          n("b", [e._v("Enrollments:")]),
                          n(
                            "ol",
                            { staticClass: "pl-3 pt-1" },
                            e._l(e.enrollments, function (t) {
                              return n("li", { key: t.token }, [
                                n("a", { staticClass: "position-relative", attrs: { href: "/course/" + t.lti_course.context_id } }, [
                                  e._v(e._s(t.lti_course.context_title ? t.lti_course.context_title : "N/A") + " "),
                                ]),
                                n(
                                  "span",
                                  {
                                    directives: [{ name: "b-tooltip", rawName: "v-b-tooltip.hover", modifiers: { hover: !0 } }],
                                    staticClass: "badge border border-muted text-muted",
                                    attrs: { title: t.lti_course.canvas_domain },
                                  },
                                  [e._v("url")]
                                ),
                                t.is_processed
                                  ? n(
                                      "span",
                                      {
                                        directives: [{ name: "b-tooltip", rawName: "v-b-tooltip.hover", modifiers: { hover: !0 } }],
                                        attrs: { title: new Date(t.updated_at).toLocaleString() },
                                      },
                                      [
                                        n(
                                          "router-link",
                                          { staticClass: "ml-1 badge border border-success text-success", attrs: { to: "/token?token=" + t.token } },
                                          [e._v("p")]
                                        ),
                                      ],
                                      1
                                    )
                                  : n(
                                      "span",
                                      [
                                        n(
                                          "router-link",
                                          { staticClass: "badge border border-muted text-muted", attrs: { to: "/token?token=" + t.token } },
                                          [e._v("p")]
                                        ),
                                      ],
                                      1
                                    ),
                                t.coupons.length > 0 || t.stripe_event_id
                                  ? n(
                                      "span",
                                      {
                                        directives: [{ name: "b-tooltip", rawName: "v-b-tooltip.hover", modifiers: { hover: !0 } }],
                                        staticClass: "ml-1 badge border border-secondary text-secondary",
                                        attrs: { title: t.coupons.length > 0 ? t.coupons[0].coupon_code : t.stripe_event_id ? "stripe" : "" },
                                      },
                                      [e._v(" " + e._s(t.coupons.length > 0 ? "coupon" : t.stripe_event_id ? "stripe" : "") + " ")]
                                    )
                                  : e._e(),
                              ]);
                            }),
                            0
                          ),
                        ])
                      : e._e(),
                    e.memberships.length
                      ? n("div", [
                          n("b", [e._v("LTI 1.3 Enrollments:")]),
                          n(
                            "ol",
                            { staticClass: "pl-3 pt-1" },
                            e._l(e.memberships, function (t) {
                              return n("li", { key: t.token }, [
                                e._v(" " + e._s(t.context.context_title ? t.context.context_title : "N/A") + " "),
                                n(
                                  "span",
                                  {
                                    directives: [{ name: "b-tooltip", rawName: "v-b-tooltip.hover", modifiers: { hover: !0 } }],
                                    staticClass: "badge border border-muted text-muted",
                                    attrs: { title: t.context.deployment.credential.platform.iss.slice(8) },
                                  },
                                  [e._v("url")]
                                ),
                                n(
                                  "span",
                                  {
                                    directives: [{ name: "b-tooltip", rawName: "v-b-tooltip.hover", modifiers: { hover: !0 } }],
                                    staticClass: "ml-1 badge border border-muted text-muted",
                                    attrs: { title: t.role },
                                  },
                                  [e._v(e._s(t.role.charAt(0)))]
                                ),
                                t.processed_at
                                  ? n(
                                      "span",
                                      {
                                        directives: [{ name: "b-tooltip", rawName: "v-b-tooltip.hover", modifiers: { hover: !0 } }],
                                        attrs: { title: new Date(t.processed_at).toLocaleString() },
                                      },
                                      [
                                        n(
                                          "router-link",
                                          { staticClass: "ml-1 badge border border-success text-success", attrs: { to: "/token?token=" + t.token } },
                                          [e._v("p")]
                                        ),
                                      ],
                                      1
                                    )
                                  : n(
                                      "span",
                                      [
                                        n(
                                          "router-link",
                                          { staticClass: "badge border border-muted text-muted", attrs: { to: "/token?token=" + t.token } },
                                          [e._v("p")]
                                        ),
                                      ],
                                      1
                                    ),
                                t.coupon || t.stripe_event_id
                                  ? n(
                                      "span",
                                      {
                                        directives: [{ name: "b-tooltip", rawName: "v-b-tooltip.hover", modifiers: { hover: !0 } }],
                                        staticClass: "ml-1 badge border border-secondary text-secondary",
                                        attrs: { title: t.coupon ? t.coupon.coupon_code : t.stripe_event_id ? "stripe" : "" },
                                      },
                                      [e._v(" " + e._s(t.coupon ? "coupon" : t.stripe_event_id ? "stripe" : "") + " ")]
                                    )
                                  : e._e(),
                              ]);
                            }),
                            0
                          ),
                        ])
                      : e._e(),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      nr = [],
      rr = {
        data: function () {
          return { form: { email: this.$route.params.email }, isSending: !1, email_errors: [], enrollments: [], memberships: [], hasError: !1 };
        },
        methods: {
          handleLoginEvent: function (e) {
            (this.isAuthenticated = e.loggedIn), (this.profile = e.profile);
          },
          getEnrollments: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e.isSending = !0),
                            (e.enrollments = []),
                            (e.memberships = []),
                            (e.email_errors = []),
                            (e.hasError = !1),
                            (t.prev = 5),
                            (t.next = 8),
                            ve(e.form.email)
                          );
                        case 8:
                          (e.enrollments = t.sent), console.log("Enrollments", e.enrollments), (t.next = 16);
                          break;
                        case 12:
                          (t.prev = 12),
                            (t.t0 = t["catch"](5)),
                            (e.hasError = !0),
                            t.t0.response && 404 === t.t0.response.status
                              ? e.email_errors.push("Enrollments not found")
                              : t.t0.response && 500 === t.t0.response.status
                                ? e.email_errors.push("Internal Server Error")
                                : t.t0.response && 401 === t.t0.response.status
                                  ? e.email_errors.push("Unauthorized. Try refreshing or log out then log back in.")
                                  : console.log(t.t0);
                        case 16:
                          return (t.prev = 16), (t.next = 19), xe(e.form.email);
                        case 19:
                          (e.memberships = t.sent), console.log("Memberships", e.memberships), (t.next = 27);
                          break;
                        case 23:
                          (t.prev = 23),
                            (t.t1 = t["catch"](16)),
                            (e.hasError = !0),
                            t.t1.response && 404 === t.t1.response.status
                              ? e.email_errors.push("Memberships not found")
                              : t.t1.response && 500 === t.t1.response.status
                                ? e.email_errors.push("Internal Server Error")
                                : t.t1.response && 401 === t.t1.response.status
                                  ? e.email_errors.push("Unauthorized. Try refreshing or log out then log back in.")
                                  : console.log(t.t1);
                        case 27:
                          0 == e.hasError &&
                            0 == e.enrollments.length &&
                            0 == e.memberships.length &&
                            e.email_errors.push("No enrollments and memberships associated with the email found"),
                            (e.isSending = !1);
                        case 29:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [
                    [5, 12],
                    [16, 23],
                  ]
                );
              })
            )();
          },
        },
      },
      or = rr,
      ir = Object(p["a"])(or, tr, nr, !1, null, null, null),
      sr = ir.exports,
      ar = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticStyle: { width: "700px" } },
          [
            n(
              "b-card",
              [
                n("h3", [e._v("Import Access Codes")]),
                n("br"),
                n(
                  "b-card-text",
                  [
                    n(
                      "b-input-group",
                      { attrs: { prepend: "CSV File" } },
                      [
                        n("b-form-file", {
                          attrs: { type: "file" },
                          model: {
                            value: e.form.file,
                            callback: function (t) {
                              e.$set(e.form, "file", t);
                            },
                            expression: "form.file",
                          },
                        }),
                        n(
                          "b-input-group-append",
                          [
                            n(
                              "b-button",
                              { attrs: { variant: "success" }, on: { click: e.submitFile } },
                              [
                                e._v("Submit "),
                                this.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    n(
                      "ul",
                      { staticClass: "mt-3 mb-0" },
                      e._l(e.import_errors, function (t) {
                        return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                      }),
                      0
                    ),
                    e.imported ? n("div", [e._v(e._s(e.imported.message))]) : e._e(),
                  ],
                  1
                ),
                e.imported && e.failed
                  ? n(
                      "b-card-text",
                      [e._v(" Access codes not imported: "), n("b-table", { attrs: { bordered: !0, small: !0, items: e.not_imported } })],
                      1
                    )
                  : e._e(),
              ],
              1
            ),
          ],
          1
        );
      },
      lr = [],
      cr = {
        data: function () {
          return { form: { file: this.$route.params.file }, isSending: !1, import_errors: [], not_imported: [], imported: null, failed: !1 };
        },
        methods: {
          handleLoginEvent: function (e) {
            (this.isAuthenticated = e.loggedIn), (this.profile = e.profile);
          },
          submitFile: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e.isSending = !0),
                            (e.import_errors = []),
                            (e.not_imported = []),
                            (e.imported = null),
                            (e.failed = !1),
                            (t.prev = 5),
                            (t.next = 8),
                            fe(e.form.file)
                          );
                        case 8:
                          (e.imported = t.sent),
                            e.imported.failed_coupons &&
                              ((e.failed = !0),
                              e.imported.failed_coupons.forEach(function (t) {
                                e.not_imported.push({ access_code: t.coupon.coupon_code, product: t.product, reason: t.reason });
                              })),
                            console.log(e.imported.message),
                            (t.next = 16);
                          break;
                        case 13:
                          (t.prev = 13),
                            (t.t0 = t["catch"](5)),
                            (t.t0.response && 404 === t.t0.response.status) ||
                              (t.t0.response && 500 === t.t0.response.status ? e.import_errors.push("Internal Server Error") : console.log(t.t0));
                        case 16:
                          e.isSending = !1;
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[5, 13]]
                );
              })
            )();
          },
        },
      },
      ur = cr,
      pr = Object(p["a"])(ur, ar, lr, !1, null, null, null),
      dr = pr.exports,
      mr = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticStyle: { width: "600px" } },
          [
            n(
              "b-card",
              [
                n("h3", [e._v("Manage Consumer")]),
                n("br"),
                n(
                  "b-card-text",
                  [
                    n(
                      "b-input-group",
                      { attrs: { prepend: "Key" } },
                      [
                        n("b-form-input", {
                          attrs: { autocomplete: "off", type: "text" },
                          on: {
                            keyup: function (t) {
                              return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.findConsumer(t);
                            },
                            input: e.handleKeyInput,
                          },
                          model: {
                            value: e.form.key,
                            callback: function (t) {
                              e.$set(e.form, "key", t);
                            },
                            expression: "form.key",
                          },
                        }),
                        n(
                          "b-input-group-append",
                          [
                            n(
                              "b-button",
                              { attrs: { variant: "success" }, on: { click: e.findConsumer } },
                              [e._v("Find "), e.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e()],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    n("b-form-invalid-feedback", { attrs: { state: !e.invalid } }, [e._v(" Key field cannot be blank ")]),
                  ],
                  1
                ),
                e.consumer
                  ? n("div", [
                      e.consumer.found_consumer_by_key
                        ? n("div", [
                            n("b", [e._v("Consumer:")]),
                            n("ul", { staticClass: "pl-0 pt-2" }, [
                              n("li", { staticStyle: { "list-style-type": "none" } }, [e._v("Key: " + e._s(e.consumer.found_consumer_by_key.key))]),
                              n("li", { staticStyle: { "list-style-type": "none" } }, [e._v("Name: " + e._s(e.consumer.found_consumer_by_key.name))]),
                              n("li", { staticStyle: { "list-style-type": "none" } }, [
                                e._v("Secret: " + e._s(e.consumer.found_consumer_by_key.secret)),
                              ]),
                              n(
                                "li",
                                { staticStyle: { "list-style-type": "none", display: "flex", "align-items": "center" } },
                                [
                                  n("span", { staticClass: "mr-2" }, [e._v("Accepts Payment: ")]),
                                  n(
                                    "b-form-checkbox",
                                    {
                                      attrs: { switch: "" },
                                      on: {
                                        change: function (t) {
                                          return e.validateToggle("accepts_payment");
                                        },
                                      },
                                      model: {
                                        value: e.form.accepts_payment,
                                        callback: function (t) {
                                          e.$set(e.form, "accepts_payment", t);
                                        },
                                        expression: "form.accepts_payment",
                                      },
                                    },
                                    [e._v(" " + e._s(e.form.accepts_payment ? "Enabled" : "Disabled") + " ")]
                                  ),
                                ],
                                1
                              ),
                              n(
                                "li",
                                { staticStyle: { "list-style-type": "none", display: "flex", "align-items": "center" } },
                                [
                                  n("span", { staticClass: "mr-2" }, [e._v("Accepts Access Code: ")]),
                                  n(
                                    "b-form-checkbox",
                                    {
                                      attrs: { switch: "" },
                                      on: {
                                        change: function (t) {
                                          return e.validateToggle("accepts_access_code");
                                        },
                                      },
                                      model: {
                                        value: e.form.accepts_access_code,
                                        callback: function (t) {
                                          e.$set(e.form, "accepts_access_code", t);
                                        },
                                        expression: "form.accepts_access_code",
                                      },
                                    },
                                    [e._v(" " + e._s(e.form.accepts_access_code ? "Enabled" : "Disabled") + " ")]
                                  ),
                                ],
                                1
                              ),
                              n(
                                "li",
                                { staticStyle: { "list-style-type": "none", "margin-top": "10px" } },
                                [
                                  n("b-button", { attrs: { variant: "success", disabled: !e.canUpdate }, on: { click: e.updateConsumer } }, [
                                    e._v(" Update "),
                                  ]),
                                ],
                                1
                              ),
                            ]),
                          ])
                        : e._e(),
                      e.consumer.found_consumer_by_name
                        ? n("div", [
                            n(
                              "div",
                              { staticClass: "text-warning" },
                              [
                                n("b-icon", { attrs: { icon: "exclamation-circle", "aria-hidden": "true" } }),
                                e._v(
                                  ' A consumer with name "' +
                                    e._s(e.consumer.found_consumer_by_name.name) +
                                    '" already exists for key "' +
                                    e._s(e.consumer.found_consumer_by_name.key) +
                                    '" '
                                ),
                              ],
                              1
                            ),
                            n("ul", { staticClass: "pl-0 pt-2" }, [
                              n("li", { staticStyle: { "list-style-type": "none" } }, [e._v("Key: " + e._s(e.consumer.found_consumer_by_name.key))]),
                              n("li", { staticStyle: { "list-style-type": "none" } }, [
                                e._v("Name: " + e._s(e.consumer.found_consumer_by_name.name)),
                              ]),
                              n("li", { staticStyle: { "list-style-type": "none" } }, [
                                e._v("Secret: " + e._s(e.consumer.found_consumer_by_name.secret)),
                              ]),
                              n("li", { staticStyle: { "list-style-type": "none", display: "flex", "align-items": "center" } }, [
                                n("span", { staticClass: "mr-2" }, [e._v("Accepts Payment:")]),
                                n("span", [e._v(e._s(e.form.accepts_payment ? "Enabled" : "Disabled"))]),
                              ]),
                              n("li", { staticStyle: { "list-style-type": "none", display: "flex", "align-items": "center" } }, [
                                n("span", { staticClass: "mr-2" }, [e._v("Accepts Access Code:")]),
                                n("span", [e._v(e._s(e.form.accepts_access_code ? "Enabled" : "Disabled"))]),
                              ]),
                            ]),
                            n(
                              "div",
                              { staticClass: "mt-3" },
                              [
                                n("b", [e._v("Create new consumer with different name:")]),
                                n(
                                  "b-input-group",
                                  { staticClass: "mt-2", attrs: { prepend: "Name" } },
                                  [
                                    n("b-form-input", {
                                      attrs: { type: "text" },
                                      model: {
                                        value: e.form.name,
                                        callback: function (t) {
                                          e.$set(e.form, "name", t);
                                        },
                                        expression: "form.name",
                                      },
                                    }),
                                    n(
                                      "b-input-group-append",
                                      [
                                        n(
                                          "b-button",
                                          { attrs: { variant: "success" }, on: { click: e.createConsumer } },
                                          [
                                            e._v("Create "),
                                            e.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                n("b-form-invalid-feedback", { attrs: { state: e.nameValidation } }, [e._v(" Name field cannot be blank ")]),
                              ],
                              1
                            ),
                          ])
                        : e.consumer.updated_consumer
                          ? n("div", [
                              n("b", [e._v("Consumer:")]),
                              n("ul", { staticClass: "pl-0 pt-2" }, [
                                n("li", { staticStyle: { "list-style-type": "none" } }, [e._v("Key: " + e._s(e.consumer.updated_consumer.key))]),
                                n("li", { staticStyle: { "list-style-type": "none" } }, [e._v("Name: " + e._s(e.consumer.updated_consumer.name))]),
                                n("li", { staticStyle: { "list-style-type": "none" } }, [
                                  e._v("Secret: " + e._s(e.consumer.updated_consumer.secret)),
                                ]),
                                n(
                                  "li",
                                  { staticStyle: { "list-style-type": "none", display: "flex", "align-items": "center" } },
                                  [
                                    n("span", { staticClass: "mr-2" }, [e._v("Accepts Payment: ")]),
                                    n(
                                      "b-form-checkbox",
                                      {
                                        attrs: { switch: "" },
                                        on: {
                                          change: function (t) {
                                            return e.validateToggle("accepts_payment");
                                          },
                                        },
                                        model: {
                                          value: e.form.accepts_payment,
                                          callback: function (t) {
                                            e.$set(e.form, "accepts_payment", t);
                                          },
                                          expression: "form.accepts_payment",
                                        },
                                      },
                                      [e._v(" " + e._s(e.form.accepts_payment ? "Enabled" : "Disabled") + " ")]
                                    ),
                                  ],
                                  1
                                ),
                                n(
                                  "li",
                                  { staticStyle: { "list-style-type": "none", display: "flex", "align-items": "center" } },
                                  [
                                    n("span", { staticClass: "mr-2" }, [e._v("Accepts Access Code: ")]),
                                    n(
                                      "b-form-checkbox",
                                      {
                                        attrs: { switch: "" },
                                        on: {
                                          change: function (t) {
                                            return e.validateToggle("accepts_access_code");
                                          },
                                        },
                                        model: {
                                          value: e.form.accepts_access_code,
                                          callback: function (t) {
                                            e.$set(e.form, "accepts_access_code", t);
                                          },
                                          expression: "form.accepts_access_code",
                                        },
                                      },
                                      [e._v(" " + e._s(e.form.accepts_access_code ? "Enabled" : "Disabled") + " ")]
                                    ),
                                  ],
                                  1
                                ),
                                n(
                                  "li",
                                  { staticStyle: { "list-style-type": "none", "margin-top": "10px" } },
                                  [
                                    n(
                                      "b-button",
                                      { attrs: { variant: "success", disabled: !e.canUpdate }, on: { click: e.updateConsumer } },
                                      [
                                        e._v(" Update "),
                                        e.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                            ])
                          : e.consumer.created_consumer
                            ? n("div", [
                                n("b", [e._v("Consumer:")]),
                                n("ul", { staticClass: "pl-0 pt-2" }, [
                                  n("li", { staticStyle: { "list-style-type": "none" } }, [e._v("Key: " + e._s(e.consumer.created_consumer.key))]),
                                  n("li", { staticStyle: { "list-style-type": "none" } }, [e._v("Name: " + e._s(e.consumer.created_consumer.name))]),
                                  n("li", { staticStyle: { "list-style-type": "none" } }, [
                                    e._v("Secret: " + e._s(e.consumer.created_consumer.secret)),
                                  ]),
                                  n(
                                    "li",
                                    { staticStyle: { "list-style-type": "none", display: "flex", "align-items": "center" } },
                                    [
                                      n("span", { staticClass: "mr-2" }, [e._v("Accepts Payment: ")]),
                                      n(
                                        "b-form-checkbox",
                                        {
                                          attrs: { switch: "" },
                                          on: {
                                            change: function (t) {
                                              return e.validateToggle("accepts_payment");
                                            },
                                          },
                                          model: {
                                            value: e.form.accepts_payment,
                                            callback: function (t) {
                                              e.$set(e.form, "accepts_payment", t);
                                            },
                                            expression: "form.accepts_payment",
                                          },
                                        },
                                        [e._v(" " + e._s(e.form.accepts_payment ? "Enabled" : "Disabled") + " ")]
                                      ),
                                    ],
                                    1
                                  ),
                                  n(
                                    "li",
                                    { staticStyle: { "list-style-type": "none", display: "flex", "align-items": "center" } },
                                    [
                                      n("span", { staticClass: "mr-2" }, [e._v("Accepts Access Code: ")]),
                                      n(
                                        "b-form-checkbox",
                                        {
                                          attrs: { switch: "" },
                                          on: {
                                            change: function (t) {
                                              return e.validateToggle("accepts_access_code");
                                            },
                                          },
                                          model: {
                                            value: e.form.accepts_access_code,
                                            callback: function (t) {
                                              e.$set(e.form, "accepts_access_code", t);
                                            },
                                            expression: "form.accepts_access_code",
                                          },
                                        },
                                        [e._v(" " + e._s(e.form.accepts_access_code ? "Enabled" : "Disabled") + " ")]
                                      ),
                                    ],
                                    1
                                  ),
                                  n(
                                    "li",
                                    { staticStyle: { "list-style-type": "none", "margin-top": "10px" } },
                                    [
                                      n(
                                        "b-button",
                                        { attrs: { variant: "success", disabled: !e.canUpdate }, on: { click: e.updateConsumer } },
                                        [
                                          e._v(" Update "),
                                          e.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                              ])
                            : e.consumer.message
                              ? n(
                                  "div",
                                  [
                                    n(
                                      "div",
                                      { staticClass: "text-warning mb-3" },
                                      [
                                        n("b-icon", { attrs: { icon: "exclamation-circle", "aria-hidden": "true" } }),
                                        e._v(' Consumer with key "' + e._s(e.searchKey) + '" not found '),
                                      ],
                                      1
                                    ),
                                    n("b", [e._v("Would you like to create a new consumer with this key?")]),
                                    n(
                                      "b-card-text",
                                      { staticClass: "mt-2" },
                                      [
                                        n(
                                          "b-input-group",
                                          { attrs: { prepend: "Name" } },
                                          [
                                            n("b-form-input", {
                                              attrs: { type: "text", placeholder: "Enter consumer name" },
                                              model: {
                                                value: e.form.name,
                                                callback: function (t) {
                                                  e.$set(e.form, "name", t);
                                                },
                                                expression: "form.name",
                                              },
                                            }),
                                            n(
                                              "b-input-group-append",
                                              [
                                                n(
                                                  "b-button",
                                                  { attrs: { variant: "success" }, on: { click: e.createConsumer } },
                                                  [
                                                    e._v(" Create "),
                                                    e.isSending
                                                      ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } })
                                                      : e._e(),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                        n("b-form-invalid-feedback", { attrs: { state: e.nameValidation } }, [e._v(" Name field cannot be blank ")]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : e._e(),
                      e.updated
                        ? n(
                            "div",
                            { staticClass: "text-success mb-3" },
                            [n("b-icon", { attrs: { icon: "check-circle", "aria-hidden": "true" } }), e._v(" Consumer Updated Successfully ")],
                            1
                          )
                        : e._e(),
                    ])
                  : e._e(),
                n("b-card-text"),
              ],
              1
            ),
          ],
          1
        );
      },
      hr = [],
      fr = {
        data: function () {
          return {
            form: { key: this.$route.params.key || this.$route.query.key || "", name: "", accepts_payment: !0, accepts_access_code: !0 },
            searchKey: "",
            isSending: !1,
            isProcessing: !1,
            consumer: null,
            invalid: !1,
            newConsumer: !1,
            updated: !0,
            initial_values: { accepts_payment: !1, accepts_access_code: !1 },
            nameValidation: !1,
          };
        },
        computed: {
          canUpdate: function () {
            var e = this.form.accepts_payment || this.form.accepts_access_code;
            return (
              (this.form.accepts_payment !== this.initial_values.accepts_payment ||
                this.form.accepts_access_code !== this.initial_values.accepts_access_code) &&
              e
            );
          },
        },
        methods: {
          handleLoginEvent: function (e) {
            (this.isAuthenticated = e.loggedIn), (this.profile = e.profile);
          },
          validateToggle: function (e) {
            (this.updated = !1), this.form.accepts_payment || this.form.accepts_access_code || (this.form[e] = !0);
          },
          findConsumer: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((e.nameValidation = !0), (e.updated = !1), (e.isSending = !0), !e.form.key)) {
                          t.next = 12;
                          break;
                        }
                        return (e.searchKey = e.form.key), (t.next = 7), De(e.form.key);
                      case 7:
                        (e.consumer = t.sent),
                          e.consumer.found_consumer_by_key &&
                            ((e.form.accepts_payment = e.consumer.found_consumer_by_key.accepts_payment),
                            (e.form.accepts_access_code = e.consumer.found_consumer_by_key.accepts_access_code),
                            (e.initial_values = {
                              accepts_payment: e.consumer.found_consumer_by_key.accepts_payment,
                              accepts_access_code: e.consumer.found_consumer_by_key.accepts_access_code,
                            })),
                          (e.invalid = !1),
                          (t.next = 13);
                        break;
                      case 12:
                        e.invalid = !0;
                      case 13:
                        e.isSending = !1;
                      case 14:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          createConsumer: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (e.form.name) {
                          t.next = 3;
                          break;
                        }
                        return (e.nameValidation = !1), t.abrupt("return");
                      case 3:
                        if (((e.nameValidation = !0), (e.updated = !1), (e.isSending = !0), !e.searchKey)) {
                          t.next = 16;
                          break;
                        }
                        return (t.next = 9), Le(e.searchKey, e.form.name);
                      case 9:
                        (e.consumer = t.sent),
                          console.log(e.consumer),
                          e.consumer.created_consumer &&
                            ((e.form.accepts_payment = e.consumer.created_consumer.accepts_payment),
                            (e.form.accepts_access_code = e.consumer.created_consumer.accepts_access_code),
                            (e.initial_values = {
                              accepts_payment: e.consumer.created_consumer.accepts_payment,
                              accepts_access_code: e.consumer.created_consumer.accepts_access_code,
                            })),
                          (e.invalid = !1),
                          (e.form.name = ""),
                          (t.next = 17);
                        break;
                      case 16:
                        e.invalid = !0;
                      case 17:
                        e.isSending = !1;
                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          updateConsumer: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((e.isSending = !0), !e.form.key)) {
                          t.next = 9;
                          break;
                        }
                        return (t.next = 4), je(e.form.key, e.form.accepts_payment, e.form.accepts_access_code);
                      case 4:
                        (e.consumer = t.sent),
                          e.consumer.updated_consumer &&
                            ((e.form.accepts_payment = e.consumer.updated_consumer.accepts_payment),
                            (e.form.accepts_access_code = e.consumer.updated_consumer.accepts_access_code),
                            (e.initial_values = {
                              accepts_payment: e.consumer.updated_consumer.accepts_payment,
                              accepts_access_code: e.consumer.updated_consumer.accepts_access_code,
                            }),
                            (e.updated = !0)),
                          (e.invalid = !1),
                          (t.next = 10);
                        break;
                      case 9:
                        e.invalid = !0;
                      case 10:
                        e.isSending = !1;
                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          handleKeyInput: function () {
            this.form.key ||
              ((this.consumer = null), (this.searchKey = ""), (this.form.name = ""), (this.nameValidation = null), (this.invalid = !1));
          },
        },
      },
      gr = fr,
      vr = Object(p["a"])(gr, mr, hr, !1, null, null, null),
      br = vr.exports,
      _r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticStyle: { width: "600px" } },
          [
            n(
              "b-card",
              [
                n("h3", [e._v("Create LTI 1.3 Credentials")]),
                n("br"),
                n(
                  "b-card-text",
                  [
                    n(
                      "b-input-group",
                      { staticClass: "mb-3", attrs: { prepend: "Domain" } },
                      [
                        n("b-form-input", {
                          attrs: { autocomplete: "off", type: "text" },
                          model: {
                            value: e.form.domain,
                            callback: function (t) {
                              e.$set(e.form, "domain", t);
                            },
                            expression: "form.domain",
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      "b-input-group",
                      { staticClass: "mb-3", attrs: { prepend: "ClientID" } },
                      [
                        n("b-form-input", {
                          attrs: { autocomplete: "off", type: "text" },
                          model: {
                            value: e.form.client_id,
                            callback: function (t) {
                              e.$set(e.form, "client_id", t);
                            },
                            expression: "form.client_id",
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      "b-form-checkbox",
                      {
                        attrs: { name: "d2l", value: "true", "unchecked-value": "false" },
                        model: {
                          value: e.form.d2l,
                          callback: function (t) {
                            e.$set(e.form, "d2l", t);
                          },
                          expression: "form.d2l",
                        },
                      },
                      [e._v(" Is this a D2L platform? ")]
                    ),
                  ],
                  1
                ),
                n(
                  "b-card-text",
                  [
                    n(
                      "b-button",
                      { attrs: { variant: "success" }, on: { click: e.createPlatform } },
                      [e._v("Submit "), this.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e()],
                      1
                    ),
                  ],
                  1
                ),
                e.invalid
                  ? n("div", [e._v(" Both domain and client ID fields must have values ")])
                  : this.message
                    ? n("div", [
                        n("p", [e._v(e._s(e.message))]),
                        this.platform
                          ? n("p", [
                              e._v(" authorization_redirect: " + e._s(e.platform.authorization_redirect)),
                              n("br"),
                              e._v(" public_keys_url: " + e._s(e.platform.public_keys_url)),
                              n("br"),
                              e._v(" grant_url: " + e._s(e.platform.grant_url)),
                              n("br"),
                            ])
                          : e._e(),
                      ])
                    : e._e(),
                n("b-card-text"),
              ],
              1
            ),
          ],
          1
        );
      },
      yr = [],
      wr = {
        data: function () {
          return { form: { domain: "", client_id: "", d2l: !0 }, isSending: !1, isProcessing: !1, message: null, platform: null, invalid: !1 };
        },
        methods: {
          handleLoginEvent: function (e) {
            (this.isAuthenticated = e.loggedIn), (this.profile = e.profile);
          },
          createPlatform: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((e.isSending = !0), (t.prev = 1), !e.form.domain || !e.form.client_id)) {
                            t.next = 11;
                            break;
                          }
                          return (t.next = 5), Ue(e.form.domain, e.form.client_id, e.form.d2l);
                        case 5:
                          (n = t.sent), (e.message = n.message), (e.platform = n.platform), (e.invalid = !1), (t.next = 12);
                          break;
                        case 11:
                          e.invalid = !0;
                        case 12:
                          t.next = 17;
                          break;
                        case 14:
                          (t.prev = 14), (t.t0 = t["catch"](1)), console.log(t.t0);
                        case 17:
                          e.isSending = !1;
                        case 18:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 14]]
                );
              })
            )();
          },
        },
      },
      kr = wr,
      Sr = Object(p["a"])(kr, _r, yr, !1, null, null, null),
      Cr = Sr.exports,
      xr = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticStyle: { width: "600px" } },
          [
            n(
              "b-card",
              [
                n("h3", [e._v("Activate 1.3 Course")]),
                n("br"),
                n(
                  "b-card-text",
                  [
                    n(
                      "b-input-group",
                      { attrs: { prepend: "Token" } },
                      [
                        n("b-form-input", {
                          attrs: { type: "text" },
                          on: {
                            keyup: function (t) {
                              return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getMembershipInfo(t);
                            },
                          },
                          model: {
                            value: e.form.token,
                            callback: function (t) {
                              e.$set(e.form, "token", t);
                            },
                            expression: "form.token",
                          },
                        }),
                        n(
                          "b-input-group-append",
                          [
                            n(
                              "b-button",
                              { attrs: { variant: "success" }, on: { click: e.getMembershipInfo } },
                              [
                                e._v("Submit "),
                                this.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    n(
                      "ul",
                      { staticClass: "mt-3" },
                      e._l(e.errors, function (t) {
                        return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                      }),
                      0
                    ),
                  ],
                  1
                ),
                e.invalid ? n("div", [e._v(" Token field needs to have a value. ")]) : e._e(),
                this.membershipInfo
                  ? n(
                      "div",
                      [
                        n("p", [
                          e._v(" CID: " + e._s(this.membershipInfo.context.context_id)),
                          n("br"),
                          e._v(" Title: " + e._s(this.membershipInfo.context.context_title)),
                          n("br"),
                          e._v(" Issuer: " + e._s(this.membershipInfo.context.deployment.credential.platform.iss)),
                          n("br"),
                        ]),
                        this.data && this.data.coupon_code ? n("p", [e._v(" Coupon Code: " + e._s(this.data.coupon_code) + " ")]) : e._e(),
                        e._v(" Product: "),
                        n("span", { staticClass: "text-success font-weight-bold" }, [e._v(e._s(this.product_code))]),
                        n("b-form-select", {
                          staticClass: "mt-2 mb-2",
                          attrs: { options: e.products_options, "select-size": 12 },
                          model: {
                            value: e.form.product_code,
                            callback: function (t) {
                              e.$set(e.form, "product_code", t);
                            },
                            expression: "form.product_code",
                          },
                        }),
                        n(
                          "p",
                          [
                            n(
                              "b-button",
                              {
                                staticClass: "mt-2",
                                attrs: { size: "sm", text: "Button", variant: "primary", disabled: this.form.product_code == this.product_code },
                                on: { click: e.activateCourse },
                              },
                              [e._v(" Change ")]
                            ),
                          ],
                          1
                        ),
                        n(
                          "p",
                          [
                            n(
                              "b-form-checkbox",
                              {
                                attrs: { name: "create_coupon", value: "true", "unchecked-value": "false" },
                                model: {
                                  value: e.form.create_coupon,
                                  callback: function (t) {
                                    e.$set(e.form, "create_coupon", t);
                                  },
                                  expression: "form.create_coupon",
                                },
                              },
                              [e._v(" Create Test Coupon? ")]
                            ),
                          ],
                          1
                        ),
                        n("p", [
                          e._v(" Memberships: "),
                          n(
                            "ul",
                            { staticClass: "mt-3" },
                            e._l(this.membershipInfo.context.memberships, function (t) {
                              return n("li", { key: t }, [
                                e._v(" " + e._s(t.email) + ", " + e._s(t.role) + " "),
                                t.token == e.form.token ? n("span", [e._v("*")]) : e._e(),
                              ]);
                            }),
                            0
                          ),
                        ]),
                      ],
                      1
                    )
                  : e._e(),
                e.activations
                  ? n("div", [e._v(" Activation History: "), n("b-table", { attrs: { bordered: !0, small: !0, items: e.activation_history } })], 1)
                  : e._e(),
              ],
              1
            ),
          ],
          1
        );
      },
      Ar = [],
      Pr = {
        data: function () {
          return {
            form: { token: this.$route.params.token, product_code: "", create_coupon: !1 },
            isSending: !1,
            isProcessing: !1,
            data: null,
            invalid: !1,
            product_code: "",
            token: "",
            membershipInfo: null,
            errors: [],
            fields: ["email", "role", "associated"],
            selected_products: [],
            activations: null,
            activation_history: [],
          };
        },
        computed: {
          products: function () {
            return M.query()
              .orderBy("name")
              .get()
              .filter(function (e) {
                return "zfree" !== e.name.toLowerCase();
              });
          },
          products_options: function () {
            return this.products.map(function (e) {
              return { value: e.product_code, text: e.name + " (" + e.product_code + ")" };
            });
          },
          users: function () {
            return L.query().orderBy("id").get();
          },
        },
        methods: {
          handleLoginEvent: function (e) {
            (this.isAuthenticated = e.loggedIn), (this.profile = e.profile);
          },
          getData: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), ie();
                        case 3:
                          return (t.next = 5), ze();
                        case 5:
                          t.next = 11;
                          break;
                        case 7:
                          (t.prev = 7),
                            (t.t0 = t["catch"](0)),
                            e.notifyMe(e.getErrorMessage(t.t0)),
                            t.t0.response && 401 === t.t0.response.status && e.$auth.logOut("Unauthorized.");
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 7]]
                );
              })
            )();
          },
          getMembershipInfo: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e.isSending = !0),
                            (e.membershipInfo = null),
                            (e.errors = []),
                            (e.form.product_code = ""),
                            (e.product_code = ""),
                            (e.activations = null),
                            (t.prev = 6),
                            (t.next = 9),
                            Pe(e.form.token)
                          );
                        case 9:
                          (e.membershipInfo = t.sent),
                            e.membershipInfo.context.product &&
                              ((e.product_code = e.membershipInfo.context.product.product_code),
                              (e.form.product_code = e.product_code),
                              (e.activations = e.membershipInfo.context.activations),
                              e.generateActivationHistory()),
                            (t.next = 16);
                          break;
                        case 13:
                          (t.prev = 13),
                            (t.t0 = t["catch"](6)),
                            t.t0.response && 404 === t.t0.response.status
                              ? e.errors.push("Membership not found")
                              : t.t0.response && 500 === t.t0.response.status
                                ? e.errors.push("Internal Server Error")
                                : console.log(t.t0);
                        case 16:
                          e.isSending = !1;
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[6, 13]]
                );
              })
            )();
          },
          activateCourse: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((e.isSending = !0), (t.prev = 1), !e.form.token)) {
                            t.next = 12;
                            break;
                          }
                          return (t.next = 5), Be(e.form.token, e.form.product_code, e.form.create_coupon);
                        case 5:
                          (e.data = t.sent),
                            (e.product_code = e.data.membership.context.product.product_code),
                            (e.invalid = !1),
                            (e.activations = e.data.membership.context.activations),
                            e.generateActivationHistory(),
                            (t.next = 13);
                          break;
                        case 12:
                          e.invalid = !0;
                        case 13:
                          t.next = 18;
                          break;
                        case 15:
                          (t.prev = 15), (t.t0 = t["catch"](1)), console.log(t.t0);
                        case 18:
                          e.isSending = !1;
                        case 19:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 15]]
                );
              })
            )();
          },
          generateActivationHistory: function () {
            var e = this;
            (this.activation_history = []),
              this.activations.forEach(function (t) {
                var n = e.users.find(function (e) {
                    return t.user_id == e.id;
                  }),
                  r = n.first_name + " " + n.last_name.charAt(0) + ".";
                e.activation_history.push({
                  date: new Date(t.activated_at).toLocaleString(),
                  product_code: e.products.find(function (e) {
                    return t.product_id == e.id;
                  }).product_code,
                  user: r,
                });
              });
          },
        },
        mounted: function () {
          this.getData();
        },
      },
      Er = Pr,
      Tr = Object(p["a"])(Er, xr, Ar, !1, null, null, null),
      Rr = Tr.exports,
      Ir = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticStyle: { width: "400px" } },
          [
            n(
              "b-card",
              [
                n("h3", [e._v("Manage SproutVideo")]),
                n("br"),
                n(
                  "b-card-text",
                  [
                    n(
                      "b-input-group",
                      { attrs: { prepend: "Domain" } },
                      [
                        n("b-form-input", {
                          attrs: { trim: "", autocomplete: "off", type: "text" },
                          on: {
                            keyup: function (t) {
                              return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.checkDomain(t);
                            },
                          },
                          model: {
                            value: e.form.domain,
                            callback: function (t) {
                              e.$set(e.form, "domain", t);
                            },
                            expression: "form.domain",
                          },
                        }),
                        n(
                          "b-input-group-append",
                          [
                            n(
                              "b-button",
                              { attrs: { variant: "success" }, on: { click: e.checkDomain } },
                              [
                                e._v("Check "),
                                this.IsChecking ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    n(
                      "ul",
                      { staticClass: "mt-3 mb-0" },
                      e._l(e.sv_errors, function (t) {
                        return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                      }),
                      0
                    ),
                    e.isChecked
                      ? n(
                          "div",
                          [
                            e._v(" Allowed Accounts: "),
                            e.allowed && e.allowed.length
                              ? n("span", { staticClass: "text-success font-weight-bold" }, [
                                  e._v(
                                    e._s(
                                      e.allowed
                                        .map(function (e) {
                                          return e;
                                        })
                                        .join(", ")
                                    )
                                  ),
                                ])
                              : e._e(),
                            n(
                              "b-form",
                              { staticClass: "mt-3 mb-2" },
                              [
                                n(
                                  "b-form-group",
                                  { attrs: { label: "Add or remove accounts for the domain." } },
                                  [
                                    n("b-form-select", {
                                      attrs: { options: e.options, multiple: "", "select-size": 12 },
                                      model: {
                                        value: e.selectedValues,
                                        callback: function (t) {
                                          e.selectedValues = t;
                                        },
                                        expression: "selectedValues",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            n(
                              "b-button",
                              {
                                staticClass: "mt-2 mr-2",
                                attrs: { size: "sm", text: "Add", variant: "primary", disabled: e.is_button_disabled },
                                on: { click: e.addDomain },
                              },
                              [
                                e._v(" Add "),
                                this.IsAdding ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                              ],
                              1
                            ),
                            n(
                              "b-button",
                              {
                                staticClass: "mt-2",
                                attrs: { size: "sm", text: "Button", variant: "primary", disabled: e.is_button_disabled },
                                on: { click: e.removeDomain },
                              },
                              [
                                e._v(" Remove "),
                                this.IsRemoving ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : e._e(),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Or = [],
      Dr =
        (n("b64b"),
        {
          data: function () {
            return {
              form: { domain: this.$route.params.domain },
              IsChecking: !1,
              IsAdding: !1,
              IsRemoving: !1,
              hasError: !1,
              allowed: null,
              sproutVideoAccounts: {
                sprout1: "1",
                sprout2: "2",
                sprout3: "3",
                sprout4: "4",
                sprout5: "5",
                sprout6: "6",
                "sprout7-8": "7-8",
                "sprout9-10": "9-10",
                "sprout11-12": "11-12",
                "sprout13-15": "13-15",
                "sprout16-18": "16-18",
              },
              selectedValues: [],
              isChecked: !1,
              sv_errors: [],
            };
          },
          computed: {
            concatenatedValues: function () {
              return this.selectedValues.join("_");
            },
            options: function () {
              var e = this;
              return Object.keys(this.sproutVideoAccounts).map(function (t) {
                return { value: e.sproutVideoAccounts[t], text: t };
              });
            },
            is_button_disabled: function () {
              return 0 == this.selectedValues.length;
            },
          },
          methods: {
            handleLoginEvent: function (e) {
              (this.isAuthenticated = e.loggedIn), (this.profile = e.profile);
            },
            checkDomain: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (e.IsChecking = !0), (e.sv_errors = []), (t.prev = 2), (t.next = 5), Ve(e.form.domain);
                          case 5:
                            (e.allowed = t.sent), (e.isChecked = !0), (t.next = 12);
                            break;
                          case 9:
                            (t.prev = 9),
                              (t.t0 = t["catch"](2)),
                              t.t0.response && 404 === t.t0.response.status
                                ? e.sv_errors.push("Cannot get information for domain")
                                : t.t0.response && 500 === t.t0.response.status
                                  ? e.sv_errors.push("Internal Server Error")
                                  : console.log(t.t0);
                          case 12:
                            e.IsChecking = !1;
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[2, 9]]
                  );
                })
              )();
            },
            addDomain: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  var n;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (e.IsAdding = !0), (e.sv_errors = []), (t.prev = 2), (t.next = 5), Ge(e.form.domain, e.concatenatedValues);
                          case 5:
                            return (
                              (n = t.sent),
                              console.log("Domain(s) added: " + n),
                              (e.selectedValues = []),
                              (t.prev = 8),
                              (t.next = 11),
                              Ve(e.form.domain)
                            );
                          case 11:
                            (e.allowed = t.sent), (t.next = 17);
                            break;
                          case 14:
                            (t.prev = 14),
                              (t.t0 = t["catch"](8)),
                              t.t0.response && 404 === t.t0.response.status
                                ? e.sv_errors.push("Cannot get information for domain")
                                : t.t0.response && 500 === t.t0.response.status
                                  ? e.sv_errors.push("Internal Server Error")
                                  : console.log(t.t0);
                          case 17:
                            t.next = 22;
                            break;
                          case 19:
                            (t.prev = 19),
                              (t.t1 = t["catch"](2)),
                              t.t1.response && 404 === t.t1.response.status
                                ? e.sv_errors.push("Problem adding account(s) for the domain")
                                : t.t1.response && 500 === t.t1.response.status
                                  ? e.sv_errors.push("Internal Server Error")
                                  : console.log(t.t1);
                          case 22:
                            e.IsAdding = !1;
                          case 23:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [
                      [2, 19],
                      [8, 14],
                    ]
                  );
                })
              )();
            },
            removeDomain: function () {
              var e = this;
              return Object(T["a"])(
                regeneratorRuntime.mark(function t() {
                  var n;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (e.IsRemoving = !0), (e.sv_errors = []), (t.prev = 2), (t.next = 5), Ke(e.form.domain, e.concatenatedValues);
                          case 5:
                            return (n = t.sent), console.log("Domain(s) removed: " + n), (e.selectedValues = []), (t.next = 10), Ve(e.form.domain);
                          case 10:
                            (e.allowed = t.sent), (t.next = 16);
                            break;
                          case 13:
                            (t.prev = 13),
                              (t.t0 = t["catch"](2)),
                              t.t0.response && 404 === t.t0.response.status
                                ? e.sv_errors.push("Problem removing account(s) for the domain")
                                : t.t0.response && 500 === t.t0.response.status
                                  ? e.sv_errors.push("Internal Server Error")
                                  : console.log(t.t0);
                          case 16:
                            e.IsRemoving = !1;
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[2, 13]]
                  );
                })
              )();
            },
          },
        }),
      Mr = Dr,
      Lr = Object(p["a"])(Mr, Ir, Or, !1, null, null, null),
      Nr = Lr.exports,
      jr = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticStyle: { width: "600px" } },
          [
            n(
              "b-card",
              [
                n("h3", [e._v("Manage Product")]),
                n("br"),
                n(
                  "b-card-text",
                  [
                    n(
                      "b-input-group",
                      { staticClass: "mb-3", attrs: { prepend: "Product Code" } },
                      [
                        n("b-form-input", {
                          attrs: { trim: "", autocomplete: "off", type: "text", placeholder: "Enter product code", readonly: e.isEditing },
                          model: {
                            value: e.form.product_code,
                            callback: function (t) {
                              e.$set(e.form, "product_code", t);
                            },
                            expression: "form.product_code",
                          },
                        }),
                        n(
                          "b-input-group-append",
                          [
                            n(
                              "b-button",
                              { attrs: { variant: "success" }, on: { click: e.checkProduct } },
                              [
                                e._v("Check Product "),
                                e.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e.product
                      ? n(
                          "div",
                          [
                            n("p", [
                              n("strong", [e._v("Stripe Price ID:")]),
                              e._v(" " + e._s(e.product.stripe_price_id)),
                              n("br"),
                              n("strong", [e._v("Name:")]),
                              e._v(" " + e._s(e.product.name)),
                              n("br"),
                              n("strong", [e._v("Units For Teacher:")]),
                              e._v(" " + e._s(e.product.units_for_teacher.map(Number))),
                              n("br"),
                            ]),
                            e.isEditing
                              ? e._e()
                              : n("b-button", { attrs: { variant: "success" }, on: { click: e.enableEditing } }, [e._v("Update Product?")]),
                            e.isEditing
                              ? n(
                                  "div",
                                  [
                                    n(
                                      "b-input-group",
                                      { staticClass: "mb-3", attrs: { prepend: "Stripe Price ID" } },
                                      [
                                        n("b-form-input", {
                                          attrs: { autocomplete: "off", type: "text" },
                                          model: {
                                            value: e.editableProduct.stripe_price_id,
                                            callback: function (t) {
                                              e.$set(e.editableProduct, "stripe_price_id", t);
                                            },
                                            expression: "editableProduct.stripe_price_id",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n(
                                      "b-input-group",
                                      { staticClass: "mb-3", attrs: { prepend: "Name" } },
                                      [
                                        n("b-form-input", {
                                          attrs: { autocomplete: "off", type: "text" },
                                          model: {
                                            value: e.editableProduct.name,
                                            callback: function (t) {
                                              e.$set(e.editableProduct, "name", t);
                                            },
                                            expression: "editableProduct.name",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n(
                                      "div",
                                      { staticClass: "mb-3" },
                                      [
                                        n("label", [e._v("Units For Teacher: ")]),
                                        n("span", [e._v(e._s(e.editableProduct.units_for_teacher.map(Number)))]),
                                        n("b-form-select", {
                                          staticClass: "mt-2 mb-2",
                                          attrs: { options: e.units_for_teacher_options, multiple: "", "select-size": 12 },
                                          model: {
                                            value: e.editableProduct.units_for_teacher,
                                            callback: function (t) {
                                              e.$set(e.editableProduct, "units_for_teacher", t);
                                            },
                                            expression: "editableProduct.units_for_teacher",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    n(
                                      "b-button",
                                      {
                                        staticClass: "mr-2 mb-2",
                                        attrs: { variant: "success", disabled: !e.editableProduct.name || !e.editableProduct.stripe_price_id },
                                        on: { click: e.updateProduct },
                                      },
                                      [e._v("Update")]
                                    ),
                                    n("b-button", { staticClass: "mb-2", attrs: { variant: "success" }, on: { click: e.cancelEdit } }, [
                                      e._v("Cancel"),
                                    ]),
                                    e.errorMessage ? n("p", { staticClass: "text-danger" }, [e._v(e._s(e.errorMessage))]) : e._e(),
                                  ],
                                  1
                                )
                              : e._e(),
                          ],
                          1
                        )
                      : e.searched
                        ? n(
                            "div",
                            [
                              n("span", [e._v("No product found. Create a new product for " + e._s(e.product_code))]),
                              n(
                                "b-input-group",
                                { staticClass: "mb-3", attrs: { prepend: "Stripe Price ID" } },
                                [
                                  n("b-form-input", {
                                    attrs: { autocomplete: "off", type: "text" },
                                    model: {
                                      value: e.newProduct.stripe_price_id,
                                      callback: function (t) {
                                        e.$set(e.newProduct, "stripe_price_id", t);
                                      },
                                      expression: "newProduct.stripe_price_id",
                                    },
                                  }),
                                ],
                                1
                              ),
                              n(
                                "b-input-group",
                                { staticClass: "mb-3", attrs: { prepend: "Name" } },
                                [
                                  n("b-form-input", {
                                    attrs: { autocomplete: "off", type: "text" },
                                    model: {
                                      value: e.newProduct.name,
                                      callback: function (t) {
                                        e.$set(e.newProduct, "name", t);
                                      },
                                      expression: "newProduct.name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              n(
                                "div",
                                { staticClass: "mb-3" },
                                [
                                  n("label", [e._v("Units For Teacher: ")]),
                                  n("span", [e._v(e._s(e.newProduct.units_for_teacher))]),
                                  n("b-form-select", {
                                    staticClass: "mt-2 mb-2",
                                    attrs: { options: e.units_for_teacher_options, multiple: "", "select-size": 12 },
                                    model: {
                                      value: e.newProduct.units_for_teacher,
                                      callback: function (t) {
                                        e.$set(e.newProduct, "units_for_teacher", t);
                                      },
                                      expression: "newProduct.units_for_teacher",
                                    },
                                  }),
                                ],
                                1
                              ),
                              n(
                                "b-button",
                                {
                                  staticClass: "mb-2",
                                  attrs: { variant: "success", disabled: !e.newProduct.name || !e.newProduct.stripe_price_id },
                                  on: { click: e.createProduct },
                                },
                                [e._v("Create Product ")]
                              ),
                              e.errorMessage ? n("p", { staticClass: "text-danger" }, [e._v(e._s(e.errorMessage))]) : e._e(),
                            ],
                            1
                          )
                        : e._e(),
                  ],
                  1
                ),
                e.invalid ? n("div", [e._v(" Product Code, Stripe Price ID, and Name fields cannot be blank ")]) : e._e(),
                n("b-card-text"),
              ],
              1
            ),
          ],
          1
        );
      },
      Wr = [],
      Ur = (n("a630"), n("3ca3"), n("2909")),
      Fr = n("5530"),
      Br = {
        data: function () {
          return {
            form: { product_code: "" },
            product: null,
            product_code: "",
            name: "",
            staticUnitsForTeacher: "",
            isEditing: !1,
            isSending: !1,
            editableProduct: null,
            newProduct: { product_code: "", stripe_price_id: "", name: "", units_for_teacher: [] },
            invalid: !1,
            searched: !1,
            errorMessage: "",
            units_for_teacher_options: Array.from({ length: 19 }, function (e, t) {
              return { value: t + 1, text: "Unit ".concat(t + 1) };
            }),
          };
        },
        methods: {
          handleLoginEvent: function (e) {
            (this.isAuthenticated = e.loggedIn), (this.profile = e.profile);
          },
          enableEditing: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (e.editableProduct = Object(Fr["a"])(
                          Object(Fr["a"])({}, e.product),
                          {},
                          { units_for_teacher: Object(Ur["a"])(e.product.units_for_teacher) }
                        )),
                          (e.isEditing = !0);
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          checkProduct: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((e.errorMessage = ""),
                            (e.isSending = !0),
                            (e.searched = !1),
                            (e.product_code = e.form.product_code),
                            (e.isEditing = !1),
                            (e.newProduct.product_code = ""),
                            (e.newProduct.name = ""),
                            (e.newProduct.stripe_price_id = ""),
                            (e.newProduct.units_for_teacher = []),
                            (t.prev = 9),
                            !e.form.product_code)
                          ) {
                            t.next = 18;
                            break;
                          }
                          return (t.next = 13), Xe(e.form.product_code);
                        case 13:
                          (n = t.sent),
                            (e.product = n.product),
                            e.product &&
                              ((e.product_code = e.product.product_code),
                              (e.stripe_price_id = e.product.stripe_price_id),
                              (e.name = e.product.name),
                              (e.staticUnitsForTeacher = e.product.units_for_teacher.slice().sort(function (e, t) {
                                return e - t;
                              })),
                              (e.invalid = !1)),
                            (t.next = 19);
                          break;
                        case 18:
                          e.invalid = !0;
                        case 19:
                          (e.searched = !0), (t.next = 26);
                          break;
                        case 22:
                          (t.prev = 22), (t.t0 = t["catch"](9)), console.log(t.t0), (e.searched = !0);
                        case 26:
                          (e.invalid = !1), (e.isSending = !1);
                        case 28:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[9, 22]]
                );
              })
            )();
          },
          createProduct: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((e.isSending = !0),
                            (e.errorMessage = ""),
                            (t.prev = 2),
                            !(e.form.product_code && e.newProduct.stripe_price_id && e.newProduct.name))
                          ) {
                            t.next = 13;
                            break;
                          }
                          return (
                            (e.newProduct.product_code = e.form.product_code),
                            (t.next = 7),
                            Ze(e.newProduct.product_code, e.newProduct.stripe_price_id, e.newProduct.name, e.newProduct.units_for_teacher)
                          );
                        case 7:
                          (n = t.sent),
                            (e.errorMessage = n.message),
                            null == e.errorMessage &&
                              ((e.product = Object(Fr["a"])({}, e.newProduct)),
                              (e.isEditing = !1),
                              (e.stripe_price_id = e.product.stripe_price_id),
                              (e.name = e.product.name),
                              (e.staticUnitsForTeacher = e.product.units_for_teacher.slice().sort(function (e, t) {
                                return e - t;
                              }))),
                            (e.invalid = !1),
                            (t.next = 14);
                          break;
                        case 13:
                          e.invalid = !0;
                        case 14:
                          t.next = 19;
                          break;
                        case 16:
                          (t.prev = 16), (t.t0 = t["catch"](2)), console.log(t.t0);
                        case 19:
                          e.isSending = !1;
                        case 20:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 16]]
                );
              })
            )();
          },
          updateProduct: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (console.log(e.product),
                            (e.isSending = !0),
                            (e.errorMessage = ""),
                            (t.prev = 3),
                            !e.product.product_code || !e.product.stripe_price_id)
                          ) {
                            t.next = 12;
                            break;
                          }
                          return (
                            (t.next = 7),
                            tt(
                              e.editableProduct.product_code,
                              e.editableProduct.stripe_price_id,
                              e.editableProduct.name,
                              e.editableProduct.units_for_teacher
                            )
                          );
                        case 7:
                          (n = t.sent),
                            (e.errorMessage = n.message),
                            null == e.errorMessage &&
                              ((e.product = Object(Fr["a"])({}, e.editableProduct)),
                              (e.isEditing = !1),
                              (e.stripe_price_id = e.product.stripe_price_id),
                              (e.name = e.product.name),
                              (e.staticUnitsForTeacher = e.product.units_for_teacher.slice().sort(function (e, t) {
                                return e - t;
                              }))),
                            (t.next = 13);
                          break;
                        case 12:
                          e.invalid = !0;
                        case 13:
                          t.next = 18;
                          break;
                        case 15:
                          (t.prev = 15), (t.t0 = t["catch"](3)), console.log(t.t0);
                        case 18:
                          e.isSending = !1;
                        case 19:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 15]]
                );
              })
            )();
          },
          cancelEdit: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (e.editableProduct = Object(Fr["a"])({}, e.product)), (e.isEditing = !1);
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
      },
      Hr = Br,
      zr = Object(p["a"])(Hr, jr, Wr, !1, null, null, null),
      Yr = zr.exports,
      Vr = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { staticClass: "mt-2", staticStyle: { width: "400px" } },
          [
            e.membership
              ? n(
                  "b-card",
                  { staticClass: "text-center", attrs: { header: e.membership.context.context_title } },
                  [
                    n(
                      "b-card-text",
                      { staticClass: "text-left" },
                      [
                        "agree" === e.show_form
                          ? n("div", [
                              n(
                                "div",
                                { staticClass: "mb-4" },
                                [
                                  n(
                                    "b-form-checkbox",
                                    {
                                      attrs: { name: "agreed", value: "yes", "unchecked-value": "no" },
                                      model: {
                                        value: e.form.agreed,
                                        callback: function (t) {
                                          e.$set(e.form, "agreed", t);
                                        },
                                        expression: "form.agreed",
                                      },
                                    },
                                    [
                                      e._v(" Yes, I have read and I do agree with TRUE+WAY ASL's "),
                                      n("a", { attrs: { href: "https://truewayasl.com/terms", target: "_blank" } }, [e._v("Terms of Use")]),
                                      e._v(" and "),
                                      n("a", { attrs: { href: "https://truewayasl.com/privacy", target: "_blank" } }, [e._v("Privacy Policy")]),
                                      e._v(". "),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              n("div", [e._v(" Please choose below to enter your access code or to make payment to gain access to your course. ")]),
                              n(
                                "div",
                                { staticClass: "mt-4 text-center" },
                                [
                                  n(
                                    "b-button",
                                    {
                                      staticClass: "mr-3",
                                      attrs: { variant: "success", disabled: "no" === e.form.agreed },
                                      on: {
                                        click: function (t) {
                                          e.show_form = "coupons";
                                        },
                                      },
                                    },
                                    [e._v("Enter Access Code ")]
                                  ),
                                  n("b-button", { attrs: { variant: "success", disabled: "no" === e.form.agreed }, on: { click: e.checkout } }, [
                                    e._v("Make Payment "),
                                  ]),
                                ],
                                1
                              ),
                            ])
                          : "coupons" === e.show_form
                            ? n(
                                "div",
                                [
                                  n(
                                    "b-input-group",
                                    { attrs: { prepend: "Access Code" } },
                                    [
                                      n("b-form-input", {
                                        attrs: { maxlength: "20", type: "text" },
                                        model: {
                                          value: e.form.coupon,
                                          callback: function (t) {
                                            e.$set(e.form, "coupon", "string" === typeof t ? t.trim() : t);
                                          },
                                          expression: "form.coupon",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  n(
                                    "ul",
                                    { staticClass: "mt-3" },
                                    e._l(e.coupon_errors, function (t) {
                                      return n("li", { key: t, staticStyle: { color: "red" } }, [e._v(e._s(t))]);
                                    }),
                                    0
                                  ),
                                  n(
                                    "b-button",
                                    { staticClass: "mt-3", attrs: { variant: "success" }, on: { click: e.verifyCoupon } },
                                    [
                                      e._v("Submit "),
                                      this.isSending ? n("b-spinner", { staticClass: "m-1", attrs: { label: "Spinning", small: "" } }) : e._e(),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : "thank_you" === e.show_form
                              ? n("div", [
                                  n("p", [
                                    e._v(
                                      "Congratulations on unlocking the TRUE+WAY ASL digital textbook. You may close this window. Enjoy learning TRUE+WAY ASL!"
                                    ),
                                  ]),
                                  n("small", { staticClass: "text-muted" }, [e._v("token: " + e._s(e.membership.token))]),
                                ])
                              : n(
                                  "div",
                                  [
                                    e._v(" Hang on. Getting info... "),
                                    n("b-spinner", {
                                      staticClass: "ml-2",
                                      staticStyle: { width: "1.5rem", height: "1.5rem" },
                                      attrs: { variant: "secondary" },
                                    }),
                                  ],
                                  1
                                ),
                        n("stripe-checkout", { ref: "checkoutRef", attrs: { pk: e.stripe_key, "session-id": e.session_id } }),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : n("b-card", [
                  "not_found" === this.show_form
                    ? n("div", [e._v(" Your token " + e._s(this.token) + " can not found. Typo? ")])
                    : n(
                        "div",
                        [
                          e._v(" Hang on. Getting info.. "),
                          n("b-spinner", {
                            staticClass: "ml-2",
                            staticStyle: { width: "1.5rem", height: "1.5rem" },
                            attrs: { variant: "secondary" },
                          }),
                        ],
                        1
                      ),
                ]),
          ],
          1
        );
      },
      qr = [],
      Gr = {
        components: { StripeCheckout: Rt["StripeCheckout"] },
        data: function () {
          return { form: { agreed: "no", coupon: null }, isSending: !1, show_form: "default", coupon_errors: [], membership: null };
        },
        computed: {
          token: function () {
            return this.$route.query.token || null;
          },
          stripe_key: function () {
            return "pk_live_6hvrgm1Y0ErWQJIhmct81aTp";
          },
          session_id: function () {
            return this.membership ? this.membership.session_id : null;
          },
        },
        methods: {
          getMembership: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!e.token) {
                            t.next = 14;
                            break;
                          }
                          return (t.prev = 1), (t.next = 4), Ct(e.token);
                        case 4:
                          (e.membership = t.sent),
                            console.log("Membership", e.membership),
                            e.membership.processed_at ? (e.show_form = "thank_you") : (e.show_form = "agree"),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9), (t.t0 = t["catch"](1)), t.t0.response && 404 === t.t0.response.status && (e.show_form = "not_found");
                        case 12:
                          t.next = 15;
                          break;
                        case 14:
                          console.log("No token");
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 9]]
                );
              })
            )();
          },
          verifyCoupon: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((e.isSending = !0), (t.prev = 1), !e.checkCouponForm())) {
                            t.next = 19;
                            break;
                          }
                          return console.log("Verifying Coupon", e.token, e.form.coupon), (t.next = 6), At(e.token, e.form.coupon);
                        case 6:
                          (n = t.sent),
                            console.log("Verifying Coupon Response", n),
                            (t.t0 = n.status),
                            (t.next =
                              "PROCESSED" === t.t0
                                ? 11
                                : "MAX" === t.t0
                                  ? 13
                                  : "MAX_SAME_EMAIL" === t.t0
                                    ? 15
                                    : "MAX_OTHER_EMAIL" === t.t0
                                      ? 17
                                      : 19);
                          break;
                        case 11:
                          return (e.show_form = "thank_you"), t.abrupt("break", 19);
                        case 13:
                          return e.coupon_errors.push("This code has run out of uses. Please let your teacher know."), t.abrupt("break", 19);
                        case 15:
                          return (
                            e.coupon_errors.push(
                              "You've already used this code for another course. To transfer the code, please contact us using the chat button below."
                            ),
                            t.abrupt("break", 19)
                          );
                        case 17:
                          return (
                            e.coupon_errors.push(
                              "This code has already been used. Please return the code to where you got the code from and get a new one."
                            ),
                            t.abrupt("break", 19)
                          );
                        case 19:
                          t.next = 24;
                          break;
                        case 21:
                          (t.prev = 21),
                            (t.t1 = t["catch"](1)),
                            t.t1.response && 404 === t.t1.response.status
                              ? e.coupon_errors.push(t.t1.response.data.message)
                              : t.t1.response && 500 === t.t1.response.status
                                ? e.coupon_errors.push("Internal Server Error.")
                                : e.notifyMe(e.getErrorMessage(t.t1));
                        case 24:
                          e.isSending = !1;
                        case 25:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 21]]
                );
              })
            )();
          },
          checkout: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        try {
                          e.$refs.checkoutRef.redirectToCheckout();
                        } catch (n) {
                          e.notifyMe(e.getErrorMessage(n));
                        }
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          checkCouponForm: function () {
            if (
              ((this.coupon_errors = []),
              this.form.coupon || this.coupon_errors.push("Please enter the access code."),
              this.form.coupon && this.form.coupon.length < 6 && this.coupon_errors.push("The code given is not right."),
              !this.coupon_errors.length)
            )
              return !0;
          },
          getErrorMessage: function (e) {
            console.log(e);
            var t = e.message;
            return "Network Error" === t && (this.network_error = !0), e.response && (t = e.response.statusText), t;
          },
          notifyMe: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "danger";
            this.$bvToast.toast(e, { title: "Notification", solid: !0, variant: t, autoHideDelay: 2500, appendToast: !0 });
          },
          createScriptTag: function (e) {
            var t = document.createElement("script");
            return (t.type = "text/javascript"), (t.text = e), t;
          },
          addBeaconScript: function () {
            var e =
                '!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});',
              t = "window.Beacon('init', '99c004f4-81f5-469f-841d-a4e7ab4d7d6d');",
              n = this.createScriptTag(e),
              r = this.createScriptTag(t);
            document.head.appendChild(n), document.head.appendChild(r);
          },
          buildSessionDataForBeacon: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                var n, r, o;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (n = e.membership.context.deployment.credential.platform.iss),
                          (r = e.membership.context.context_label),
                          (o = e.membership.context.context_title),
                          window.Beacon("session-data", { "LTI 1.3 Token": e.token, Domain: n, Label: r, Title: o }),
                          window.Beacon("identify", { email: e.membership.email });
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
        mounted: function () {
          var e = this;
          return Object(T["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), e.getMembership();
                    case 2:
                      e.addBeaconScript(), e.buildSessionDataForBeacon();
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
      },
      $r = Gr,
      Kr = Object(p["a"])($r, Vr, qr, !1, null, null, null),
      Qr = Kr.exports,
      Xr = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("b-container", [n("Wts")], 1);
      },
      Jr = [],
      Zr = { name: "dictionary", components: { Wts: Qt } },
      eo = Zr,
      to = Object(p["a"])(eo, Xr, Jr, !1, null, null, null),
      no = to.exports,
      ro = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "b-container",
          { attrs: { fluid: "" } },
          [
            e.show
              ? n("div", [n("Teacher", { attrs: { units_for_teacher: e.units_for_teacher } })], 1)
              : n(
                  "b-card",
                  { staticClass: "text-center" },
                  [
                    e.load
                      ? n("b-card-text", [e._v("Loading")])
                      : n("b-card-text", [
                          n("p", [e._v("It looks like the page expired. Please close the page and try again.")]),
                          n("p", [e._v("If it still doesn't work, contact us at hello@truewayasl.com")]),
                        ]),
                  ],
                  1
                ),
            n("div", { staticClass: "text-right" }, [n("span", { staticClass: "small text-muted" }, [e._v("token: " + e._s(this.token))])]),
          ],
          1
        );
      },
      oo = [],
      io = {
        components: { Teacher: en },
        data: function () {
          return { units_for_teacher: ["1"], show: !1, load: !0 };
        },
        computed: {
          state: function () {
            return this.$route.query.state || null;
          },
          token: function () {
            return this.$route.query.token || null;
          },
        },
        methods: {
          checkAccess: function () {
            var e = this;
            return Object(T["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), kt("teacher", e.token, e.state);
                        case 3:
                          (n = t.sent), console.log("response", n), (e.units_for_teacher = n.units_for_teacher), (e.show = !0), (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9), (t.t0 = t["catch"](0)), console.log(t.t0);
                        case 12:
                          e.load = !1;
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
        },
        mounted: function () {
          this.checkAccess();
        },
      },
      so = io,
      ao = Object(p["a"])(so, ro, oo, !1, null, null, null),
      lo = ao.exports;
    r["default"].use(F["a"]);
    var co = [
        { path: "/", redirect: "/home" },
        { path: "/home", component: ht },
        { path: "/dictionary", component: pn },
        { path: "/lti/wts", component: no },
        { path: "/lti/pay", component: Qr },
        { path: "/lti/teacher", component: lo },
        { path: "/pay", component: Mt },
        { path: "/teacher", component: on },
        { path: "/lti_success", component: Ft },
        { path: "/enroll", component: vn },
        { path: "/verify", component: Cn },
        { path: "/success", component: Rn },
        { path: "/login", component: Nn },
        { path: "/access_code", component: Hn },
        { path: "/access_code/:code", component: Hn },
        { path: "/token", component: er },
        { path: "/email", component: sr },
        { path: "/course", component: $n },
        { path: "/course/:context_id", component: $n },
        {
          path: "/about",
          name: "About",
          component: function () {
            return n.e("about").then(n.bind(null, "f820"));
          },
        },
        { path: "/import_access_codes", component: dr },
        { path: "/import_access_codes:file", component: dr },
        { path: "/manage_consumer", component: br },
        { path: "/create_platform", component: Cr },
        { path: "/activate_course", component: Rr },
        { path: "/activate_course/:token", component: Rr },
        { path: "/manage_sproutvideo", component: Nr },
        { path: "/manage_product", component: Yr },
      ],
      uo = new F["a"]({ mode: "history", routes: co });
    uo.beforeEach(function (e, t, n) {
      console.log("Routing from '" + t.fullPath + "' to '" + e.fullPath + "'");
      var r = ["/access_code", "/course", "/token", "/email", "/manage_consumer", "/create_platform", "/activate_course"],
        o = [
          "/lti_teacher",
          "/lti/wts",
          "/lti/pay",
          "/lti/teacher",
          "/home",
          "/verify",
          "/enroll",
          "/success",
          "/lti_success",
          "/login",
          "/dictionary",
          "/pay",
          "/teacher",
          "consumer",
        ];
      return o.find(function (t) {
        return t === e.path;
      }) || ct.isAuthenticated()
        ? n()
        : r.find(function (t) {
              return e.path.startsWith(t);
            })
          ? n({ path: "/login", query: { redirect: e.fullPath } })
          : void n({ path: "/" });
    });
    var po = uo,
      mo = {
        install: function (e) {
          (e.prototype.$auth = ct),
            e.mixin({
              created: function () {
                this.handleLoginEvent && ct.addListener("loginEvent", this.handleLoginEvent);
              },
              destroyed: function () {
                this.handleLoginEvent && ct.removeListener("loginEvent", this.handleLoginEvent);
              },
            });
        },
      };
    r["default"].filter("phone", function (e) {
      return e.replace(/[^0-9]/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    });
    n("f669");
    var ho = n("5f5b"),
      fo = n("b1e0"),
      go = n("ecee"),
      vo = n("c074"),
      bo = n("ad3d");
    (r["default"].prototype.$http = y.a),
      go["c"].add(vo["b"], vo["a"], vo["h"], vo["i"], vo["d"], vo["g"], vo["c"], vo["f"], vo["e"]),
      r["default"].component("font-awesome-icon", bo["a"]),
      r["default"].use(o["a"]),
      r["default"].use(mo),
      r["default"].use(ho["a"]),
      r["default"].use(fo["a"]),
      (r["default"].config.productionTip = !1),
      new r["default"]({
        store: U,
        router: po,
        render: function (e) {
          return e(v);
        },
      }).$mount("#app");
  },
  "5c0b": function (e, t, n) {
    "use strict";
    var r = n("9c0c"),
      o = n.n(r);
    o.a;
  },
  "60f4": function (e, t, n) {},
  "721d": function (e, t, n) {},
  "9c0c": function (e, t, n) {},
  d6db: function (e, t, n) {
    "use strict";
    var r = n("e67a"),
      o = n.n(r);
    o.a;
  },
  db2e: function (e, t, n) {
    "use strict";
    var r = n("0c7c"),
      o = n.n(r);
    o.a;
  },
  e67a: function (e, t, n) {},
  f669: function (e, t, n) {},
  f8b7: function (e, t, n) {
    "use strict";
    var r = n("721d"),
      o = n.n(r);
    o.a;
  },
});
//# sourceMappingURL=app.af76477f.js.map

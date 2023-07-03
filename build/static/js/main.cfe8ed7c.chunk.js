(this["webpackJsonpAdmin Panel"] = this["webpackJsonpAdmin Panel"] || []).push([
  [2],
  {
    169: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var r = n(831),
        a = n(1);
      function c(e) {
        var t = e.children;
        e.type;
        return Object(a.jsx)(r.a.div, {
          whileHover: { scale: 1 },
          whileTap: { scale: 0.9 },
          children: t,
        });
      }
      c.defaultProps = { type: "scale" };
    },
    250: function (e, t, n) {
      "use strict";
      var r = n(46),
        a = n(906),
        c = n(27),
        i = (n.p, n(1)),
        o = function () {
          Object(c.a)();
          return Object(i.jsx)(i.Fragment, {
            children: Object(i.jsx)("h5", {
              style: { marginTop: "25px", marginLeft: "40px" },
              children: "Admin Panel ",
            }),
          });
        },
        l = n(77);
      t.a = function (e) {
        var t = e.sx,
          n = e.to;
        return Object(i.jsx)(a.a, {
          disableRipple: !0,
          component: r.b,
          to: n || l.a.defaultPath,
          sx: t,
          children: Object(i.jsx)(o, {}),
        });
      };
    },
    383: function (e, t, n) {
      "use strict";
    },
    384: function (e, t, n) {
      "use strict";
      var r = n(21),
        a = n(8),
        c = n(6),
        i = n(15),
        o = n.n(i),
        l = n(0),
        s = n.n(l),
        u = n(46),
        d = n(124),
        p = n(239),
        j = n(376),
        b = n(377),
        h = n(240),
        m = n(839),
        f = n(838),
        O = n(836),
        x = n(835),
        g = n(837),
        v = n(833),
        y = n(178),
        w = n(337),
        S = n(169),
        k = n(840),
        C = n(841),
        z = n(74),
        P = n(832),
        T = n(18),
        I = n(1),
        L = s.a.forwardRef(function (e, t) {
          return Object(I.jsx)(
            P.a,
            Object(c.a)({ elevation: 6, ref: t, variant: "filled" }, e)
          );
        });
      t.a = function () {
        var e = s.a.useState(!1),
          t = Object(a.a)(e, 2),
          n = t[0],
          c = t[1],
          i = s.a.useState(!1),
          l = Object(a.a)(i, 2),
          P = l[0],
          N = l[1],
          M = s.a.useState(!1),
          D = Object(a.a)(M, 2),
          F = D[0],
          B = D[1],
          E = s.a.useState({}),
          W = Object(a.a)(E, 2),
          A = (W[0], W[1]),
          R = s.a.useState({}),
          H = Object(a.a)(R, 2),
          G = H[0],
          U = H[1],
          _ = s.a.useState(""),
          q = Object(a.a)(_, 2),
          V = (q[0], q[1]),
          X = s.a.useState(""),
          J = Object(a.a)(X, 2),
          Y = (J[0], J[1]),
          K =
            (Object(T.e)(),
            (function () {
              var e = Object(r.a)(
                o.a.mark(function e(t) {
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          console.log(t),
                            V(t.email),
                            Y(t.password),
                            c(!0),
                            Object(z.a)(t.email, t.password)
                              .then(function (e) {
                                c(!1),
                                  localStorage.setItem("siemToken", "-----"),
                                  localStorage.setItem(
                                    "userdata",
                                    JSON.stringify(e.data)
                                  ),
                                  console.log("Success"),
                                  console.log(e.data),
                                  U(e),
                                  window.location.replace("/");
                              })
                              .catch(function (e) {
                                B(!0), N(!0), c(!1), console.log(e);
                              });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })());
        console.log(G);
        var Q = s.a.useState(!1),
          Z = Object(a.a)(Q, 2),
          $ = Z[0],
          ee = Z[1],
          te = function () {
            ee(!$);
          },
          ne = function (e) {
            e.preventDefault();
          },
          re = function (e, t) {
            "clickaway" !== t && B(!1);
          };
        return Object(I.jsxs)(I.Fragment, {
          children: [
            P &&
              Object(I.jsx)(v.a, {
                open: F,
                autoHideDuration: 6e3,
                onClose: re,
                children: Object(I.jsx)(L, {
                  severity: "error",
                  sx: { width: "100%" },
                  onClose: re,
                  style: { color: "white" },
                  children: "Wrong Email or Password!",
                }),
              }),
            Object(I.jsx)(w.a, {
              initialValues: { email: "", password: "", submit: null },
              validationSchema: y
                .a()
                .shape({
                  email: y.b().max(255).required("Username is required"),
                  password: y.b().max(255).required("Password is required"),
                }),
              onSubmit: (function () {
                var e = Object(r.a)(
                  o.a.mark(function e(t, n) {
                    var r, a, c;
                    return o.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (r = n.setErrors),
                              (a = n.setStatus),
                              (c = n.setSubmitting);
                            try {
                              a({ success: !1 }),
                                c(!1),
                                A(t),
                                console.log(t),
                                K(t);
                            } catch (i) {
                              a({ success: !1 }),
                                r({ submit: i.message }),
                                c(!1);
                            }
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              children: function (e) {
                var t = e.errors,
                  r = e.handleBlur,
                  a = e.handleChange,
                  c = e.handleSubmit,
                  i = e.isSubmitting,
                  o = e.touched,
                  l = e.values;
                return Object(I.jsx)("form", {
                  noValidate: !0,
                  onSubmit: c,
                  children: Object(I.jsxs)(d.a, {
                    container: !0,
                    spacing: 3,
                    children: [
                      Object(I.jsx)(d.a, {
                        item: !0,
                        xs: 12,
                        children: Object(I.jsxs)(p.a, {
                          spacing: 1,
                          children: [
                            Object(I.jsx)(j.a, {
                              htmlFor: "email-login",
                              children: "Username",
                            }),
                            Object(I.jsx)(b.a, {
                              id: "email-login",
                              type: "email",
                              value: l.email,
                              name: "email",
                              onBlur: r,
                              onChange: a,
                              placeholder: "Enter username",
                              fullWidth: !0,
                              style: { color: "black" },
                              error: Boolean(o.email && t.email),
                            }),
                            o.email &&
                              t.email &&
                              Object(I.jsx)(h.a, {
                                error: !0,
                                id: "standard-weight-helper-text-email-login",
                                children: t.email,
                              }),
                          ],
                        }),
                      }),
                      Object(I.jsx)(d.a, {
                        item: !0,
                        xs: 12,
                        children: Object(I.jsxs)(p.a, {
                          spacing: 1,
                          children: [
                            Object(I.jsx)(j.a, {
                              htmlFor: "password-login",
                              children: "Password",
                            }),
                            Object(I.jsx)(b.a, {
                              fullWidth: !0,
                              error: Boolean(o.password && t.password),
                              id: "-password-login",
                              type: $ ? "text" : "password",
                              value: l.password,
                              name: "password",
                              onBlur: r,
                              style: { color: "black" },
                              onChange: a,
                              endAdornment: Object(I.jsx)(m.a, {
                                position: "end",
                                children: Object(I.jsx)(f.a, {
                                  "aria-label": "toggle password visibility",
                                  onClick: te,
                                  onMouseDown: ne,
                                  edge: "end",
                                  size: "large",
                                  children: $
                                    ? Object(I.jsx)(k.a, {})
                                    : Object(I.jsx)(C.a, {}),
                                }),
                              }),
                              placeholder: "Enter password",
                            }),
                            o.password &&
                              t.password &&
                              Object(I.jsx)(h.a, {
                                error: !0,
                                id: "standard-weight-helper-text-password-login",
                                children: t.password,
                              }),
                          ],
                        }),
                      }),
                      Object(I.jsx)(d.a, {
                        item: !0,
                        xs: 12,
                        sx: { mt: -1 },
                        children: Object(I.jsx)(p.a, {
                          direction: "row",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          spacing: 2,
                          children: Object(I.jsx)(O.a, {
                            variant: "h6",
                            component: u.b,
                            to: "",
                            color: "text.primary",
                            children: "Forgot Password?",
                          }),
                        }),
                      }),
                      t.submit &&
                        Object(I.jsx)(d.a, {
                          item: !0,
                          xs: 12,
                          children: Object(I.jsx)(h.a, {
                            error: !0,
                            children: t.submit,
                          }),
                        }),
                      Object(I.jsx)(d.a, {
                        item: !0,
                        xs: 12,
                        children: Object(I.jsxs)(S.a, {
                          children: [
                            Object(I.jsx)(x.a, {
                              disableElevation: !0,
                              disabled: i || n,
                              fullWidth: !0,
                              size: "large",
                              type: "submit",
                              variant: "contained",
                              color: "primary",
                              children: "Login",
                            }),
                            n && Object(I.jsx)(g.a, {}),
                          ],
                        }),
                      }),
                    ],
                  }),
                });
              },
            }),
          ],
        });
      };
    },
    404: function (e, t, n) {},
    71: function (e, t, n) {
      "use strict";
      var r = n(6),
        a = n(47),
        c = n(0),
        i = n(27),
        o = n(920),
        l = n(891),
        s = n(922),
        u = n(8),
        d = n(916),
        p = n(917),
        j = n(918),
        b = n(838),
        h = n(919),
        m = n(341),
        f = n(230),
        O = n.n(f),
        x = n(908),
        g = n(888),
        v = n(1),
        y = ["children"];
      function w(e) {
        var t = e.children,
          n = Object(a.a)(e, y);
        return Object(v.jsx)(
          x.a,
          Object(r.a)(
            Object(r.a)(
              { language: "javacript", showLineNumbers: !0, style: g.a },
              n
            ),
            {},
            { children: t }
          )
        );
      }
      var S = n(936),
        k = n(937),
        C = function (e) {
          var t = e.children,
            n = Object(c.useState)(!1),
            r = Object(u.a)(n, 2),
            a = r[0],
            i = r[1];
          return Object(v.jsxs)(d.a, {
            sx: { position: "relative" },
            children: [
              Object(v.jsx)(p.a, {
                sx: { justifyContent: "flex-end", p: 1, mb: a ? 1 : 0 },
                children: Object(v.jsxs)(d.a, {
                  sx: {
                    display: "flex",
                    position: "inherit",
                    right: 0,
                    top: 6,
                  },
                  children: [
                    Object(v.jsx)(m.CopyToClipboard, {
                      text: O()(t, {
                        showFunctions: !0,
                        maxInlineAttributesLineLength: 100,
                      }),
                      children: Object(v.jsx)(j.a, {
                        title: "Copy the source",
                        placement: "top-end",
                        children: Object(v.jsx)(b.a, {
                          color: "secondary",
                          size: "small",
                          sx: { fontSize: "0.875rem" },
                          children: Object(v.jsx)(S.a, {}),
                        }),
                      }),
                    }),
                    Object(v.jsx)(l.a, {
                      orientation: "vertical",
                      variant: "middle",
                      flexItem: !0,
                      sx: { mx: 1 },
                    }),
                    Object(v.jsx)(j.a, {
                      title: "Show the source",
                      placement: "top-end",
                      children: Object(v.jsx)(b.a, {
                        sx: { fontSize: "0.875rem" },
                        size: "small",
                        color: a ? "primary" : "secondary",
                        onClick: function () {
                          return i(!a);
                        },
                        children: Object(v.jsx)(k.a, {}),
                      }),
                    }),
                  ],
                }),
              }),
              Object(v.jsx)(h.a, {
                in: a,
                children:
                  a &&
                  Object(v.jsx)(w, {
                    children: O()(t, {
                      showFunctions: !0,
                      showDefaultProps: !1,
                      maxInlineAttributesLineLength: 100,
                    }),
                  }),
              }),
            ],
          });
        },
        z = [
          "border",
          "boxShadow",
          "children",
          "content",
          "contentSX",
          "darkTitle",
          "divider",
          "elevation",
          "secondary",
          "shadow",
          "sx",
          "title",
          "codeHighlight",
        ],
        P = Object(c.forwardRef)(function (e, t) {
          var n = e.border,
            c = void 0 === n || n,
            u = e.boxShadow,
            d = e.children,
            p = e.content,
            j = void 0 === p || p,
            b = e.contentSX,
            h = void 0 === b ? {} : b,
            m = (e.darkTitle, e.divider),
            f = void 0 === m || m,
            O = e.elevation,
            x = (e.secondary, e.shadow),
            g = e.sx,
            y = void 0 === g ? {} : g,
            w = e.title,
            S = e.codeHighlight,
            k = Object(a.a)(e, z),
            P = Object(i.a)();
          return (
            (u = "dark" === P.palette.mode ? u || !0 : u),
            Object(v.jsxs)(
              o.a,
              Object(r.a)(
                Object(r.a)({ elevation: O || 0, ref: t }, k),
                {},
                {
                  sx: Object(r.a)(
                    Object(r.a)({}, y),
                    {},
                    {
                      border: c ? "1px solid" : "none",
                      borderRadius: 2,
                      color: "black",
                      borderColor:
                        "dark" === P.palette.mode
                          ? P.palette.divider
                          : P.palette.grey.A800,
                      boxShadow:
                        !u || (c && "dark" !== P.palette.mode)
                          ? "inherit"
                          : x || P.customShadows.z1,
                      ":hover": {
                        boxShadow: u ? x || P.customShadows.z1 : "inherit",
                      },
                      "& pre": {
                        m: 0,
                        p: "16px !important",
                        fontFamily: P.typography.fontFamily,
                        fontSize: "0.75rem",
                      },
                    }
                  ),
                  children: [
                    w && f && Object(v.jsx)(l.a, {}),
                    j && Object(v.jsx)(s.a, { sx: h, children: d }),
                    !j && d,
                    S &&
                      Object(v.jsxs)(v.Fragment, {
                        children: [
                          Object(v.jsx)(l.a, { sx: { borderStyle: "dashed" } }),
                          Object(v.jsx)(C, {
                            codeHighlight: S,
                            main: !0,
                            children: d,
                          }),
                        ],
                      }),
                  ],
                }
              )
            )
          );
        });
      t.a = P;
    },
    74: function (e, t, n) {
      "use strict";
      n.d(t, "D", function () {
        return x;
      }),
        n.d(t, "C", function () {
          return v;
        }),
        n.d(t, "a", function () {
          return he;
        }),
        n.d(t, "p", function () {
          return z;
        }),
        n.d(t, "o", function () {
          return w;
        }),
        n.d(t, "r", function () {
          return k;
        }),
        n.d(t, "q", function () {
          return T;
        }),
        n.d(t, "n", function () {
          return L;
        }),
        n.d(t, "g", function () {
          return d;
        }),
        n.d(t, "B", function () {
          return Y;
        }),
        n.d(t, "c", function () {
          return h;
        }),
        n.d(t, "i", function () {
          return E;
        }),
        n.d(t, "w", function () {
          return Q;
        }),
        n.d(t, "x", function () {
          return $;
        }),
        n.d(t, "f", function () {
          return j;
        }),
        n.d(t, "A", function () {
          return te;
        }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "y", function () {
          return re;
        }),
        n.d(t, "e", function () {
          return F;
        }),
        n.d(t, "z", function () {
          return ce;
        }),
        n.d(t, "u", function () {
          return oe;
        }),
        n.d(t, "b", function () {
          return M;
        }),
        n.d(t, "h", function () {
          return A;
        }),
        n.d(t, "s", function () {
          return se;
        }),
        n.d(t, "t", function () {
          return de;
        }),
        n.d(t, "v", function () {
          return je;
        }),
        n.d(t, "l", function () {
          return H;
        }),
        n.d(t, "j", function () {
          return U;
        }),
        n.d(t, "k", function () {
          return q;
        }),
        n.d(t, "m", function () {
          return X;
        });
      var r = n(6),
        a = n(21),
        c = n(15),
        i = n.n(c),
        o = (n(0), n(23)),
        l = n.n(o),
        s = (n(795), "http://127.0.0.1:5000/"),
        u = "http://127.0.0.1:5000/";
      function d(e) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.post("".concat(u, "createUser"), Object(r.a)({}, t))
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function j(e) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.post(
                        "".concat(u, "createTemplate"),
                        Object(r.a)({}, t)
                      )
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function h(e) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.post("".concat(u, "createGroup"), Object(r.a)({}, t))
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function f(e) {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.post("".concat(u, "createPage"), Object(r.a)({}, t))
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function x(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.post("".concat(u, "importSite"), Object(r.a)({}, t))
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function v(e) {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.post("".concat(u, "importEmail"), Object(r.a)({}, t))
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function w(e, t) {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = Object(a.a)(
          i.a.mark(function e(t, n) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.put(
                        "".concat(u, "editPage/").concat(n),
                        Object(r.a)({}, t)
                      )
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function k(e, t) {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = Object(a.a)(
          i.a.mark(function e(t, n) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.put(
                        "".concat(u, "editUser/").concat(n),
                        Object(r.a)({}, t)
                      )
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function z(e, t) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = Object(a.a)(
          i.a.mark(function e(t, n) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.put(
                        "".concat(u, "editSendingProfile/").concat(n),
                        Object(r.a)({}, t)
                      )
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function T(e, t) {
        return I.apply(this, arguments);
      }
      function I() {
        return (I = Object(a.a)(
          i.a.mark(function e(t, n) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.put(
                        "".concat(u, "editTemplate/").concat(n),
                        Object(r.a)({}, t)
                      )
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function L(e, t) {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = Object(a.a)(
          i.a.mark(function e(t, n) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.put(
                        "".concat(u, "editGroup/").concat(n),
                        Object(r.a)({}, t)
                      )
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function M(e) {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.post(
                        "".concat(u, "createCompaign"),
                        Object(r.a)({}, t)
                      )
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function F(e) {
        return B.apply(this, arguments);
      }
      function B() {
        return (B = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.post(
                        "".concat(u, "createSendingProfile"),
                        Object(r.a)({}, t)
                      )
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function E(e) {
        return W.apply(this, arguments);
      }
      function W() {
        return (W = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.delete("".concat(u, "deleteGroup/").concat(t))
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function A(e) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.delete("".concat(u, "deleteCompaign/").concat(t))
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function H(e) {
        return G.apply(this, arguments);
      }
      function G() {
        return (G = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.delete("".concat(u, "deleteTemplate/").concat(t))
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function U(e) {
        return _.apply(this, arguments);
      }
      function _() {
        return (_ = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.delete("".concat(u, "deletePage/").concat(t))
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function q(e) {
        return V.apply(this, arguments);
      }
      function V() {
        return (V = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.delete(
                        "".concat(u, "deleteSendingProfile/").concat(t)
                      )
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function X(e) {
        return J.apply(this, arguments);
      }
      function J() {
        return (J = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(t),
                      (e.next = 3),
                      l.a.delete("".concat(u, "deleteUser/").concat(t))
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Y() {
        return K.apply(this, arguments);
      }
      function K() {
        return (K = Object(a.a)(
          i.a.mark(function e() {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), l.a.get("".concat(u, "getUsers"));
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Q() {
        return Z.apply(this, arguments);
      }
      function Z() {
        return (Z = Object(a.a)(
          i.a.mark(function e() {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), l.a.get("".concat(u, "getGroups"));
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function $() {
        return ee.apply(this, arguments);
      }
      function ee() {
        return (ee = Object(a.a)(
          i.a.mark(function e() {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2), l.a.get("".concat(u, "getGroupsSummary"))
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function te() {
        return ne.apply(this, arguments);
      }
      function ne() {
        return (ne = Object(a.a)(
          i.a.mark(function e() {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), l.a.get("".concat(u, "getTemplates"));
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function re() {
        return ae.apply(this, arguments);
      }
      function ae() {
        return (ae = Object(a.a)(
          i.a.mark(function e() {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), l.a.get("".concat(u, "getPages"));
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function ce() {
        return ie.apply(this, arguments);
      }
      function ie() {
        return (ie = Object(a.a)(
          i.a.mark(function e() {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2), l.a.get("".concat(u, "getSendingProfile"))
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function oe() {
        return le.apply(this, arguments);
      }
      function le() {
        return (le = Object(a.a)(
          i.a.mark(function e() {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), l.a.get("".concat(u, "getCompaigns"));
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function se(e) {
        return ue.apply(this, arguments);
      }
      function ue() {
        return (ue = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      l.a.get("".concat(u, "getCompaignResult/").concat(t))
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function de(e) {
        return pe.apply(this, arguments);
      }
      function pe() {
        return (pe = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      l.a.get("".concat(u, "getCompaignSummary/").concat(t))
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function je(e) {
        return be.apply(this, arguments);
      }
      function be() {
        return (be = Object(a.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      l.a.get("".concat(u, "getCompleteCompaign/").concat(t))
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function he(e, t) {
        return me.apply(this, arguments);
      }
      function me() {
        return (me = Object(a.a)(
          i.a.mark(function e(t, n) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      l.a.post("".concat(s, "cyberops_signin"), {
                        username: t,
                        password: n,
                      })
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    77: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      });
      t.a = {
        defaultPath: "/phishing",
        fontFamily: "'Public Sans', sans-serif",
        i18n: "en",
        miniDrawer: !1,
        container: !0,
        mode: "light",
        presetColor: "default",
        themeDirection: "ltr",
      };
      var r = 260;
    },
    798: function (e, t) {},
    800: function (e, t) {},
    817: function (e, t, n) {},
    818: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        a = n.n(r),
        c = n(63),
        i = n.n(c),
        o = n(46),
        l = (n(400), n(78)),
        s = (n(404), n(18)),
        u = n(6),
        d = n(5),
        p = n(837),
        j = n(1),
        b = Object(d.a)("div")(function (e) {
          return {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 2001,
            width: "100%",
            "& > * + *": { marginTop: e.theme.spacing(2) },
          };
        }),
        h = function () {
          return Object(j.jsx)(b, {
            children: Object(j.jsx)(p.a, { color: "primary" }),
          });
        },
        m = function (e) {
          return function (t) {
            return Object(j.jsx)(r.Suspense, {
              fallback: Object(j.jsx)(h, {}),
              children: Object(j.jsx)(e, Object(u.a)({}, t)),
            });
          };
        },
        f = function () {
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsx)(s.a, {}),
          });
        },
        O = m(
          Object(r.lazy)(function () {
            return n.e(1).then(n.bind(null, 1003));
          })
        ),
        x = m(
          Object(r.lazy)(function () {
            return n.e(10).then(n.bind(null, 1019));
          })
        ),
        g = {
          path: "/",
          element: Object(j.jsx)(f, {}),
          children: [
            { path: "login", element: Object(j.jsx)(O, {}) },
            { path: "register", element: Object(j.jsx)(x, {}) },
          ],
        },
        v = n(8),
        y = n(27),
        w = n(897),
        S = n(916),
        k = n(931),
        C = n(914),
        z = n(239),
        P = Object(d.a)(S.a, {
          shouldForwardProp: function (e) {
            return "open" !== e;
          },
        })(function (e) {
          var t = e.theme,
            n = e.open;
          return Object(u.a)(
            Object(u.a)({}, t.mixins.toolbar),
            {},
            {
              display: "flex",
              alignItems: "center",
              justifyContent: n ? "flex-start" : "center",
              paddingLeft: t.spacing(n ? 3 : 0),
            }
          );
        }),
        T = n(250),
        I = function (e) {
          var t = e.open,
            n = Object(y.a)();
          return Object(j.jsx)(P, {
            theme: n,
            open: t,
            style: { backgroundColor: "#242939" },
            children: Object(j.jsx)(z.a, {
              direction: "row",
              spacing: 1,
              alignItems: "center",
              children: Object(j.jsx)(T.a, {}),
            }),
          });
        },
        L = (n(923), n(186)),
        N = n(835),
        M = (n(836), n(71)),
        D = (n(169), n(925)),
        F = n(924),
        B = n(892),
        E = n(893),
        W = n(912),
        A = n(913),
        R = n(180),
        H = Object(R.b)({
          name: "menu",
          initialState: {
            openItem: ["dashboard"],
            openComponent: "buttons",
            drawerOpen: !1,
            componentDrawerOpen: !0,
          },
          reducers: {
            activeItem: function (e, t) {
              e.openItem = t.payload.openItem;
            },
            activeComponent: function (e, t) {
              e.openComponent = t.payload.openComponent;
            },
            openDrawer: function (e, t) {
              e.drawerOpen = t.payload.drawerOpen;
            },
            openComponentDrawer: function (e, t) {
              e.componentDrawerOpen = t.payload.componentDrawerOpen;
            },
          },
        }),
        G = H.reducer,
        U = H.actions,
        _ = U.activeItem,
        q = (U.activeComponent, U.openDrawer),
        V =
          (U.openComponentDrawer,
          function (e) {
            var t = e.item,
              n = e.level,
              a = Object(y.a)(),
              c = Object(l.b)(),
              i = Object(l.c)(function (e) {
                return e.menu;
              }),
              s = i.drawerOpen,
              d = i.openItem,
              p = "_self";
            t.target && (p = "_blank");
            var b = {
              component: Object(r.forwardRef)(function (e, n) {
                return Object(j.jsx)(
                  o.b,
                  Object(u.a)(
                    Object(u.a)({ ref: n }, e),
                    {},
                    { to: t.url, target: p }
                  )
                );
              }),
            };
            null !== t &&
              void 0 !== t &&
              t.external &&
              (b = { component: "a", href: t.url, target: p });
            var h = t.icon,
              m =
                !!t.icon &&
                Object(j.jsx)(h, {
                  style: { fontSize: s ? "1rem" : "1.25rem" },
                }),
              f =
                d.findIndex(function (e) {
                  return e === t.id;
                }) > -1;
            Object(r.useEffect)(function () {
              document.location.pathname
                .toString()
                .split("/")
                .findIndex(function (e) {
                  return e === t.id;
                }) > -1 && c(_({ openItem: [t.id] }));
            }, []);
            var O = "text.primary",
              x = "primary.main";
            return Object(j.jsxs)(
              F.a,
              Object(u.a)(
                Object(u.a)({}, b),
                {},
                {
                  disabled: t.disabled,
                  onClick: function () {
                    return (e = t.id), void c(_({ openItem: [e] }));
                    var e;
                  },
                  selected: f,
                  style: { color: "white !important" },
                  sx: Object(u.a)(
                    Object(u.a)(
                      {
                        zIndex: 1201,
                        pl: s ? "".concat(28 * n, "px") : 1.5,
                        py: s || 1 !== n ? 1 : 1.25,
                      },
                      s && {
                        color: "white !important",
                        "&.Mui-selected": {
                          bgcolor: "primary.lighter",
                          borderRight: "2px solid ".concat(
                            a.palette.primary.main
                          ),
                          color: x,
                          "&:hover": { color: x, bgcolor: "primary.lighter" },
                        },
                      }
                    ),
                    !s && {
                      "&:hover": { bgcolor: "transparent" },
                      "&.Mui-selected": {
                        "&:hover": { bgcolor: "transparent" },
                        bgcolor: "transparent",
                      },
                    }
                  ),
                  children: [
                    m &&
                      Object(j.jsx)(B.a, {
                        sx: Object(u.a)(
                          Object(u.a)(
                            { minWidth: 28, color: f ? x : O },
                            !s && {
                              borderRadius: 1.5,
                              width: 36,
                              height: 36,
                              alignItems: "center",
                              justifyContent: "center",
                              "&:hover": { bgcolor: "secondary.lighter" },
                            }
                          ),
                          !s &&
                            f && {
                              bgcolor: "primary.lighter",
                              "&:hover": { bgcolor: "primary.lighter" },
                            }
                        ),
                        children: m,
                      }),
                    (s || (!s && 1 !== n)) &&
                      Object(j.jsx)(E.a, {
                        primary: Object(j.jsx)(L.a, {
                          variant: "h6",
                          sx: { color: f ? x : O },
                          children: t.title,
                        }),
                      }),
                    (s || (!s && 1 !== n)) &&
                      t.chip &&
                      Object(j.jsx)(W.a, {
                        color: t.chip.color,
                        variant: t.chip.variant,
                        size: t.chip.size,
                        label: t.chip.label,
                        avatar:
                          t.chip.avatar &&
                          Object(j.jsx)(A.a, { children: t.chip.avatar }),
                      }),
                  ],
                }
              )
            );
          }),
        X = function (e) {
          var t,
            n = e.item,
            r = Object(l.c)(function (e) {
              return e.menu;
            }).drawerOpen,
            a =
              null === (t = n.children) || void 0 === t
                ? void 0
                : t.map(function (e) {
                    switch (null === e || void 0 === e ? void 0 : e.type) {
                      case "collapse":
                        return Object(j.jsx)(
                          L.a,
                          {
                            variant: "caption",
                            color: "error",
                            sx: { p: 2.5 },
                            children:
                              "collapse - only available in paid version",
                          },
                          e.id
                        );
                      case "item":
                        return Object(j.jsx)(
                          V,
                          { item: e, level: 1, style: { color: "white" } },
                          e.id
                        );
                      default:
                        return Object(j.jsx)(
                          L.a,
                          {
                            variant: "h6",
                            color: "error",
                            align: "center",
                            children: "Fix - Group Collapse or Items",
                          },
                          e.id
                        );
                    }
                  });
          return Object(j.jsx)(D.a, {
            subheader:
              n.title &&
              r &&
              Object(j.jsx)(S.a, {
                sx: { pl: 3, mb: 1.5 },
                children: Object(j.jsx)(L.a, {
                  variant: "subtitle2",
                  color: "textSecondary",
                  children: n.title,
                }),
              }),
            sx: { mb: r ? 1.5 : 0, py: 0, zIndex: 0 },
            children: a,
          });
        },
        J = n(938),
        Y = n(939),
        K = n(940),
        Q = (J.a, Y.a, K.a, n(349)),
        Z = (n.n(Q).a, n(941)),
        $ = n(942),
        ee = n(350),
        te = n.n(ee),
        ne = n(355),
        re = n.n(ne),
        ae = n(173),
        ce = n.n(ae),
        ie = n(351),
        oe = n.n(ie),
        le = n(352),
        se = n.n(le),
        ue = n(353),
        de = n.n(ue),
        pe = n(354),
        je = n.n(pe),
        be = n(359),
        he = n.n(be),
        me = n(362),
        fe = n.n(me),
        Oe = n(231),
        xe = n.n(Oe),
        ge = n(356),
        ve = n.n(ge),
        ye = n(357),
        we = n.n(ye),
        Se = n(358),
        ke = n.n(Se),
        Ce = n(360),
        ze = n.n(Ce),
        Pe = n(361),
        Te = n.n(Pe),
        Ie = n(363),
        Le = n.n(Ie),
        Ne =
          (Z.a,
          $.a,
          te.a,
          ce.a,
          oe.a,
          se.a,
          de.a,
          je.a,
          re.a,
          ve.a,
          we.a,
          ke.a,
          he.a,
          ze.a,
          Te.a,
          xe.a,
          xe.a,
          fe.a,
          Le.a,
          n(123)),
        Me = n.n(Ne),
        De =
          (J.a,
          Y.a,
          K.a,
          {
            items: [
              {
                id: "phishing",
                title: "Phishing",
                type: "group",
                children: [
                  {
                    id: "Admin-page",
                    title: "Phishing",
                    type: "item",
                    url: "/phishing",
                    icon: Me.a,
                    color: "#ffffff",
                    children: [],
                  },
                  {
                    id: "user-page",
                    title: "Users And Groups",
                    type: "item",
                    url: "/user-page",
                    icon: Me.a,
                    color: "#ffffff",
                  },
                  {
                    id: "templates-page",
                    title: "Templates",
                    type: "item",
                    url: "/templates",
                    icon: Me.a,
                    color: "#ffffff",
                  },
                  {
                    id: "landing-page",
                    title: "Landing Page",
                    type: "item",
                    url: "/landing-page",
                    icon: Me.a,
                    color: "#ffffff",
                  },
                  {
                    id: "sending-profile",
                    title: "Sending Profile",
                    type: "item",
                    url: "/sending-profile",
                    icon: Me.a,
                    color: "#ffffff",
                  },
                  {
                    id: "Compaigns-page",
                    title: "Compaign",
                    type: "item",
                    url: "/compaigns",
                    icon: ce.a,
                    color: "#ffffff",
                  },
                ],
              },
            ],
          }),
        Fe = function () {
          var e = De.items.map(function (e) {
            return "group" === (null === e || void 0 === e ? void 0 : e.type)
              ? Object(j.jsx)(X, { item: e, style: { color: "white " } }, e.id)
              : Object(j.jsx)(
                  L.a,
                  {
                    variant: "h6",
                    color: "error",
                    align: "center",
                    children: "Fix - Navigation Group",
                  },
                  e.id
                );
          });
          return Object(j.jsx)(S.a, {
            sx: { pt: 2 },
            style: { color: "white " },
            children: e,
          });
        },
        Be = n(47),
        Ee = n(820),
        We = n(372),
        Ae = n(235),
        Re = ["children", "sx"],
        He = Object(d.a)(Ae.BrowserView)({
          flexGrow: 1,
          height: "100%",
          overflow: "hidden",
        }),
        Ge = Object(d.a)(We.a)(function (e) {
          var t = e.theme;
          return {
            maxHeight: "100%",
            "& .simplebar-scrollbar": {
              "&:before": {
                backgroundColor: Object(Ee.a)(t.palette.grey[500], 0.48),
              },
              "&.simplebar-visible:before": { opacity: 1 },
            },
            "& .simplebar-track.simplebar-vertical": { width: 10 },
            "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
              height: 6,
            },
            "& .simplebar-mask": { zIndex: "inherit" },
          };
        });
      function Ue(e) {
        var t = e.children,
          n = e.sx,
          r = Object(Be.a)(e, Re);
        return Object(j.jsxs)(j.Fragment, {
          children: [
            Object(j.jsx)(He, {
              children: Object(j.jsx)(
                Ge,
                Object(u.a)(
                  Object(u.a)({ timeout: 500, clickOnTrack: !1, sx: n }, r),
                  {},
                  { children: t }
                )
              ),
            }),
            Object(j.jsx)(Ae.MobileView, {
              children: Object(j.jsx)(
                S.a,
                Object(u.a)(
                  Object(u.a)({ sx: Object(u.a)({ overflowX: "auto" }, n) }, r),
                  {},
                  { children: t }
                )
              ),
            }),
          ],
        });
      }
      var _e = function () {
          return Object(j.jsx)(Ue, {
            sx: {
              "& .simplebar-content": {
                display: "flex",
                flexDirection: "column",
              },
            },
            style: { backgroundColor: "#242939", height: "100%" },
            children: Object(j.jsx)(Fe, {}),
          });
        },
        qe = n(77),
        Ve = function (e) {
          return {
            width: qe.b,
            borderRight: "1px solid ".concat(e.palette.divider),
            transition: e.transitions.create("width", {
              easing: e.transitions.easing.sharp,
              duration: e.transitions.duration.enteringScreen,
            }),
            overflowX: "hidden",
            boxShadow: "none",
          };
        },
        Xe = function (e) {
          return {
            transition: e.transitions.create("width", {
              easing: e.transitions.easing.sharp,
              duration: e.transitions.duration.leavingScreen,
            }),
            overflowX: "hidden",
            width: 0,
            borderRight: "none",
            boxShadow: e.customShadows.z1,
          };
        },
        Je = Object(d.a)(C.a, {
          shouldForwardProp: function (e) {
            return "open" !== e;
          },
        })(function (e) {
          var t = e.theme,
            n = e.open;
          return Object(u.a)(
            Object(u.a)(
              {
                width: qe.b,
                flexShrink: 0,
                whiteSpace: "nowrap",
                boxSizing: "border-box",
              },
              n &&
                Object(u.a)(
                  Object(u.a)({}, Ve(t)),
                  {},
                  { "& .MuiDrawer-paper": Ve(t) }
                )
            ),
            !n &&
              Object(u.a)(
                Object(u.a)({}, Xe(t)),
                {},
                { "& .MuiDrawer-paper": Xe(t) }
              )
          );
        }),
        Ye = function (e) {
          var t = e.open,
            n = e.handleDrawerToggle,
            a = e.window,
            c = Object(y.a)(),
            i = Object(w.a)(c.breakpoints.down("lg")),
            o =
              void 0 !== a
                ? function () {
                    return a().document.body;
                  }
                : void 0,
            l = Object(r.useMemo)(function () {
              return Object(j.jsx)(_e, {});
            }, []),
            s = Object(r.useMemo)(
              function () {
                return Object(j.jsx)(I, { open: t });
              },
              [t]
            );
          return Object(j.jsx)(S.a, {
            component: "nav",
            sx: { flexShrink: { md: 0 }, zIndex: 1300 },
            "aria-label": "mailbox folders",
            children: i
              ? Object(j.jsxs)(C.a, {
                  container: o,
                  variant: "temporary",
                  open: t,
                  onClose: n,
                  ModalProps: { keepMounted: !0 },
                  sx: {
                    display: { xs: "block", lg: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: qe.b,
                      borderRight: "1px solid ".concat(c.palette.divider),
                      backgroundImage: "none",
                      boxShadow: "inherit",
                    },
                  },
                  children: [t && s, t && l],
                })
              : Object(j.jsxs)(Je, {
                  variant: "permanent",
                  open: t,
                  children: [s, l],
                }),
          });
        },
        Ke = n(838),
        Qe = n(927),
        Ze = Object(d.a)(Qe.a, {
          shouldForwardProp: function (e) {
            return "open" !== e;
          },
        })(function (e) {
          var t = e.theme,
            n = e.open;
          return Object(u.a)(
            {
              zIndex: t.zIndex.drawer + 1,
              transition: t.transitions.create(["width", "margin"], {
                easing: t.transitions.easing.sharp,
                duration: t.transitions.duration.leavingScreen,
              }),
            },
            n && {
              marginLeft: qe.b,
              width: "calc(100% - ".concat(qe.b, "px)"),
              transition: t.transitions.create(["width", "margin"], {
                easing: t.transitions.easing.sharp,
                duration: t.transitions.duration.enteringScreen,
              }),
            }
          );
        }),
        $e = function () {
          return Object(j.jsx)(S.a, {
            sx: { width: "100%", ml: { xs: 0, md: 1 } },
          });
        },
        et = n(3),
        tt = n(21),
        nt = n(15),
        rt = n.n(nt),
        at = n(899),
        ct = n(906),
        it = n(903),
        ot = n(921),
        lt = n(898),
        st = n(922),
        ut = n(124),
        dt = n(905),
        pt = n(928),
        jt = n(890),
        bt = n(895),
        ht = ["children", "position", "type"],
        mt = Object(r.forwardRef)(function (e, t) {
          var n = e.children,
            r = (e.position, e.type),
            a = Object(Be.a)(e, ht),
            c = { transformOrigin: "0 0 0" };
          return (
            (c = { transformOrigin: "0 0 0" }),
            Object(j.jsxs)(S.a, {
              ref: t,
              children: [
                "grow" === r &&
                  Object(j.jsx)(
                    jt.a,
                    Object(u.a)(
                      Object(u.a)({}, a),
                      {},
                      { children: Object(j.jsx)(S.a, { sx: c, children: n }) }
                    )
                  ),
                "fade" === r &&
                  Object(j.jsx)(
                    bt.a,
                    Object(u.a)(
                      Object(u.a)({}, a),
                      {},
                      {
                        timeout: { appear: 0, enter: 300, exit: 150 },
                        children: Object(j.jsx)(S.a, { sx: c, children: n }),
                      }
                    )
                  ),
              ],
            })
          );
        });
      mt.defaultProps = { type: "grow", position: "top-left" };
      var ft = mt,
        Ot = function (e) {
          var t = e.handleLogout,
            n = Object(y.a)(),
            a = Object(r.useState)(0),
            c = Object(v.a)(a, 2),
            i = c[0];
          c[1];
          return Object(j.jsx)(D.a, {
            component: "nav",
            sx: {
              p: 0,
              "& .MuiListItemIcon-root": {
                minWidth: 32,
                color: n.palette.grey[500],
              },
            },
            children: Object(j.jsxs)(F.a, {
              selected: 2 === i,
              onClick: t,
              children: [
                Object(j.jsx)(B.a, { children: Object(j.jsx)(K.a, {}) }),
                Object(j.jsx)(E.a, { primary: "Logout" }),
              ],
            }),
          });
        },
        xt = (n(943), n(944)),
        gt = (n(945), n(946), n(947), n(383), n(384), n(226)),
        vt = ["children", "value", "index"];
      function yt(e) {
        var t = e.children,
          n = e.value,
          r = e.index,
          a = Object(Be.a)(e, vt);
        return Object(j.jsx)(
          "div",
          Object(u.a)(
            Object(u.a)(
              {
                role: "tabpanel",
                hidden: n !== r,
                id: "profile-tabpanel-".concat(r),
                "aria-labelledby": "profile-tab-".concat(r),
              },
              a
            ),
            {},
            { children: n === r && t }
          )
        );
      }
      var wt = function () {
          var e,
            t,
            n,
            a = Object(y.a)(),
            c = Object(r.useState)({}),
            i = Object(v.a)(c, 2),
            o = i[0],
            l = (i[1], Object(r.useState)([])),
            s = Object(v.a)(l, 2),
            d = (s[0], s[1], localStorage.getItem("userdata"));
          if (((d = JSON.parse(d)), o.length > 0)) {
            var p = o.data.data.filter(function (e) {
              return e.email === o.data.authData.email;
            });
            console.log(p);
          }
          var b = (function () {
              var e = Object(tt.a)(
                rt.a.mark(function e() {
                  return rt.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          localStorage.removeItem("siemToken"),
                            localStorage.removeItem("userdata"),
                            window.location.replace("/login");
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            h = Object(r.useRef)(null),
            m = Object(r.useState)(!1),
            f = Object(v.a)(m, 2),
            O = f[0],
            x = f[1],
            g = function (e) {
              (h.current && h.current.contains(e.target)) || x(!1);
            },
            w = Object(r.useState)(0),
            k = Object(v.a)(w, 2),
            C = k[0],
            P = k[1],
            T = function (e, t) {
              P(t);
            };
          return Object(j.jsxs)(S.a, {
            sx: { flexShrink: 0, ml: 0.75 },
            children: [
              Object(j.jsx)(ct.a, {
                sx: {
                  p: 0.25,
                  bgcolor: O ? "grey.300" : "transparent",
                  borderRadius: 1,
                  "&:hover": { bgcolor: "secondary.lighter" },
                },
                "aria-label": "open profile",
                ref: h,
                "aria-controls": O ? "profile-grow" : void 0,
                "aria-haspopup": "true",
                onClick: function () {
                  x(function (e) {
                    return !e;
                  });
                },
                children: Object(j.jsxs)(z.a, {
                  direction: "row",
                  spacing: 2,
                  alignItems: "center",
                  sx: { p: 0.5 },
                  children: [
                    Object(j.jsx)(A.a, {
                      sx: { bgcolor: at.a[500] },
                      style: { textTransform: "capitalize" },
                      children:
                        null === (e = d) ||
                        void 0 === e ||
                        null === (t = e.username) ||
                        void 0 === t
                          ? void 0
                          : t[0],
                    }),
                    Object(j.jsx)(L.a, {
                      variant: "subtitle1",
                      style: { textTransform: "capitalize" },
                      children:
                        null === (n = d) || void 0 === n ? void 0 : n.username,
                    }),
                  ],
                }),
              }),
              Object(j.jsx)(it.a, {
                placement: "bottom-end",
                open: O,
                anchorEl: h.current,
                role: void 0,
                transition: !0,
                disablePortal: !0,
                popperOptions: {
                  modifiers: [{ name: "offset", options: { offset: [0, 9] } }],
                },
                children: function (e) {
                  var t,
                    n,
                    r,
                    c,
                    i,
                    o = e.TransitionProps;
                  return Object(j.jsx)(
                    ft,
                    Object(u.a)(
                      Object(u.a)({ type: "fade", in: O }, o),
                      {},
                      {
                        children:
                          O &&
                          Object(j.jsx)(ot.a, {
                            sx: Object(et.a)(
                              {
                                boxShadow: a.customShadows.z1,
                                width: 290,
                                minWidth: 240,
                                maxWidth: 290,
                              },
                              a.breakpoints.down("md"),
                              { maxWidth: 250 }
                            ),
                            children: Object(j.jsx)(lt.a, {
                              onClickAway: g,
                              children: Object(j.jsxs)(M.a, {
                                elevation: 0,
                                border: !1,
                                content: !1,
                                children: [
                                  Object(j.jsx)(st.a, {
                                    sx: { px: 2.5, pt: 3 },
                                    children: Object(j.jsx)(ut.a, {
                                      container: !0,
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      children: Object(j.jsx)(ut.a, {
                                        item: !0,
                                        children: Object(j.jsxs)(z.a, {
                                          direction: "row",
                                          spacing: 1.25,
                                          alignItems: "center",
                                          children: [
                                            Object(j.jsx)(A.a, {
                                              sx: { bgcolor: at.a[500] },
                                              style: {
                                                textTransform: "capitalize",
                                              },
                                              children:
                                                null === (t = d) ||
                                                void 0 === t ||
                                                null === (n = t.username) ||
                                                void 0 === n
                                                  ? void 0
                                                  : n[0],
                                            }),
                                            Object(j.jsxs)(z.a, {
                                              children: [
                                                Object(j.jsx)(L.a, {
                                                  variant: "h6",
                                                  style: {
                                                    textTransform: "capitalize",
                                                  },
                                                  children:
                                                    null === (r = d) ||
                                                    void 0 === r
                                                      ? void 0
                                                      : r.username,
                                                }),
                                                Object(j.jsx)(L.a, {
                                                  variant: "body2",
                                                  color: "textSecondary",
                                                  style: { width: "20px" },
                                                  children:
                                                    null === (c = d) ||
                                                    void 0 === c
                                                      ? void 0
                                                      : c.type,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                  O &&
                                    Object(j.jsxs)(j.Fragment, {
                                      children: [
                                        Object(j.jsx)(S.a, {
                                          sx: {
                                            borderBottom: 1,
                                            borderColor: "divider",
                                          },
                                          children: Object(j.jsx)(dt.a, {
                                            variant: "fullWidth",
                                            value: C,
                                            onChange: T,
                                            "aria-label": "profile tabs",
                                            children: Object(j.jsx)(
                                              pt.a,
                                              Object(u.a)(
                                                {
                                                  sx: {
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    textTransform: "capitalize",
                                                  },
                                                  icon: Object(j.jsx)(xt.a, {
                                                    style: {
                                                      marginBottom: 0,
                                                      marginRight: "10px",
                                                    },
                                                  }),
                                                  label: "Profile",
                                                },
                                                ((i = 0),
                                                {
                                                  id: "profile-tab-".concat(i),
                                                  "aria-controls":
                                                    "profile-tabpanel-".concat(
                                                      i
                                                    ),
                                                })
                                              )
                                            ),
                                          }),
                                        }),
                                        Object(j.jsx)(yt, {
                                          value: C,
                                          index: 0,
                                          dir: a.direction,
                                          children: Object(j.jsx)(Ot, {
                                            handleLogout: b,
                                          }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            }),
                          }),
                      }
                    )
                  );
                },
              }),
            ],
          });
        },
        St =
          (n(907),
          n(929),
          n(930),
          n(891),
          n(948),
          n(900),
          n(949),
          n(950),
          n(951),
          n(952)),
        kt = function () {
          var e = Object(y.a)(),
            t = Object(r.useState)(!1),
            n = Object(v.a)(t, 2),
            a = n[0],
            c = n[1],
            i = Object(r.useRef)(null),
            o = function (e) {
              (i.current && i.current.contains(e.target)) || c(!1);
            },
            l = Object(r.useRef)(a);
          return (
            Object(r.useEffect)(
              function () {
                !0 === l.current && !1 === a && i.current.focus(),
                  (l.current = a);
              },
              [a]
            ),
            Object(j.jsxs)(j.Fragment, {
              children: [
                Object(j.jsx)(S.a, {
                  sx: { flexShrink: 0, ml: 0.75 },
                  children: Object(j.jsx)(Ke.a, {
                    component: "span",
                    disableRipple: !0,
                    sx: { bgcolor: a ? "grey.300" : "grey.100" },
                    ref: i,
                    "aria-controls": a ? "menu-list-grow" : void 0,
                    "aria-haspopup": "true",
                    onClick: function () {
                      c(function (e) {
                        return !e;
                      });
                    },
                    color: "inherit",
                    children: Object(j.jsx)(St.a, {}),
                  }),
                }),
                Object(j.jsx)(it.a, {
                  placement: "bottom-end",
                  open: a,
                  anchorEl: i.current,
                  role: void 0,
                  transition: !0,
                  disablePortal: !0,
                  style: { width: "100%" },
                  popperOptions: {
                    modifiers: [
                      { name: "offset", options: { offset: [0, 9] } },
                    ],
                  },
                  children: function (t) {
                    var n = t.TransitionProps;
                    return Object(j.jsx)(
                      ft,
                      Object(u.a)(
                        Object(u.a)({ type: "fade", in: a }, n),
                        {},
                        {
                          children: Object(j.jsx)(ot.a, {
                            sx: { boxShadow: e.customShadows.z1 },
                            children: Object(j.jsx)(lt.a, {
                              onClickAway: o,
                              children: Object(j.jsx)(Qe.a, {
                                color: "inherit",
                                children: Object(j.jsxs)(k.a, {
                                  children: [
                                    Object(j.jsx)($e, {}),
                                    Object(j.jsx)(wt, {}),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }
                      )
                    );
                  },
                }),
              ],
            })
          );
        },
        Ct = function () {
          var e = Object(w.a)(function (e) {
            return e.breakpoints.down("md");
          });
          return Object(j.jsxs)(j.Fragment, {
            children: [
              !e && Object(j.jsx)($e, {}),
              e && Object(j.jsx)(S.a, { sx: { width: "100%", ml: 1 } }),
              !e && Object(j.jsx)(wt, {}),
              e && Object(j.jsx)(kt, {}),
            ],
          });
        },
        zt = n(953),
        Pt = n(954),
        Tt = function (e) {
          var t = e.open,
            n = e.handleDrawerToggle,
            r = Object(y.a)(),
            a = Object(w.a)(r.breakpoints.down("lg")),
            c = Object(j.jsxs)(k.a, {
              children: [
                Object(j.jsx)(Ke.a, {
                  disableRipple: !0,
                  "aria-label": "open drawer",
                  onClick: n,
                  edge: "start",
                  color: "secondary",
                  sx: {
                    color: "black",
                    bgcolor: t ? "grey.200" : "grey.100",
                    ml: { xs: 0, lg: -2 },
                  },
                  children: t
                    ? Object(j.jsx)(zt.a, {})
                    : Object(j.jsx)(Pt.a, {}),
                }),
                Object(j.jsx)(Ct, {}),
              ],
            }),
            i = {
              position: "fixed",
              color: "inherit",
              elevation: 0,
              sx: { borderBottom: "1px solid ".concat(r.palette.divider) },
            };
          return Object(j.jsx)(j.Fragment, {
            children: a
              ? Object(j.jsx)(
                  Qe.a,
                  Object(u.a)(Object(u.a)({}, i), {}, { children: c })
                )
              : Object(j.jsx)(
                  Ze,
                  Object(u.a)(Object(u.a)({ open: t }, i), {}, { children: c })
                ),
          });
        },
        It = n(910),
        Lt = ["navigation", "title"],
        Nt = function (e) {
          var t,
            n,
            a = e.navigation,
            c = e.title,
            i = Object(Be.a)(e, Lt),
            l = Object(s.d)(),
            d = Object(r.useState)(),
            p = Object(v.a)(d, 2),
            b = p[0],
            h = p[1],
            m = Object(r.useState)(),
            f = Object(v.a)(m, 2),
            O = f[0],
            x = f[1],
            g = function e(t) {
              t.children &&
                t.children.filter(function (n) {
                  return (
                    n.type && "collapse" === n.type
                      ? e(n)
                      : n.type &&
                        "item" === n.type &&
                        l.pathname === n.url &&
                        (h(t), x(n)),
                    !1
                  );
                });
            };
          Object(r.useEffect)(function () {
            var e;
            null === a ||
              void 0 === a ||
              null === (e = a.items) ||
              void 0 === e ||
              e.map(function (e) {
                return e.type && "group" === e.type && g(e), !1;
              });
          }),
            "/breadcrumbs" === l.pathname &&
              (l.pathname = "/dashboard/analytics");
          var y = Object(j.jsx)(L.a, {}),
            w = "";
          return (
            b &&
              "collapse" === b.type &&
              (t = Object(j.jsx)(L.a, {
                component: o.b,
                to: document.location.pathname,
                variant: "h6",
                sx: { textDecoration: "none" },
                color: "textSecondary",
                children: b.title,
              })),
            O &&
              "item" === O.type &&
              ((w = O.title),
              (n = Object(j.jsx)(L.a, {
                variant: "subtitle1",
                style: { color: "black" },
                children: w,
              })),
              !1 !== O.breadcrumbs &&
                (y = Object(j.jsx)(
                  M.a,
                  Object(u.a)(
                    Object(u.a)(
                      { border: !1, sx: { mb: 3, bgcolor: "transparent" } },
                      i
                    ),
                    {},
                    {
                      content: !1,
                      children: Object(j.jsxs)(ut.a, {
                        container: !0,
                        direction: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        spacing: 1,
                        children: [
                          Object(j.jsx)(ut.a, {
                            item: !0,
                            children: Object(j.jsxs)(It.a, {
                              "aria-label": "breadcrumb",
                              children: [
                                Object(j.jsx)(L.a, {
                                  component: o.b,
                                  to: "/",
                                  color: "textSecondary",
                                  variant: "h6",
                                  sx: { textDecoration: "none" },
                                  children: "Home",
                                }),
                                t,
                                n,
                              ],
                            }),
                          }),
                          c &&
                            Object(j.jsx)(ut.a, {
                              item: !0,
                              sx: { mt: 2 },
                              children: Object(j.jsx)(L.a, {
                                variant: "h5",
                                children: O.title,
                              }),
                            }),
                        ],
                      }),
                    }
                  )
                ))),
            y
          );
        },
        Mt = function () {
          var e = Object(y.a)(),
            t = Object(w.a)(e.breakpoints.down("xl")),
            n = Object(l.b)(),
            a = Object(l.c)(function (e) {
              return e.menu;
            }).drawerOpen,
            c = Object(r.useState)(a),
            i = Object(v.a)(c, 2),
            o = i[0],
            u = i[1],
            d = function () {
              u(!o), n(q({ drawerOpen: !o }));
            };
          return (
            Object(r.useEffect)(
              function () {
                u(!0), n(q({ drawerOpen: !0 }));
              },
              [t]
            ),
            Object(r.useEffect)(
              function () {
                o !== a && u(a);
              },
              [a]
            ),
            Object(j.jsxs)(S.a, {
              sx: { display: "flex", width: "100%" },
              children: [
                Object(j.jsx)(Tt, { open: o, handleDrawerToggle: d }),
                Object(j.jsx)(Ye, { open: o, handleDrawerToggle: d }),
                Object(j.jsxs)(S.a, {
                  component: "main",
                  sx: { width: "100%", flexGrow: 1, p: { xs: 2, sm: 3 } },
                  children: [
                    Object(j.jsx)(k.a, {}),
                    Object(j.jsx)(Nt, {
                      navigation: De,
                      title: !0,
                      divider: !1,
                    }),
                    Object(j.jsx)(s.a, {}),
                  ],
                }),
              ],
            })
          );
        },
        Dt = (n(16), n(920)),
        Ft = n(909),
        Bt = n(932),
        Et = n(242),
        Wt = n.n(Et),
        At = n(247),
        Rt = n.n(At),
        Ht = n(249),
        Gt = n.n(Ht),
        Ut = n(74),
        _t = n(109),
        qt = n.n(_t),
        Vt = {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        },
        Xt = {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "33%",
          bgcolor: "rgb(36, 41, 57)",
          color: "white !important",
          boxShadow: 24,
          p: 4,
          overflowX: "hidden",
          overflowY: "auto",
          maxHeight: "600px",
        };
      function Jt() {
        var e = a.a.useState(!1),
          t = Object(v.a)(e, 2),
          n = t[0],
          c = t[1],
          i = a.a.useState(!1),
          o = Object(v.a)(i, 2),
          l = o[0],
          u = o[1],
          d = a.a.useState(!1),
          p = Object(v.a)(d, 2),
          b = p[0],
          h = p[1],
          m = a.a.useState(""),
          f = Object(v.a)(m, 2),
          O = f[0],
          x = f[1],
          g = Object(r.useState)([]),
          y = Object(v.a)(g, 2),
          w = (y[0], y[1], Object(r.useState)("")),
          k = Object(v.a)(w, 2),
          C = (k[0], k[1], Object(r.useState)("")),
          z = Object(v.a)(C, 2),
          P = (z[0], z[1], Object(r.useState)("")),
          T = Object(v.a)(P, 2),
          I = (T[0], T[1], Object(r.useState)("")),
          D = Object(v.a)(I, 2),
          F = D[0],
          B = D[1],
          E = Object(r.useState)(""),
          W = Object(v.a)(E, 2),
          A = W[0],
          R = W[1],
          H = Object(r.useState)(""),
          G = Object(v.a)(H, 2),
          U = G[0],
          _ = G[1],
          q = Object(r.useState)(""),
          V = Object(v.a)(q, 2),
          X = V[0],
          J = V[1],
          Y = Object(r.useState)(""),
          K = Object(v.a)(Y, 2),
          Q = K[0],
          Z = K[1],
          $ = Object(r.useState)(""),
          ee = Object(v.a)($, 2),
          te = ee[0],
          ne = ee[1],
          re = Object(r.useState)(""),
          ae = Object(v.a)(re, 2),
          ce = ae[0],
          ie = ae[1],
          oe = Object(r.useState)(""),
          le = Object(v.a)(oe, 2),
          se = (le[0], le[1]),
          ue = Object(r.useState)(""),
          de = Object(v.a)(ue, 2),
          pe = (de[0], de[1]),
          je = Object(r.useState)(""),
          be = Object(v.a)(je, 2),
          he = (be[0], be[1]),
          me = Object(r.useState)(""),
          fe = Object(v.a)(me, 2),
          Oe = (fe[0], fe[1]),
          xe = a.a.useState([]),
          ge = Object(v.a)(xe, 2),
          ve = ge[0],
          ye = ge[1],
          we = a.a.useState([]),
          Se = Object(v.a)(we, 2),
          ke = Se[0],
          Ce = Se[1],
          ze = a.a.useState([]),
          Pe = Object(v.a)(ze, 2),
          Te = Pe[0],
          Ie = Pe[1],
          Le = a.a.useState([]),
          Ne = Object(v.a)(Le, 2),
          Me = Ne[0],
          De = Ne[1],
          Fe = a.a.useState([]),
          Be = Object(v.a)(Fe, 2),
          Ee = Be[0],
          We = Be[1],
          Ae = function () {
            c(!1),
              x(""),
              B(""),
              R(""),
              _(""),
              J(""),
              Z(""),
              ne(""),
              ie(""),
              u(!1);
          },
          Re = function () {
            if (
              (c(!1),
              "" === O ||
                "" === F ||
                "" === U ||
                "" === A ||
                "" === te ||
                "" === ce)
            )
              qt.a.fire("Invalid Data", "Fill all fields!", "error"), c(!0);
            else {
              var e = new Date(X);
              if (Q) {
                var t = new Date(Q);
                console.log(Q);
                var n = new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
              }
              var r = new Date(e.getTime() + 6e4 * e.getTimezoneOffset()),
                a = {
                  name: O,
                  template: { name: F },
                  url: U,
                  page: { name: A },
                  smtp: { name: te },
                  launch_date:
                    null === r || void 0 === r ? void 0 : r.toISOString(),
                  groups: [{ name: ce }],
                };
              Q && (a.send_by_date = n.toISOString()),
                console.log(a),
                Object(Ut.b)(a)
                  .then(function (e) {
                    console.log(e),
                      qt.a.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Compaign created successfully!",
                        showConfirmButton: !0,
                        timer: 2e3,
                      }),
                      He(),
                      Ae();
                  })
                  .catch(function (e) {
                    console.log(e),
                      c(!1),
                      qt.a.fire("Failed", e.response.data.message, "error");
                  });
            }
          };
        var He = function () {
            Object(Ut.u)()
              .then(function (e) {
                console.log(e), We(e.data);
              })
              .catch(function (e) {
                console.log(e);
              }),
              Object(Ut.A)()
                .then(function (e) {
                  console.log(e), ye(e.data);
                })
                .catch(function (e) {
                  console.log(e);
                }),
              Object(Ut.y)()
                .then(function (e) {
                  console.log(e), Ce(e.data);
                })
                .catch(function (e) {
                  console.log(e);
                }),
              Object(Ut.z)()
                .then(function (e) {
                  console.log(e), De(e.data);
                })
                .catch(function (e) {
                  console.log(e);
                }),
              Object(Ut.w)()
                .then(function (e) {
                  console.log(e), Ie(e.data);
                })
                .catch(function (e) {
                  console.log(e);
                });
          },
          Ge = Object(s.e)();
        return (
          Object(r.useEffect)(function () {
            He();
          }, []),
          setTimeout(function () {
            He();
          }, 9e5),
          Object(j.jsxs)(j.Fragment, {
            children: [
              Object(j.jsxs)(M.a, {
                title: "Users And Groups",
                children: [
                  Object(j.jsx)(Dt.a, {
                    sx: { maxWidth: 275 },
                    className: "mb-3",
                    style: { color: "black" },
                    children: Object(j.jsxs)(st.a, {
                      children: [
                        Object(j.jsx)(L.a, {
                          variant: "h4",
                          style: { color: "black" },
                          gutterBottom: !0,
                          children: "Compaign Summary",
                        }),
                        Object(j.jsxs)(L.a, {
                          variant: "h5",
                          component: "div",
                          color: "text.secondary",
                          children: [
                            "Total Compaign : ",
                            null === Ee || void 0 === Ee ? void 0 : Ee.length,
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(j.jsx)(N.a, {
                    variant: "contained",
                    className: "mb-3",
                    onClick: function () {
                      c(!0);
                    },
                    children: "New Compaign",
                  }),
                  Object(j.jsx)(Ft.a, {
                    open: n,
                    onClose: Ae,
                    "aria-labelledby": "modal-modal-title",
                    "aria-describedby": "modal-modal-description",
                    children: Object(j.jsx)(S.a, {
                      sx: Xt,
                      children: Object(j.jsxs)(S.a, {
                        component: "form",
                        sx: { "& > :not(style)": { m: 1, width: "41ch" } },
                        noValidate: !0,
                        autoComplete: "off",
                        children: [
                          Object(j.jsx)(L.a, {
                            id: "modal-modal-title",
                            variant: "h5",
                            component: "h2",
                            children: "Name",
                          }),
                          Object(j.jsx)(Bt.a, {
                            id: "outlined-basic",
                            label: "Compaign Name",
                            variant: "outlined",
                            style: { color: "black" },
                            color: "primary",
                            size: "small",
                            onChange: function (e) {
                              return x(e.target.value);
                            },
                          }),
                          Object(j.jsx)(L.a, {
                            id: "modal-modal-title",
                            variant: "h5",
                            component: "h2",
                            children: "Email Template",
                          }),
                          Object(j.jsx)("div", {
                            class: "col-sm-3",
                            children: Object(j.jsxs)("select", {
                              type: "text",
                              class: "form-control",
                              placeholder: "Select Email Template",
                              id: "firstName",
                              onBlur: function (e) {
                                return B(e.target.value);
                              },
                              children: [
                                Object(j.jsx)("option", {
                                  value: "",
                                  disabled: !0,
                                  selected: !0,
                                  children: "Select Email Template",
                                }),
                                null === ve || void 0 === ve
                                  ? void 0
                                  : ve.map(function (e, t) {
                                      return Object(j.jsx)(
                                        "option",
                                        { value: e.name, children: e.name },
                                        t
                                      );
                                    }),
                              ],
                            }),
                          }),
                          Object(j.jsx)(L.a, {
                            id: "modal-modal-title",
                            variant: "h5",
                            component: "h2",
                            children: "Landing Page",
                          }),
                          Object(j.jsx)("div", {
                            class: "col-sm-3",
                            children: Object(j.jsxs)("select", {
                              type: "text",
                              class: "form-control",
                              placeholder: "Select Landing Page",
                              id: "firstName",
                              onBlur: function (e) {
                                return R(e.target.value);
                              },
                              children: [
                                Object(j.jsx)("option", {
                                  value: "",
                                  disabled: !0,
                                  selected: !0,
                                  children: "Select Landing Page",
                                }),
                                null === ke || void 0 === ke
                                  ? void 0
                                  : ke.map(function (e, t) {
                                      return Object(j.jsx)(
                                        "option",
                                        { value: e.name, children: e.name },
                                        t
                                      );
                                    }),
                              ],
                            }),
                          }),
                          Object(j.jsx)(L.a, {
                            id: "modal-modal-title",
                            variant: "h5",
                            component: "h2",
                            children: "URL",
                          }),
                          Object(j.jsx)("div", {
                            class: "col-sm-3",
                            children: Object(j.jsx)("input", {
                              type: "email",
                              class: "form-control",
                              placeholder: "http://192.168.1.1",
                              id: "ip",
                              required: !0,
                              value: U,
                              onChange: function (e) {
                                return _(e.target.value);
                              },
                            }),
                          }),
                          Object(j.jsx)(L.a, {
                            id: "modal-modal-title",
                            variant: "h5",
                            component: "h2",
                            children: "Launch Date",
                          }),
                          Object(j.jsx)("div", {
                            class: "col-sm-3",
                            children: Object(j.jsx)("input", {
                              type: "datetime-local",
                              class: "form-control",
                              placeholder: "Select Launch Date",
                              id: "ip",
                              required: !0,
                              value: X,
                              onChange: function (e) {
                                return J(e.target.value);
                              },
                            }),
                          }),
                          Object(j.jsx)(L.a, {
                            id: "modal-modal-title",
                            variant: "h5",
                            component: "h2",
                            children: "Send Emails By (Optional)",
                          }),
                          Object(j.jsx)("div", {
                            class: "col-sm-3",
                            children: Object(j.jsx)("input", {
                              type: "datetime-local",
                              class: "form-control",
                              placeholder: "Select Launch Date",
                              id: "ip",
                              value: Q,
                              onChange: function (e) {
                                return Z(e.target.value);
                              },
                            }),
                          }),
                          Object(j.jsx)(L.a, {
                            id: "modal-modal-title",
                            variant: "h5",
                            component: "h2",
                            children: "Sending Profile",
                          }),
                          Object(j.jsx)("div", {
                            class: "col-sm-3",
                            children: Object(j.jsxs)("select", {
                              type: "text",
                              class: "form-control",
                              placeholder: "Select Landing Page",
                              id: "firstName",
                              onBlur: function (e) {
                                return ne(e.target.value);
                              },
                              children: [
                                Object(j.jsx)("option", {
                                  value: "",
                                  disabled: !0,
                                  selected: !0,
                                  children: "Select Sending Profile",
                                }),
                                null === Me || void 0 === Me
                                  ? void 0
                                  : Me.map(function (e, t) {
                                      return Object(j.jsx)(
                                        "option",
                                        { value: e.name, children: e.name },
                                        t
                                      );
                                    }),
                              ],
                            }),
                          }),
                          Object(j.jsx)(Ft.a, {
                            open: b,
                            onClose: function () {
                              return h(!1);
                            },
                            "aria-labelledby": "modal-modal-title",
                            "aria-describedby": "modal-modal-description",
                            children: Object(j.jsxs)(S.a, {
                              sx: Vt,
                              children: [
                                Object(j.jsx)(L.a, {
                                  id: "modal-modal-title",
                                  variant: "h4",
                                  component: "h2",
                                  children: "Send Test Email",
                                }),
                                Object(j.jsxs)(L.a, {
                                  id: "modal-modal-description",
                                  sx: { mt: 2 },
                                  children: [
                                    "Send Test Email to:",
                                    Object(j.jsxs)("div", {
                                      className: "container my-2",
                                      children: [
                                        Object(j.jsxs)("div", {
                                          className: "row",
                                          children: [
                                            Object(j.jsx)("div", {
                                              className: "col-md-3",
                                              children: Object(j.jsx)("input", {
                                                placeholder: "First Name",
                                                className: "form-control",
                                                onChange: function (e) {
                                                  return se(e.target.value);
                                                },
                                              }),
                                            }),
                                            Object(j.jsx)("div", {
                                              className: "col-md-3",
                                              children: Object(j.jsx)("input", {
                                                placeholder: "Last Name",
                                                className: "form-control",
                                                onChange: function (e) {
                                                  return pe(e.target.value);
                                                },
                                              }),
                                            }),
                                            Object(j.jsx)("div", {
                                              className: "col-md-3",
                                              children: Object(j.jsx)("input", {
                                                placeholder: "Email",
                                                className: "form-control",
                                                onChange: function (e) {
                                                  return he(e.target.value);
                                                },
                                              }),
                                            }),
                                            Object(j.jsx)("div", {
                                              className: "col-md-3",
                                              children: Object(j.jsx)("input", {
                                                placeholder: "Position",
                                                className: "form-control",
                                                onChange: function (e) {
                                                  return Oe(e.target.value);
                                                },
                                              }),
                                            }),
                                          ],
                                        }),
                                        Object(j.jsx)(N.a, {
                                          variant: "contained",
                                          className: "mt-2",
                                          children: "Send",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          Object(j.jsx)(L.a, {
                            id: "modal-modal-title",
                            variant: "h5",
                            component: "h2",
                            children: "Groups",
                          }),
                          Object(j.jsx)("div", {
                            class: "col-sm-3",
                            children: Object(j.jsxs)("select", {
                              type: "text",
                              class: "form-control",
                              placeholder: "Select Landing Page",
                              id: "firstName",
                              onBlur: function (e) {
                                return ie(e.target.value);
                              },
                              children: [
                                Object(j.jsx)("option", {
                                  value: "",
                                  disabled: !0,
                                  selected: !0,
                                  children: "Select Group",
                                }),
                                null === Te || void 0 === Te
                                  ? void 0
                                  : Te.map(function (e, t) {
                                      return Object(j.jsx)(
                                        "option",
                                        { value: e.name, children: e.name },
                                        t
                                      );
                                    }),
                              ],
                            }),
                          }),
                          Object(j.jsx)(N.a, {
                            variant: "contained",
                            style: { backgroundColor: "#70d8bd" },
                            onClick: Re,
                            fullWidth: !0,
                            children: "Create Template",
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(j.jsxs)("table", {
                    className: "table table-hover mt-4",
                    children: [
                      Object(j.jsx)("thead", {
                        class: "thead-dark",
                        children: Object(j.jsxs)("tr", {
                          children: [
                            Object(j.jsx)("td", { children: "Name" }),
                            Object(j.jsx)("td", { children: "Created Date" }),
                            Object(j.jsx)("td", { children: "Status" }),
                            Object(j.jsx)("td", { children: "Actions" }),
                          ],
                        }),
                      }),
                      (null === Ee || void 0 === Ee ? void 0 : Ee.length) < 1
                        ? Object(j.jsx)("h5", { children: "Loading..." })
                        : Object(j.jsx)("tbody", {
                            children:
                              null === Ee || void 0 === Ee
                                ? void 0
                                : Ee.map(function (e, t) {
                                    return Object(j.jsxs)(
                                      "tr",
                                      {
                                        children: [
                                          Object(j.jsx)("td", {
                                            children: e.name,
                                          }),
                                          Object(j.jsx)("td", {
                                            children: new Date(
                                              e.created_date
                                            ).toUTCString(),
                                          }),
                                          Object(j.jsx)("td", {
                                            children: e.status,
                                          }),
                                          Object(j.jsxs)("td", {
                                            children: [
                                              Object(j.jsx)(Ke.a, {
                                                children: Object(j.jsx)(Rt.a, {
                                                  color: "primary",
                                                  onClick: function () {
                                                    return (
                                                      (t = e.id),
                                                      void Ge(
                                                        "/compaign/".concat(t)
                                                      )
                                                    );
                                                    var t;
                                                  },
                                                }),
                                              }),
                                              Object(j.jsx)(Ke.a, {
                                                children: Object(j.jsx)(Gt.a, {
                                                  color: "primary",
                                                  onClick: function () {
                                                    return (function (e) {
                                                      var t;
                                                      x(
                                                        null === e ||
                                                          void 0 === e
                                                          ? void 0
                                                          : e.name
                                                      ),
                                                        B(
                                                          null === e ||
                                                            void 0 === e
                                                            ? void 0
                                                            : e.template.name
                                                        ),
                                                        R(
                                                          null === e ||
                                                            void 0 === e
                                                            ? void 0
                                                            : e.page.name
                                                        ),
                                                        _(
                                                          null === e ||
                                                            void 0 === e
                                                            ? void 0
                                                            : e.url
                                                        ),
                                                        J(
                                                          null === e ||
                                                            void 0 === e
                                                            ? void 0
                                                            : e.launch_date
                                                        ),
                                                        Z(
                                                          null === e ||
                                                            void 0 === e
                                                            ? void 0
                                                            : e.send_by_date
                                                        ),
                                                        ne(
                                                          null === e ||
                                                            void 0 === e
                                                            ? void 0
                                                            : e.smtp.name
                                                        ),
                                                        ie(
                                                          null === e ||
                                                            void 0 === e ||
                                                            null ===
                                                              (t = e.groups) ||
                                                            void 0 === t
                                                            ? void 0
                                                            : t.name
                                                        ),
                                                        u(!0);
                                                    })(e);
                                                  },
                                                }),
                                              }),
                                              Object(j.jsx)(Ke.a, {
                                                children: Object(j.jsx)(Wt.a, {
                                                  color: "error",
                                                  onClick: function () {
                                                    return (function (e) {
                                                      Object(Ut.h)(e)
                                                        .then(function (e) {
                                                          console.log(e),
                                                            qt.a.fire({
                                                              icon: "success",
                                                              title: "Success!",
                                                              text: "Compaign deleted successfully!",
                                                              showConfirmButton:
                                                                !0,
                                                              timer: 2e3,
                                                            }),
                                                            He();
                                                        })
                                                        .catch(function (e) {
                                                          console.log(e),
                                                            qt.a.fire(
                                                              "Failed",
                                                              e.response.data
                                                                .message,
                                                              "error"
                                                            );
                                                        });
                                                    })(e.id);
                                                  },
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                          }),
                    ],
                  }),
                ],
              }),
              Object(j.jsx)(Ft.a, {
                open: l,
                onClose: Ae,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: Object(j.jsx)(S.a, {
                  sx: Xt,
                  children: Object(j.jsxs)(S.a, {
                    component: "form",
                    sx: { "& > :not(style)": { m: 1, width: "41ch" } },
                    noValidate: !0,
                    autoComplete: "off",
                    children: [
                      Object(j.jsx)(L.a, {
                        id: "modal-modal-title",
                        variant: "h5",
                        component: "h2",
                        children: "Name",
                      }),
                      Object(j.jsx)(Bt.a, {
                        id: "outlined-basic",
                        label: "Compaign Name",
                        variant: "outlined",
                        style: { color: "black" },
                        color: "primary",
                        size: "small",
                        value: O,
                        onChange: function (e) {
                          return x(e.target.value);
                        },
                      }),
                      Object(j.jsx)(L.a, {
                        id: "modal-modal-title",
                        variant: "h5",
                        component: "h2",
                        children: "Email Template",
                      }),
                      Object(j.jsx)("div", {
                        class: "col-sm-3",
                        children: Object(j.jsxs)("select", {
                          type: "text",
                          class: "form-control",
                          placeholder: "Select Email Template",
                          id: "firstName",
                          value: F,
                          onBlur: function (e) {
                            return B(e.target.value);
                          },
                          children: [
                            Object(j.jsx)("option", {
                              value: "",
                              disabled: !0,
                              selected: !0,
                              children: "Select Email Template",
                            }),
                            null === ve || void 0 === ve
                              ? void 0
                              : ve.map(function (e, t) {
                                  return Object(j.jsx)(
                                    "option",
                                    { value: e.name, children: e.name },
                                    t
                                  );
                                }),
                          ],
                        }),
                      }),
                      Object(j.jsx)(L.a, {
                        id: "modal-modal-title",
                        variant: "h5",
                        component: "h2",
                        children: "Landing Page",
                      }),
                      Object(j.jsx)("div", {
                        class: "col-sm-3",
                        children: Object(j.jsxs)("select", {
                          type: "text",
                          class: "form-control",
                          placeholder: "Select Landing Page",
                          id: "firstName",
                          value: A,
                          onBlur: function (e) {
                            return R(e.target.value);
                          },
                          children: [
                            Object(j.jsx)("option", {
                              value: "",
                              disabled: !0,
                              selected: !0,
                              children: "Select Landing Page",
                            }),
                            null === ke || void 0 === ke
                              ? void 0
                              : ke.map(function (e, t) {
                                  return Object(j.jsx)(
                                    "option",
                                    { value: e.name, children: e.name },
                                    t
                                  );
                                }),
                          ],
                        }),
                      }),
                      Object(j.jsx)(L.a, {
                        id: "modal-modal-title",
                        variant: "h5",
                        component: "h2",
                        children: "URL",
                      }),
                      Object(j.jsx)("div", {
                        class: "col-sm-3",
                        children: Object(j.jsx)("input", {
                          type: "email",
                          class: "form-control",
                          placeholder: "http://192.168.1.1",
                          id: "ip",
                          required: !0,
                          value: U,
                          onChange: function (e) {
                            return _(e.target.value);
                          },
                        }),
                      }),
                      Object(j.jsx)(L.a, {
                        id: "modal-modal-title",
                        variant: "h5",
                        component: "h2",
                        children: "Launch Date",
                      }),
                      Object(j.jsx)("div", {
                        class: "col-sm-3",
                        children: Object(j.jsx)("input", {
                          type: "datetime-local",
                          class: "form-control",
                          placeholder: "Select Launch Date",
                          id: "ip",
                          required: !0,
                          value: X,
                          onChange: function (e) {
                            return J(e.target.value);
                          },
                        }),
                      }),
                      Object(j.jsx)(L.a, {
                        id: "modal-modal-title",
                        variant: "h5",
                        component: "h2",
                        children: "Send Emails By (Optional)",
                      }),
                      Object(j.jsx)("div", {
                        class: "col-sm-3",
                        children: Object(j.jsx)("input", {
                          type: "datetime-local",
                          class: "form-control",
                          placeholder: "Select Launch Date",
                          id: "ip",
                          value: Q,
                          onChange: function (e) {
                            return Z(e.target.value);
                          },
                        }),
                      }),
                      Object(j.jsx)(L.a, {
                        id: "modal-modal-title",
                        variant: "h5",
                        component: "h2",
                        children: "Sending Profile",
                      }),
                      Object(j.jsx)("div", {
                        class: "col-sm-3",
                        children: Object(j.jsxs)("select", {
                          type: "text",
                          class: "form-control",
                          placeholder: "Select Landing Page",
                          id: "firstName",
                          value: te,
                          onBlur: function (e) {
                            return ne(e.target.value);
                          },
                          children: [
                            Object(j.jsx)("option", {
                              value: "",
                              disabled: !0,
                              selected: !0,
                              children: "Select Sending Profile",
                            }),
                            null === Me || void 0 === Me
                              ? void 0
                              : Me.map(function (e, t) {
                                  return Object(j.jsx)(
                                    "option",
                                    { value: e.name, children: e.name },
                                    t
                                  );
                                }),
                          ],
                        }),
                      }),
                      Object(j.jsx)(Ft.a, {
                        open: b,
                        onClose: function () {
                          return h(!1);
                        },
                        "aria-labelledby": "modal-modal-title",
                        "aria-describedby": "modal-modal-description",
                        children: Object(j.jsxs)(S.a, {
                          sx: Vt,
                          children: [
                            Object(j.jsx)(L.a, {
                              id: "modal-modal-title",
                              variant: "h4",
                              component: "h2",
                              children: "Send Test Email",
                            }),
                            Object(j.jsxs)(L.a, {
                              id: "modal-modal-description",
                              sx: { mt: 2 },
                              children: [
                                "Send Test Email to:",
                                Object(j.jsxs)("div", {
                                  className: "container my-2",
                                  children: [
                                    Object(j.jsxs)("div", {
                                      className: "row",
                                      children: [
                                        Object(j.jsx)("div", {
                                          className: "col-md-3",
                                          children: Object(j.jsx)("input", {
                                            placeholder: "First Name",
                                            className: "form-control",
                                            onChange: function (e) {
                                              return se(e.target.value);
                                            },
                                          }),
                                        }),
                                        Object(j.jsx)("div", {
                                          className: "col-md-3",
                                          children: Object(j.jsx)("input", {
                                            placeholder: "Last Name",
                                            className: "form-control",
                                            onChange: function (e) {
                                              return pe(e.target.value);
                                            },
                                          }),
                                        }),
                                        Object(j.jsx)("div", {
                                          className: "col-md-3",
                                          children: Object(j.jsx)("input", {
                                            placeholder: "Email",
                                            className: "form-control",
                                            onChange: function (e) {
                                              return he(e.target.value);
                                            },
                                          }),
                                        }),
                                        Object(j.jsx)("div", {
                                          className: "col-md-3",
                                          children: Object(j.jsx)("input", {
                                            placeholder: "Position",
                                            className: "form-control",
                                            onChange: function (e) {
                                              return Oe(e.target.value);
                                            },
                                          }),
                                        }),
                                      ],
                                    }),
                                    Object(j.jsx)(N.a, {
                                      variant: "contained",
                                      className: "mt-2",
                                      children: "Send",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(j.jsx)(L.a, {
                        id: "modal-modal-title",
                        variant: "h5",
                        component: "h2",
                        children: "Groups",
                      }),
                      Object(j.jsx)("div", {
                        class: "col-sm-3",
                        children: Object(j.jsxs)("select", {
                          type: "text",
                          class: "form-control",
                          placeholder: "Select Landing Page",
                          id: "firstName",
                          value: ce,
                          onBlur: function (e) {
                            return ie(e.target.value);
                          },
                          children: [
                            Object(j.jsx)("option", {
                              value: "",
                              disabled: !0,
                              selected: !0,
                              children: "Select Group",
                            }),
                            null === Te || void 0 === Te
                              ? void 0
                              : Te.map(function (e, t) {
                                  return Object(j.jsx)(
                                    "option",
                                    { value: e.name, children: e.name },
                                    t
                                  );
                                }),
                          ],
                        }),
                      }),
                      Object(j.jsx)(N.a, {
                        variant: "contained",
                        style: { backgroundColor: "#70d8bd" },
                        onClick: Re,
                        fullWidth: !0,
                        children: "Create Template",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var Yt = m(
          Object(r.lazy)(function () {
            return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 1018));
          })
        ),
        Kt = m(
          Object(r.lazy)(function () {
            return n.e(21).then(n.bind(null, 1004));
          })
        ),
        Qt = m(
          Object(r.lazy)(function () {
            return n.e(8).then(n.bind(null, 1005));
          })
        ),
        Zt = m(
          Object(r.lazy)(function () {
            return Promise.all([n.e(9), n.e(22)]).then(n.bind(null, 1006));
          })
        ),
        $t = m(
          Object(r.lazy)(function () {
            return Promise.all([n.e(17), n.e(20)]).then(n.bind(null, 1007));
          })
        ),
        en = m(
          Object(r.lazy)(function () {
            return n.e(16).then(n.bind(null, 1008));
          })
        ),
        tn = m(
          Object(r.lazy)(function () {
            return Promise.all([n.e(5), n.e(19)]).then(n.bind(null, 1009));
          })
        ),
        nn = m(
          Object(r.lazy)(function () {
            return n.e(15).then(n.bind(null, 1010));
          })
        ),
        rn = m(
          Object(r.lazy)(function () {
            return Promise.all([n.e(0), n.e(18), n.e(7)]).then(
              n.bind(null, 1011)
            );
          })
        ),
        an = m(
          Object(r.lazy)(function () {
            return n.e(14).then(n.bind(null, 1012));
          })
        ),
        cn = m(
          Object(r.lazy)(function () {
            return n.e(12).then(n.bind(null, 1013));
          })
        ),
        on = m(
          Object(r.lazy)(function () {
            return n.e(13).then(n.bind(null, 1014));
          })
        ),
        ln = m(
          Object(r.lazy)(function () {
            return n.e(11).then(n.bind(null, 1015));
          })
        ),
        sn = m(
          Object(r.lazy)(function () {
            return n.e(1).then(n.bind(null, 1003));
          })
        ),
        un = {
          path: "/",
          element: localStorage.getItem("siemToken")
            ? Object(j.jsx)(Mt, {})
            : Object(j.jsx)(sn, {}),
          children: [
            { path: "/", element: Object(j.jsx)(Yt, {}) },
            { path: "color", element: Object(j.jsx)(cn, {}) },
            { path: "sample-page", element: Object(j.jsx)(Kt, {}) },
            { path: "Phishing", element: Object(j.jsx)(Qt, {}) },
            { path: "/user-page", element: Object(j.jsx)(Zt, {}) },
            { path: "/templates", element: Object(j.jsx)(en, {}) },
            { path: "/landing-page", element: Object(j.jsx)($t, {}) },
            { path: "/sending-profile", element: Object(j.jsx)(nn, {}) },
            { path: "/compaigns", element: Object(j.jsx)(Jt, {}) },
            { path: "/compaign/:id", element: Object(j.jsx)(tn, {}) },
            { path: "siem", element: Object(j.jsx)(rn, {}) },
            { path: "shadow", element: Object(j.jsx)(on, {}) },
            { path: "typography", element: Object(j.jsx)(an, {}) },
            { path: "icons/ant", element: Object(j.jsx)(ln, {}) },
          ],
        };
      function dn() {
        return Object(s.h)([un, g]);
      }
      var pn = n(901),
        jn = n(902),
        bn = n(373),
        hn = n(915),
        mn = n(371),
        fn = function (e) {
          var t = e.blue,
            n = e.red,
            r = e.gold,
            a = e.cyan,
            c = e.green,
            i = e.grey,
            o = {
              0: i[0],
              50: i[1],
              100: i[2],
              200: i[3],
              300: i[4],
              400: i[5],
              500: i[6],
              600: i[7],
              700: i[8],
              800: i[9],
              900: i[10],
              A50: i[15],
              A100: i[11],
              A200: i[12],
              A400: i[13],
              A700: i[14],
              A800: i[16],
            },
            l = "#fff";
          return {
            primary: {
              lighter: t[0],
              100: t[1],
              200: t[2],
              light: t[3],
              400: t[4],
              main: t[5],
              dark: t[6],
              700: t[7],
              darker: t[8],
              900: t[9],
              contrastText: l,
            },
            secondary: {
              lighter: o[100],
              100: o[100],
              200: o[200],
              light: o[300],
              400: o[400],
              main: o[500],
              600: o[600],
              dark: o[700],
              800: o[800],
              darker: o[900],
              A100: o[0],
              A200: o.A400,
              A300: o.A700,
              contrastText: o[0],
            },
            error: {
              lighter: n[0],
              light: n[2],
              main: n[4],
              dark: n[7],
              darker: n[9],
              contrastText: l,
            },
            warning: {
              lighter: r[0],
              light: r[3],
              main: r[5],
              dark: r[7],
              darker: r[9],
              contrastText: o[100],
            },
            info: {
              lighter: a[0],
              light: a[3],
              main: a[5],
              dark: a[7],
              darker: a[9],
              contrastText: l,
            },
            success: {
              lighter: c[0],
              light: c[3],
              main: c[5],
              dark: c[7],
              darker: c[9],
              contrastText: l,
            },
            grey: o,
          };
        },
        On = function (e) {
          var t = mn.a;
          t.grey = [].concat(
            [
              "#ffffff",
              "#fafafa",
              "#f5f5f5",
              "#f0f0f0",
              "#d9d9d9",
              "#bfbfbf",
              "#8c8c8c",
              "#595959",
              "#ffffff",
              "#141414",
              "#000000",
            ],
            ["#fafafa", "#bfbfbf", "#434343", "#1f1f1f"],
            ["#fafafb", "#e6ebf1"]
          );
          var n = fn(t);
          return Object(bn.a)({
            palette: Object(u.a)(
              Object(u.a)(
                { mode: e, common: { black: "#000", white: "#fff" } },
                n
              ),
              {},
              {
                text: {
                  primary: n.grey[700],
                  secondary: n.grey[500],
                  disabled: n.grey[400],
                },
                action: { disabled: n.grey[300] },
                divider: n.grey[200],
                background: { paper: n.grey[0], default: n.grey.A50 },
              }
            ),
          });
        },
        xn = function (e) {
          return {
            htmlFontSize: 16,
            fontFamily: e,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 600,
            h1: { fontWeight: 600, fontSize: "2.375rem", lineHeight: 1.21 },
            h2: { fontWeight: 600, fontSize: "1.875rem", lineHeight: 1.27 },
            h3: { fontWeight: 600, fontSize: "1.5rem", lineHeight: 1.33 },
            h4: { fontWeight: 600, fontSize: "1.25rem", lineHeight: 1.4 },
            h5: { fontWeight: 600, fontSize: "1rem", lineHeight: 1.5 },
            h6: { fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.57 },
            caption: { fontWeight: 400, fontSize: "0.75rem", lineHeight: 1.66 },
            body1: { fontSize: "0.875rem", lineHeight: 1.57 },
            body2: { fontSize: "0.75rem", lineHeight: 1.66 },
            subtitle1: {
              fontSize: "0.875rem",
              fontWeight: 600,
              lineHeight: 1.57,
            },
            subtitle2: {
              fontSize: "0.75rem",
              fontWeight: 500,
              lineHeight: 1.66,
            },
            overline: { lineHeight: 1.66 },
            button: { textTransform: "capitalize" },
          };
        },
        gn = function (e) {
          return {
            button: "0 2px #0000000b",
            text: "0 -1px 0 rgb(0 0 0 / 12%)",
            z1: "0px 2px 8px ".concat(Object(Ee.a)(e.palette.grey[900], 0.15)),
          };
        };
      function vn(e) {
        return Object(gt.merge)(
          (function (e) {
            var t = {
              "&.Mui-disabled": { backgroundColor: e.palette.grey[200] },
            };
            return {
              MuiButton: {
                defaultProps: { disableElevation: !0 },
                styleOverrides: {
                  root: { fontWeight: 400 },
                  contained: Object(u.a)({}, t),
                  outlined: Object(u.a)({}, t),
                },
              },
            };
          })(e),
          (function (e) {
            return {
              MuiBadge: {
                styleOverrides: {
                  standard: {
                    minWidth: e.spacing(2),
                    height: e.spacing(2),
                    padding: e.spacing(0.5),
                  },
                },
              },
            };
          })(e),
          {
            MuiCardContent: {
              styleOverrides: {
                root: { padding: 20, "&:last-child": { paddingBottom: 20 } },
              },
            },
          },
          (function (e) {
            return {
              MuiCheckbox: {
                styleOverrides: { root: { color: e.palette.secondary[300] } },
              },
            };
          })(e),
          (function (e) {
            return {
              MuiChip: {
                styleOverrides: {
                  root: { borderRadius: 4, "&:active": { boxShadow: "none" } },
                  sizeLarge: { fontSize: "1rem", height: 40 },
                  light: {
                    color: e.palette.primary.main,
                    backgroundColor: e.palette.primary.lighter,
                    borderColor: e.palette.primary.light,
                    "&.MuiChip-lightError": {
                      color: e.palette.error.main,
                      backgroundColor: e.palette.error.lighter,
                      borderColor: e.palette.error.light,
                    },
                    "&.MuiChip-lightSuccess": {
                      color: e.palette.success.main,
                      backgroundColor: e.palette.success.lighter,
                      borderColor: e.palette.success.light,
                    },
                    "&.MuiChip-lightWarning": {
                      color: e.palette.warning.main,
                      backgroundColor: e.palette.warning.lighter,
                      borderColor: e.palette.warning.light,
                    },
                  },
                },
              },
            };
          })(e),
          (function (e) {
            return {
              MuiIconButton: {
                styleOverrides: {
                  root: { borderRadius: 4 },
                  sizeLarge: {
                    width: e.spacing(5.5),
                    height: e.spacing(5.5),
                    fontSize: "1.25rem",
                  },
                  sizeMedium: {
                    width: e.spacing(4.5),
                    height: e.spacing(4.5),
                    fontSize: "1rem",
                  },
                  sizeSmall: {
                    width: e.spacing(3.75),
                    height: e.spacing(3.75),
                    fontSize: "0.75rem",
                  },
                },
              },
            };
          })(e),
          (function (e) {
            return {
              MuiInputLabel: {
                styleOverrides: {
                  root: { color: e.palette.grey[600] },
                  outlined: {
                    lineHeight: "0.8em",
                    "&.MuiInputLabel-sizeSmall": { lineHeight: "1em" },
                    "&.MuiInputLabel-shrink": {
                      background: e.palette.background.paper,
                      padding: "0 8px",
                      marginLeft: -6,
                      lineHeight: "1.4375em",
                    },
                  },
                },
              },
            };
          })(e),
          {
            MuiLinearProgress: {
              styleOverrides: {
                root: { height: 6, borderRadius: 100 },
                bar: { borderRadius: 100 },
              },
            },
          },
          { MuiLink: { defaultProps: { underline: "hover" } } },
          { MuiListItemIcon: { styleOverrides: { root: { minWidth: 24 } } } },
          (function (e) {
            return {
              MuiOutlinedInput: {
                styleOverrides: {
                  input: { padding: "10.5px 14px 10.5px 12px" },
                  notchedOutline: { borderColor: e.palette.grey[300] },
                  root: {
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: e.palette.primary.light,
                    },
                    "&.Mui-focused": {
                      boxShadow: "0 0 0 2px ".concat(
                        Object(Ee.a)(e.palette.primary.main, 0.2)
                      ),
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid ".concat(e.palette.primary.light),
                      },
                    },
                    "&.Mui-error": {
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: e.palette.error.light,
                      },
                      "&.Mui-focused": {
                        boxShadow: "0 0 0 2px ".concat(
                          Object(Ee.a)(e.palette.error.main, 0.2)
                        ),
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid ".concat(e.palette.error.light),
                        },
                      },
                    },
                  },
                  inputSizeSmall: { padding: "7.5px 8px 7.5px 12px" },
                  inputMultiline: { padding: 0 },
                },
              },
            };
          })(e),
          (function (e) {
            return {
              MuiTab: {
                styleOverrides: {
                  root: { minHeight: 46, color: e.palette.text.primary },
                },
              },
            };
          })(e),
          (function (e) {
            return {
              MuiTableCell: {
                styleOverrides: {
                  root: {
                    fontSize: "0.875rem",
                    padding: 12,
                    borderColor: e.palette.divider,
                  },
                  head: { fontWeight: 600, paddingTop: 20, paddingBottom: 20 },
                },
              },
            };
          })(e),
          {
            MuiTabs: { styleOverrides: { vertical: { overflow: "visible" } } },
          },
          {
            MuiTypography: {
              styleOverrides: { gutterBottom: { marginBottom: 12 } },
            },
          }
        );
      }
      function yn(e) {
        var t = e.children,
          n = On("light", "default"),
          a = xn("'Public Sans', sans-serif"),
          c = Object(r.useMemo)(
            function () {
              return gn(n);
            },
            [n]
          ),
          i = Object(r.useMemo)(
            function () {
              return {
                breakpoints: {
                  values: { xs: 0, sm: 768, md: 1024, lg: 1266, xl: 1536 },
                },
                direction: "ltr",
                mixins: {
                  toolbar: { minHeight: 60, paddingTop: 8, paddingBottom: 8 },
                },
                palette: n.palette,
                customShadows: c,
                typography: a,
              };
            },
            [n, a, c]
          ),
          o = Object(bn.a)(i);
        return (
          (o.components = vn(o)),
          Object(j.jsx)(pn.a, {
            injectFirst: !0,
            children: Object(j.jsxs)(hn.a, {
              theme: o,
              children: [Object(j.jsx)(jn.a, {}), t],
            }),
          })
        );
      }
      var wn = n(12),
        Sn = function (e) {
          var t = e.children,
            n = Object(s.d)().pathname;
          return (
            Object(r.useEffect)(
              function () {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              },
              [n]
            ),
            t || null
          );
        };
      Sn.propTypes = { children: n.n(wn).a.node };
      var kn = Sn,
        Cn =
          (n(817),
          function () {
            return Object(j.jsx)(yn, {
              children: Object(j.jsx)(kn, { children: Object(j.jsx)(dn, {}) }),
            });
          }),
        zn = n(67),
        Pn = Object(zn.b)({ menu: G }),
        Tn = Object(R.a)({ reducer: Pn }),
        In =
          (Tn.dispatch,
          function (e) {
            e &&
              e instanceof Function &&
              n
                .e(23)
                .then(n.bind(null, 1016))
                .then(function (t) {
                  var n = t.getCLS,
                    r = t.getFID,
                    a = t.getFCP,
                    c = t.getLCP,
                    i = t.getTTFB;
                  n(e), r(e), a(e), c(e), i(e);
                });
          });
      i.a.render(
        Object(j.jsx)(r.StrictMode, {
          children: Object(j.jsx)(l.a, {
            store: Tn,
            children: Object(j.jsx)(o.a, {
              basename: "/",
              children: Object(j.jsx)(Cn, {}),
            }),
          }),
        }),
        document.getElementById("root")
      ),
        In();
    },
  },
  [[818, 3, 4]],
]);
//# sourceMappingURL=main.cfe8ed7c.chunk.js.map

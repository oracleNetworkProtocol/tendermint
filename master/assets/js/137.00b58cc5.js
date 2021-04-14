(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{609:function(I,y,b){"use strict";b.r(y);var l=b(1),g=Object(l.a)({},(function(){var I=this,y=I.$createElement,b=I._self._c||y;return b("ContentSlotsDistributor",{attrs:{"slot-key":I.$parent.slotKey}},[b("h1",{attrs:{id:"configuration"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[I._v("#")]),I._v(" Configuration")]),I._v(" "),b("p",[I._v("Tendermint Core can be configured via a TOML file in\n"),b("code",[I._v("$TMHOME/config/config.toml")]),I._v(". Some of these parameters can be overridden by\ncommand-line flags. For most users, the options in the "),b("code",[I._v("##### main base configuration options #####")]),I._v(" are intended to be modified while config options\nfurther below are intended for advance power users.")]),I._v(" "),b("h2",{attrs:{id:"options"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[I._v("#")]),I._v(" Options")]),I._v(" "),b("p",[I._v("The default configuration file create by "),b("code",[I._v("tendermint init")]),I._v(" has all\nthe parameters set with their default values. It will look something\nlike the file below, however, double check by inspecting the\n"),b("code",[I._v("config.toml")]),I._v(" created with your version of "),b("code",[I._v("tendermint")]),I._v(" installed:")]),I._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBUaGlzIGlzIGEgVE9NTCBjb25maWcgZmlsZS4KIyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90b21sLWxhbmcvdG9tbAoKIyBOT1RFOiBBbnkgcGF0aCBiZWxvdyBjYW4gYmUgYWJzb2x1dGUgKGUuZy4gJnF1b3Q7L3Zhci9teWF3ZXNvbWVhcHAvZGF0YSZxdW90Oykgb3IKIyByZWxhdGl2ZSB0byB0aGUgaG9tZSBkaXJlY3RvcnkgKGUuZy4gJnF1b3Q7ZGF0YSZxdW90OykuIFRoZSBob21lIGRpcmVjdG9yeSBpcwojICZxdW90OyRIT01FLy50ZW5kZXJtaW50JnF1b3Q7IGJ5IGRlZmF1bHQsIGJ1dCBjb3VsZCBiZSBjaGFuZ2VkIHZpYSAkVE1IT01FIGVudiB2YXJpYWJsZQojIG9yIC0taG9tZSBjbWQgZmxhZy4KCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCiMjIyAgICAgICAgICAgICAgICAgICBNYWluIEJhc2UgQ29uZmlnIE9wdGlvbnMgICAgICAgICAgICAgICAgICAgICAgIyMjCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCgojIFRDUCBvciBVTklYIHNvY2tldCBhZGRyZXNzIG9mIHRoZSBBQkNJIGFwcGxpY2F0aW9uLAojIG9yIHRoZSBuYW1lIG9mIGFuIEFCQ0kgYXBwbGljYXRpb24gY29tcGlsZWQgaW4gd2l0aCB0aGUgVGVuZGVybWludCBiaW5hcnkKcHJveHktYXBwID0gJnF1b3Q7dGNwOi8vMTI3LjAuMC4xOjI2NjU4JnF1b3Q7CgojIEEgY3VzdG9tIGh1bWFuIHJlYWRhYmxlIG5hbWUgZm9yIHRoaXMgbm9kZQptb25pa2VyID0gJnF1b3Q7YW5vbnltb3VzJnF1b3Q7CgojIElmIHRoaXMgbm9kZSBpcyBtYW55IGJsb2NrcyBiZWhpbmQgdGhlIHRpcCBvZiB0aGUgY2hhaW4sIEZhc3RTeW5jCiMgYWxsb3dzIHRoZW0gdG8gY2F0Y2h1cCBxdWlja2x5IGJ5IGRvd25sb2FkaW5nIGJsb2NrcyBpbiBwYXJhbGxlbAojIGFuZCB2ZXJpZnlpbmcgdGhlaXIgY29tbWl0cwpmYXN0LXN5bmMgPSB0cnVlCgojIE1vZGUgb2YgTm9kZTogZnVsbCB8IHZhbGlkYXRvciB8IHNlZWQgKGRlZmF1bHQ6ICZxdW90O3ZhbGlkYXRvciZxdW90OykKIyAqIHZhbGlkYXRvciBub2RlIChkZWZhdWx0KQojICAgLSBhbGwgcmVhY3RvcnMKIyAgIC0gd2l0aCBwcml2X3ZhbGlkYXRvcl9rZXkuanNvbiwgcHJpdl92YWxpZGF0b3Jfc3RhdGUuanNvbgojICogZnVsbCBub2RlIAojICAgLSBhbGwgcmVhY3RvcnMKIyAgIC0gTm8gcHJpdl92YWxpZGF0b3Jfa2V5Lmpzb24sIHByaXZfdmFsaWRhdG9yX3N0YXRlLmpzb24KIyAqIHNlZWQgbm9kZQojICAgLSBvbmx5IFAyUCwgUEVYIFJlYWN0b3IKIyAgIC0gTm8gcHJpdl92YWxpZGF0b3Jfa2V5Lmpzb24sIHByaXZfdmFsaWRhdG9yX3N0YXRlLmpzb24KbW9kZSA9ICZxdW90O3ZhbGlkYXRvciZxdW90OwoKIyBEYXRhYmFzZSBiYWNrZW5kOiBnb2xldmVsZGIgfCBjbGV2ZWxkYiB8IGJvbHRkYiB8IHJvY2tzZGIgfCBiYWRnZXJkYgojICogZ29sZXZlbGRiIChnaXRodWIuY29tL3N5bmR0ci9nb2xldmVsZGIgLSBtb3N0IHBvcHVsYXIgaW1wbGVtZW50YXRpb24pCiMgICAtIHB1cmUgZ28KIyAgIC0gc3RhYmxlCiMgKiBjbGV2ZWxkYiAodXNlcyBsZXZpZ28gd3JhcHBlcikKIyAgIC0gZmFzdAojICAgLSByZXF1aXJlcyBnY2MKIyAgIC0gdXNlIGNsZXZlbGRiIGJ1aWxkIHRhZyAoZ28gYnVpbGQgLXRhZ3MgY2xldmVsZGIpCiMgKiBib2x0ZGIgKHVzZXMgZXRjZCdzIGZvcmsgb2YgYm9sdCAtIGdpdGh1Yi5jb20vZXRjZC1pby9iYm9sdCkKIyAgIC0gRVhQRVJJTUVOVEFMCiMgICAtIG1heSBiZSBmYXN0ZXIgaXMgc29tZSB1c2UtY2FzZXMgKHJhbmRvbSByZWFkcyAtIGluZGV4ZXIpCiMgICAtIHVzZSBib2x0ZGIgYnVpbGQgdGFnIChnbyBidWlsZCAtdGFncyBib2x0ZGIpCiMgKiByb2Nrc2RiICh1c2VzIGdpdGh1Yi5jb20vdGVjYm90L2dvcm9ja3NkYikKIyAgIC0gRVhQRVJJTUVOVEFMCiMgICAtIHJlcXVpcmVzIGdjYwojICAgLSB1c2Ugcm9ja3NkYiBidWlsZCB0YWcgKGdvIGJ1aWxkIC10YWdzIHJvY2tzZGIpCiMgKiBiYWRnZXJkYiAodXNlcyBnaXRodWIuY29tL2RncmFwaC1pby9iYWRnZXIpCiMgICAtIEVYUEVSSU1FTlRBTAojICAgLSB1c2UgYmFkZ2VyZGIgYnVpbGQgdGFnIChnbyBidWlsZCAtdGFncyBiYWRnZXJkYikKZGItYmFja2VuZCA9ICZxdW90O2dvbGV2ZWxkYiZxdW90OwoKIyBEYXRhYmFzZSBkaXJlY3RvcnkKZGItZGlyID0gJnF1b3Q7ZGF0YSZxdW90OwoKIyBPdXRwdXQgbGV2ZWwgZm9yIGxvZ2dpbmcsIGluY2x1ZGluZyBwYWNrYWdlIGxldmVsIG9wdGlvbnMKbG9nLWxldmVsID0gJnF1b3Q7bWFpbjppbmZvLHN0YXRlOmluZm8sc3RhdGVzeW5jOmluZm8sKjplcnJvciZxdW90OwoKIyBPdXRwdXQgZm9ybWF0OiAncGxhaW4nIChjb2xvcmVkIHRleHQpIG9yICdqc29uJwpsb2ctZm9ybWF0ID0gJnF1b3Q7cGxhaW4mcXVvdDsKCiMjIyMjIGFkZGl0aW9uYWwgYmFzZSBjb25maWcgb3B0aW9ucyAjIyMjIwoKIyBQYXRoIHRvIHRoZSBKU09OIGZpbGUgY29udGFpbmluZyB0aGUgaW5pdGlhbCB2YWxpZGF0b3Igc2V0IGFuZCBvdGhlciBtZXRhIGRhdGEKZ2VuZXNpcy1maWxlID0gJnF1b3Q7Y29uZmlnL2dlbmVzaXMuanNvbiZxdW90OwoKIyBQYXRoIHRvIHRoZSBKU09OIGZpbGUgY29udGFpbmluZyB0aGUgcHJpdmF0ZSBrZXkgdG8gdXNlIGFzIGEgdmFsaWRhdG9yIGluIHRoZSBjb25zZW5zdXMgcHJvdG9jb2wKcHJpdi12YWxpZGF0b3Ita2V5LWZpbGUgPSAmcXVvdDtjb25maWcvcHJpdl92YWxpZGF0b3Jfa2V5Lmpzb24mcXVvdDsKCiMgUGF0aCB0byB0aGUgSlNPTiBmaWxlIGNvbnRhaW5pbmcgdGhlIGxhc3Qgc2lnbiBzdGF0ZSBvZiBhIHZhbGlkYXRvcgpwcml2LXZhbGlkYXRvci1zdGF0ZS1maWxlID0gJnF1b3Q7ZGF0YS9wcml2X3ZhbGlkYXRvcl9zdGF0ZS5qc29uJnF1b3Q7CgojIFRDUCBvciBVTklYIHNvY2tldCBhZGRyZXNzIGZvciBUZW5kZXJtaW50IHRvIGxpc3RlbiBvbiBmb3IKIyBjb25uZWN0aW9ucyBmcm9tIGFuIGV4dGVybmFsIFByaXZWYWxpZGF0b3IgcHJvY2Vzcwpwcml2LXZhbGlkYXRvci1sYWRkciA9ICZxdW90OyZxdW90OwoKIyBQYXRoIHRvIHRoZSBKU09OIGZpbGUgY29udGFpbmluZyB0aGUgcHJpdmF0ZSBrZXkgdG8gdXNlIGZvciBub2RlIGF1dGhlbnRpY2F0aW9uIGluIHRoZSBwMnAgcHJvdG9jb2wKbm9kZS1rZXktZmlsZSA9ICZxdW90O2NvbmZpZy9ub2RlX2tleS5qc29uJnF1b3Q7CgojIE1lY2hhbmlzbSB0byBjb25uZWN0IHRvIHRoZSBBQkNJIGFwcGxpY2F0aW9uOiBzb2NrZXQgfCBncnBjCmFiY2kgPSAmcXVvdDtzb2NrZXQmcXVvdDsKCiMgSWYgdHJ1ZSwgcXVlcnkgdGhlIEFCQ0kgYXBwIG9uIGNvbm5lY3RpbmcgdG8gYSBuZXcgcGVlcgojIHNvIHRoZSBhcHAgY2FuIGRlY2lkZSBpZiB3ZSBzaG91bGQga2VlcCB0aGUgY29ubmVjdGlvbiBvciBub3QKZmlsdGVyLXBlZXJzID0gZmFsc2UKCgojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwojIyMgICAgICAgICAgICAgICAgIEFkdmFuY2VkIENvbmZpZ3VyYXRpb24gT3B0aW9ucyAgICAgICAgICAgICAgICAgICMjIwojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwoKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwojIyMgICAgICAgUlBDIFNlcnZlciBDb25maWd1cmF0aW9uIE9wdGlvbnMgICAgICAgICAgIyMjCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKW3JwY10KCiMgVENQIG9yIFVOSVggc29ja2V0IGFkZHJlc3MgZm9yIHRoZSBSUEMgc2VydmVyIHRvIGxpc3RlbiBvbgpsYWRkciA9ICZxdW90O3RjcDovLzEyNy4wLjAuMToyNjY1NyZxdW90OwoKIyBBIGxpc3Qgb2Ygb3JpZ2lucyBhIGNyb3NzLWRvbWFpbiByZXF1ZXN0IGNhbiBiZSBleGVjdXRlZCBmcm9tCiMgRGVmYXVsdCB2YWx1ZSAnW10nIGRpc2FibGVzIGNvcnMgc3VwcG9ydAojIFVzZSAnWyZxdW90OyomcXVvdDtdJyB0byBhbGxvdyBhbnkgb3JpZ2luCmNvcnMtYWxsb3dlZC1vcmlnaW5zID0gW10KCiMgQSBsaXN0IG9mIG1ldGhvZHMgdGhlIGNsaWVudCBpcyBhbGxvd2VkIHRvIHVzZSB3aXRoIGNyb3NzLWRvbWFpbiByZXF1ZXN0cwpjb3JzLWFsbG93ZWQtbWV0aG9kcyA9IFsmcXVvdDtIRUFEJnF1b3Q7LCAmcXVvdDtHRVQmcXVvdDssICZxdW90O1BPU1QmcXVvdDssIF0KCiMgQSBsaXN0IG9mIG5vbiBzaW1wbGUgaGVhZGVycyB0aGUgY2xpZW50IGlzIGFsbG93ZWQgdG8gdXNlIHdpdGggY3Jvc3MtZG9tYWluIHJlcXVlc3RzCmNvcnMtYWxsb3dlZC1oZWFkZXJzID0gWyZxdW90O09yaWdpbiZxdW90OywgJnF1b3Q7QWNjZXB0JnF1b3Q7LCAmcXVvdDtDb250ZW50LVR5cGUmcXVvdDssICZxdW90O1gtUmVxdWVzdGVkLVdpdGgmcXVvdDssICZxdW90O1gtU2VydmVyLVRpbWUmcXVvdDssIF0KCiMgVENQIG9yIFVOSVggc29ja2V0IGFkZHJlc3MgZm9yIHRoZSBnUlBDIHNlcnZlciB0byBsaXN0ZW4gb24KIyBOT1RFOiBUaGlzIHNlcnZlciBvbmx5IHN1cHBvcnRzIC9icm9hZGNhc3RfdHhfY29tbWl0CmdycGMtbGFkZHIgPSAmcXVvdDsmcXVvdDsKCiMgTWF4aW11bSBudW1iZXIgb2Ygc2ltdWx0YW5lb3VzIGNvbm5lY3Rpb25zLgojIERvZXMgbm90IGluY2x1ZGUgUlBDIChIVFRQJmFtcDtXZWJTb2NrZXQpIGNvbm5lY3Rpb25zLiBTZWUgbWF4LW9wZW4tY29ubmVjdGlvbnMKIyBJZiB5b3Ugd2FudCB0byBhY2NlcHQgYSBsYXJnZXIgbnVtYmVyIHRoYW4gdGhlIGRlZmF1bHQsIG1ha2Ugc3VyZQojIHlvdSBpbmNyZWFzZSB5b3VyIE9TIGxpbWl0cy4KIyAwIC0gdW5saW1pdGVkLgojIFNob3VsZCBiZSAmbHQ7IHt1bGltaXQgLVNufSAtIHtNYXhOdW1JbmJvdW5kUGVlcnN9IC0ge01heE51bU91dGJvdW5kUGVlcnN9IC0ge04gb2Ygd2FsLCBkYiBhbmQgb3RoZXIgb3BlbiBmaWxlc30KIyAxMDI0IC0gNDAgLSAxMCAtIDUwID0gOTI0ID0gfjkwMApncnBjLW1heC1vcGVuLWNvbm5lY3Rpb25zID0gOTAwCgojIEFjdGl2YXRlIHVuc2FmZSBSUEMgY29tbWFuZHMgbGlrZSAvZGlhbF9zZWVkcyBhbmQgL3Vuc2FmZV9mbHVzaF9tZW1wb29sCnVuc2FmZSA9IGZhbHNlCgojIE1heGltdW0gbnVtYmVyIG9mIHNpbXVsdGFuZW91cyBjb25uZWN0aW9ucyAoaW5jbHVkaW5nIFdlYlNvY2tldCkuCiMgRG9lcyBub3QgaW5jbHVkZSBnUlBDIGNvbm5lY3Rpb25zLiBTZWUgZ3JwYy1tYXgtb3Blbi1jb25uZWN0aW9ucwojIElmIHlvdSB3YW50IHRvIGFjY2VwdCBhIGxhcmdlciBudW1iZXIgdGhhbiB0aGUgZGVmYXVsdCwgbWFrZSBzdXJlCiMgeW91IGluY3JlYXNlIHlvdXIgT1MgbGltaXRzLgojIDAgLSB1bmxpbWl0ZWQuCiMgU2hvdWxkIGJlICZsdDsge3VsaW1pdCAtU259IC0ge01heE51bUluYm91bmRQZWVyc30gLSB7TWF4TnVtT3V0Ym91bmRQZWVyc30gLSB7TiBvZiB3YWwsIGRiIGFuZCBvdGhlciBvcGVuIGZpbGVzfQojIDEwMjQgLSA0MCAtIDEwIC0gNTAgPSA5MjQgPSB+OTAwCm1heC1vcGVuLWNvbm5lY3Rpb25zID0gOTAwCgojIE1heGltdW0gbnVtYmVyIG9mIHVuaXF1ZSBjbGllbnRJRHMgdGhhdCBjYW4gL3N1YnNjcmliZQojIElmIHlvdSdyZSB1c2luZyAvYnJvYWRjYXN0X3R4X2NvbW1pdCwgc2V0IHRvIHRoZSBlc3RpbWF0ZWQgbWF4aW11bSBudW1iZXIKIyBvZiBicm9hZGNhc3RfdHhfY29tbWl0IGNhbGxzIHBlciBibG9jay4KbWF4LXN1YnNjcmlwdGlvbi1jbGllbnRzID0gMTAwCgojIE1heGltdW0gbnVtYmVyIG9mIHVuaXF1ZSBxdWVyaWVzIGEgZ2l2ZW4gY2xpZW50IGNhbiAvc3Vic2NyaWJlIHRvCiMgSWYgeW91J3JlIHVzaW5nIEdSUEMgKG9yIExvY2FsIFJQQyBjbGllbnQpIGFuZCAvYnJvYWRjYXN0X3R4X2NvbW1pdCwgc2V0IHRvCiMgdGhlIGVzdGltYXRlZCAjIG1heGltdW0gbnVtYmVyIG9mIGJyb2FkY2FzdF90eF9jb21taXQgY2FsbHMgcGVyIGJsb2NrLgptYXgtc3Vic2NyaXB0aW9ucy1wZXItY2xpZW50ID0gNQoKIyBIb3cgbG9uZyB0byB3YWl0IGZvciBhIHR4IHRvIGJlIGNvbW1pdHRlZCBkdXJpbmcgL2Jyb2FkY2FzdF90eF9jb21taXQuCiMgV0FSTklORzogVXNpbmcgYSB2YWx1ZSBsYXJnZXIgdGhhbiAxMHMgd2lsbCByZXN1bHQgaW4gaW5jcmVhc2luZyB0aGUKIyBnbG9iYWwgSFRUUCB3cml0ZSB0aW1lb3V0LCB3aGljaCBhcHBsaWVzIHRvIGFsbCBjb25uZWN0aW9ucyBhbmQgZW5kcG9pbnRzLgojIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2lzc3Vlcy8zNDM1CnRpbWVvdXQtYnJvYWRjYXN0LXR4LWNvbW1pdCA9ICZxdW90OzEwcyZxdW90OwoKIyBNYXhpbXVtIHNpemUgb2YgcmVxdWVzdCBib2R5LCBpbiBieXRlcwptYXgtYm9keS1ieXRlcyA9IDEwMDAwMDAKCiMgTWF4aW11bSBzaXplIG9mIHJlcXVlc3QgaGVhZGVyLCBpbiBieXRlcwptYXgtaGVhZGVyLWJ5dGVzID0gMTA0ODU3NgoKIyBUaGUgcGF0aCB0byBhIGZpbGUgY29udGFpbmluZyBjZXJ0aWZpY2F0ZSB0aGF0IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBIVFRQUyBzZXJ2ZXIuCiMgTWlnaHQgYmUgZWl0aGVyIGFic29sdXRlIHBhdGggb3IgcGF0aCByZWxhdGVkIHRvIFRlbmRlcm1pbnQncyBjb25maWcgZGlyZWN0b3J5LgojIElmIHRoZSBjZXJ0aWZpY2F0ZSBpcyBzaWduZWQgYnkgYSBjZXJ0aWZpY2F0ZSBhdXRob3JpdHksCiMgdGhlIGNlcnRGaWxlIHNob3VsZCBiZSB0aGUgY29uY2F0ZW5hdGlvbiBvZiB0aGUgc2VydmVyJ3MgY2VydGlmaWNhdGUsIGFueSBpbnRlcm1lZGlhdGVzLAojIGFuZCB0aGUgQ0EncyBjZXJ0aWZpY2F0ZS4KIyBOT1RFOiBib3RoIHRscy1jZXJ0LWZpbGUgYW5kIHRscy1rZXktZmlsZSBtdXN0IGJlIHByZXNlbnQgZm9yIFRlbmRlcm1pbnQgdG8gY3JlYXRlIEhUVFBTIHNlcnZlci4KIyBPdGhlcndpc2UsIEhUVFAgc2VydmVyIGlzIHJ1bi4KdGxzLWNlcnQtZmlsZSA9ICZxdW90OyZxdW90OwoKIyBUaGUgcGF0aCB0byBhIGZpbGUgY29udGFpbmluZyBtYXRjaGluZyBwcml2YXRlIGtleSB0aGF0IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBIVFRQUyBzZXJ2ZXIuCiMgTWlnaHQgYmUgZWl0aGVyIGFic29sdXRlIHBhdGggb3IgcGF0aCByZWxhdGVkIHRvIFRlbmRlcm1pbnQncyBjb25maWcgZGlyZWN0b3J5LgojIE5PVEU6IGJvdGggdGxzLWNlcnQtZmlsZSBhbmQgdGxzLWtleS1maWxlIG11c3QgYmUgcHJlc2VudCBmb3IgVGVuZGVybWludCB0byBjcmVhdGUgSFRUUFMgc2VydmVyLgojIE90aGVyd2lzZSwgSFRUUCBzZXJ2ZXIgaXMgcnVuLgp0bHMta2V5LWZpbGUgPSAmcXVvdDsmcXVvdDsKCiMgcHByb2YgbGlzdGVuIGFkZHJlc3MgKGh0dHBzOi8vZ29sYW5nLm9yZy9wa2cvbmV0L2h0dHAvcHByb2YpCnBwcm9mLWxhZGRyID0gJnF1b3Q7JnF1b3Q7CgojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCiMjIyAgICAgICAgICAgUDJQIENvbmZpZ3VyYXRpb24gT3B0aW9ucyAgICAgICAgICAgICAjIyMKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwpbcDJwXQoKIyBBZGRyZXNzIHRvIGxpc3RlbiBmb3IgaW5jb21pbmcgY29ubmVjdGlvbnMKbGFkZHIgPSAmcXVvdDt0Y3A6Ly8wLjAuMC4wOjI2NjU2JnF1b3Q7CgojIEFkZHJlc3MgdG8gYWR2ZXJ0aXNlIHRvIHBlZXJzIGZvciB0aGVtIHRvIGRpYWwKIyBJZiBlbXB0eSwgd2lsbCB1c2UgdGhlIHNhbWUgcG9ydCBhcyB0aGUgbGFkZHIsCiMgYW5kIHdpbGwgaW50cm9zcGVjdCBvbiB0aGUgbGlzdGVuZXIgb3IgdXNlIFVQblAKIyB0byBmaWd1cmUgb3V0IHRoZSBhZGRyZXNzLgpleHRlcm5hbC1hZGRyZXNzID0gJnF1b3Q7JnF1b3Q7CgojIENvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHNlZWQgbm9kZXMgdG8gY29ubmVjdCB0bwpzZWVkcyA9ICZxdW90OyZxdW90OwoKIyBDb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBub2RlcyB0byBrZWVwIHBlcnNpc3RlbnQgY29ubmVjdGlvbnMgdG8KcGVyc2lzdGVudC1wZWVycyA9ICZxdW90OyZxdW90OwoKIyBVUE5QIHBvcnQgZm9yd2FyZGluZwp1cG5wID0gZmFsc2UKCiMgUGF0aCB0byBhZGRyZXNzIGJvb2sKYWRkci1ib29rLWZpbGUgPSAmcXVvdDtjb25maWcvYWRkcmJvb2suanNvbiZxdW90OwoKIyBTZXQgdHJ1ZSBmb3Igc3RyaWN0IGFkZHJlc3Mgcm91dGFiaWxpdHkgcnVsZXMKIyBTZXQgZmFsc2UgZm9yIHByaXZhdGUgb3IgbG9jYWwgbmV0d29ya3MKYWRkci1ib29rLXN0cmljdCA9IHRydWUKCiMgTWF4aW11bSBudW1iZXIgb2YgaW5ib3VuZCBwZWVycwptYXgtbnVtLWluYm91bmQtcGVlcnMgPSA0MAoKIyBNYXhpbXVtIG51bWJlciBvZiBvdXRib3VuZCBwZWVycyB0byBjb25uZWN0IHRvLCBleGNsdWRpbmcgcGVyc2lzdGVudCBwZWVycwptYXgtbnVtLW91dGJvdW5kLXBlZXJzID0gMTAKCiMgTGlzdCBvZiBub2RlIElEcywgdG8gd2hpY2ggYSBjb25uZWN0aW9uIHdpbGwgYmUgKHJlKWVzdGFibGlzaGVkIGlnbm9yaW5nIGFueSBleGlzdGluZyBsaW1pdHMKdW5jb25kaXRpb25hbC1wZWVyLWlkcyA9ICZxdW90OyZxdW90OwoKIyBNYXhpbXVtIHBhdXNlIHdoZW4gcmVkaWFsaW5nIGEgcGVyc2lzdGVudCBwZWVyIChpZiB6ZXJvLCBleHBvbmVudGlhbCBiYWNrb2ZmIGlzIHVzZWQpCnBlcnNpc3RlbnQtcGVlcnMtbWF4LWRpYWwtcGVyaW9kID0gJnF1b3Q7MHMmcXVvdDsKCiMgVGltZSB0byB3YWl0IGJlZm9yZSBmbHVzaGluZyBtZXNzYWdlcyBvdXQgb24gdGhlIGNvbm5lY3Rpb24KZmx1c2gtdGhyb3R0bGUtdGltZW91dCA9ICZxdW90OzEwMG1zJnF1b3Q7CgojIE1heGltdW0gc2l6ZSBvZiBhIG1lc3NhZ2UgcGFja2V0IHBheWxvYWQsIGluIGJ5dGVzCm1heC1wYWNrZXQtbXNnLXBheWxvYWQtc2l6ZSA9IDEwMjQKCiMgUmF0ZSBhdCB3aGljaCBwYWNrZXRzIGNhbiBiZSBzZW50LCBpbiBieXRlcy9zZWNvbmQKc2VuZC1yYXRlID0gNTEyMDAwMAoKIyBSYXRlIGF0IHdoaWNoIHBhY2tldHMgY2FuIGJlIHJlY2VpdmVkLCBpbiBieXRlcy9zZWNvbmQKcmVjdi1yYXRlID0gNTEyMDAwMAoKIyBTZXQgdHJ1ZSB0byBlbmFibGUgdGhlIHBlZXItZXhjaGFuZ2UgcmVhY3RvcgpwZXggPSB0cnVlCgojIENvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHBlZXIgSURzIHRvIGtlZXAgcHJpdmF0ZSAod2lsbCBub3QgYmUgZ29zc2lwZWQgdG8gb3RoZXIgcGVlcnMpCnByaXZhdGUtcGVlci1pZHMgPSAmcXVvdDsmcXVvdDsKCiMgVG9nZ2xlIHRvIGRpc2FibGUgZ3VhcmQgYWdhaW5zdCBwZWVycyBjb25uZWN0aW5nIGZyb20gdGhlIHNhbWUgaXAuCmFsbG93LWR1cGxpY2F0ZS1pcCA9IGZhbHNlCgojIFBlZXIgY29ubmVjdGlvbiBjb25maWd1cmF0aW9uLgpoYW5kc2hha2UtdGltZW91dCA9ICZxdW90OzIwcyZxdW90OwpkaWFsLXRpbWVvdXQgPSAmcXVvdDszcyZxdW90OwoKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwojIyMgICAgICAgICAgTWVtcG9vbCBDb25maWd1cmF0aW9uIE9wdGlvbiAgICAgICAgICAjIyMKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwpbbWVtcG9vbF0KCnJlY2hlY2sgPSB0cnVlCmJyb2FkY2FzdCA9IHRydWUKd2FsLWRpciA9ICZxdW90OyZxdW90OwoKIyBNYXhpbXVtIG51bWJlciBvZiB0cmFuc2FjdGlvbnMgaW4gdGhlIG1lbXBvb2wKc2l6ZSA9IDUwMDAKCiMgTGltaXQgdGhlIHRvdGFsIHNpemUgb2YgYWxsIHR4cyBpbiB0aGUgbWVtcG9vbC4KIyBUaGlzIG9ubHkgYWNjb3VudHMgZm9yIHJhdyB0cmFuc2FjdGlvbnMgKGUuZy4gZ2l2ZW4gMU1CIHRyYW5zYWN0aW9ucyBhbmQKIyBtYXgtdHhzLWJ5dGVzPTVNQiwgbWVtcG9vbCB3aWxsIG9ubHkgYWNjZXB0IDUgdHJhbnNhY3Rpb25zKS4KbWF4LXR4cy1ieXRlcyA9IDEwNzM3NDE4MjQKCiMgU2l6ZSBvZiB0aGUgY2FjaGUgKHVzZWQgdG8gZmlsdGVyIHRyYW5zYWN0aW9ucyB3ZSBzYXcgZWFybGllcikgaW4gdHJhbnNhY3Rpb25zCmNhY2hlLXNpemUgPSAxMDAwMAoKIyBEbyBub3QgcmVtb3ZlIGludmFsaWQgdHJhbnNhY3Rpb25zIGZyb20gdGhlIGNhY2hlIChkZWZhdWx0OiBmYWxzZSkKIyBTZXQgdG8gdHJ1ZSBpZiBpdCdzIG5vdCBwb3NzaWJsZSBmb3IgYW55IGludmFsaWQgdHJhbnNhY3Rpb24gdG8gYmVjb21lIHZhbGlkCiMgYWdhaW4gaW4gdGhlIGZ1dHVyZS4Ka2VlcC1pbnZhbGlkLXR4cy1pbi1jYWNoZSA9IGZhbHNlCgojIE1heGltdW0gc2l6ZSBvZiBhIHNpbmdsZSB0cmFuc2FjdGlvbi4KIyBOT1RFOiB0aGUgbWF4IHNpemUgb2YgYSB0eCB0cmFuc21pdHRlZCBvdmVyIHRoZSBuZXR3b3JrIGlzIHttYXgtdHgtYnl0ZXN9LgptYXgtdHgtYnl0ZXMgPSAxMDQ4NTc2CgojIE1heGltdW0gc2l6ZSBvZiBhIGJhdGNoIG9mIHRyYW5zYWN0aW9ucyB0byBzZW5kIHRvIGEgcGVlcgojIEluY2x1ZGluZyBzcGFjZSBuZWVkZWQgYnkgZW5jb2RpbmcgKG9uZSB2YXJpbnQgcGVyIHRyYW5zYWN0aW9uKS4KIyBYWFg6IFVudXNlZCBkdWUgdG8gaHR0cHM6Ly9naXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9pc3N1ZXMvNTc5NgptYXgtYmF0Y2gtYnl0ZXMgPSAwCgojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCiMjIyAgICAgICAgIFN0YXRlIFN5bmMgQ29uZmlndXJhdGlvbiBPcHRpb25zICAgICAgICAjIyMKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwpbc3RhdGVzeW5jXQojIFN0YXRlIHN5bmMgcmFwaWRseSBib290c3RyYXBzIGEgbmV3IG5vZGUgYnkgZGlzY292ZXJpbmcsIGZldGNoaW5nLCBhbmQgcmVzdG9yaW5nIGEgc3RhdGUgbWFjaGluZQojIHNuYXBzaG90IGZyb20gcGVlcnMgaW5zdGVhZCBvZiBmZXRjaGluZyBhbmQgcmVwbGF5aW5nIGhpc3RvcmljYWwgYmxvY2tzLiBSZXF1aXJlcyBzb21lIHBlZXJzIGluCiMgdGhlIG5ldHdvcmsgdG8gdGFrZSBhbmQgc2VydmUgc3RhdGUgbWFjaGluZSBzbmFwc2hvdHMuIFN0YXRlIHN5bmMgaXMgbm90IGF0dGVtcHRlZCBpZiB0aGUgbm9kZQojIGhhcyBhbnkgbG9jYWwgc3RhdGUgKExhc3RCbG9ja0hlaWdodCAmZ3Q7IDApLiBUaGUgbm9kZSB3aWxsIGhhdmUgYSB0cnVuY2F0ZWQgYmxvY2sgaGlzdG9yeSwKIyBzdGFydGluZyBmcm9tIHRoZSBoZWlnaHQgb2YgdGhlIHNuYXBzaG90LgplbmFibGUgPSBmYWxzZQoKIyBSUEMgc2VydmVycyAoY29tbWEtc2VwYXJhdGVkKSBmb3IgbGlnaHQgY2xpZW50IHZlcmlmaWNhdGlvbiBvZiB0aGUgc3luY2VkIHN0YXRlIG1hY2hpbmUgYW5kCiMgcmV0cmlldmFsIG9mIHN0YXRlIGRhdGEgZm9yIG5vZGUgYm9vdHN0cmFwcGluZy4gQWxzbyBuZWVkcyBhIHRydXN0ZWQgaGVpZ2h0IGFuZCBjb3JyZXNwb25kaW5nCiMgaGVhZGVyIGhhc2ggb2J0YWluZWQgZnJvbSBhIHRydXN0ZWQgc291cmNlLCBhbmQgYSBwZXJpb2QgZHVyaW5nIHdoaWNoIHZhbGlkYXRvcnMgY2FuIGJlIHRydXN0ZWQuCiMKIyBGb3IgQ29zbW9zIFNESy1iYXNlZCBjaGFpbnMsIHRydXN0LXBlcmlvZCBzaG91bGQgdXN1YWxseSBiZSBhYm91dCAyLzMgb2YgdGhlIHVuYm9uZGluZyB0aW1lICh+MgojIHdlZWtzKSBkdXJpbmcgd2hpY2ggdGhleSBjYW4gYmUgZmluYW5jaWFsbHkgcHVuaXNoZWQgKHNsYXNoZWQpIGZvciBtaXNiZWhhdmlvci4KcnBjLXNlcnZlcnMgPSAmcXVvdDsmcXVvdDsKdHJ1c3QtaGVpZ2h0ID0gMAp0cnVzdC1oYXNoID0gJnF1b3Q7JnF1b3Q7CnRydXN0LXBlcmlvZCA9ICZxdW90OzE2OGgwbTBzJnF1b3Q7CgojIFRpbWUgdG8gc3BlbmQgZGlzY292ZXJpbmcgc25hcHNob3RzIGJlZm9yZSBpbml0aWF0aW5nIGEgcmVzdG9yZS4KZGlzY292ZXJ5LXRpbWUgPSAmcXVvdDsxNXMmcXVvdDsKCiMgVGVtcG9yYXJ5IGRpcmVjdG9yeSBmb3Igc3RhdGUgc3luYyBzbmFwc2hvdCBjaHVua3MsIGRlZmF1bHRzIHRvIHRoZSBPUyB0ZW1wZGlyICh0eXBpY2FsbHkgL3RtcCkuCiMgV2lsbCBjcmVhdGUgYSBuZXcsIHJhbmRvbWx5IG5hbWVkIGRpcmVjdG9yeSB3aXRoaW4sIGFuZCByZW1vdmUgaXQgd2hlbiBkb25lLgp0ZW1wLWRpciA9ICZxdW90OyZxdW90OwoKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwojIyMgICAgICAgRmFzdCBTeW5jIENvbmZpZ3VyYXRpb24gQ29ubmVjdGlvbnMgICAgICAgIyMjCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKW2Zhc3RzeW5jXQoKIyBGYXN0IFN5bmMgdmVyc2lvbiB0byB1c2U6CiMgICAxKSAmcXVvdDt2MCZxdW90OyAoZGVmYXVsdCkgLSB0aGUgbGVnYWN5IGZhc3Qgc3luYyBpbXBsZW1lbnRhdGlvbgojICAgMikgJnF1b3Q7djImcXVvdDsgLSBjb21wbGV0ZSByZWRlc2lnbiBvZiB2MCwgb3B0aW1pemVkIGZvciB0ZXN0YWJpbGl0eSAmYW1wOyByZWFkYWJpbGl0eQp2ZXJzaW9uID0gJnF1b3Q7djAmcXVvdDsKCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKIyMjICAgICAgICAgQ29uc2Vuc3VzIENvbmZpZ3VyYXRpb24gT3B0aW9ucyAgICAgICAgICMjIwojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCltjb25zZW5zdXNdCgp3YWwtZmlsZSA9ICZxdW90O2RhdGEvY3Mud2FsL3dhbCZxdW90OwoKIyBIb3cgbG9uZyB3ZSB3YWl0IGZvciBhIHByb3Bvc2FsIGJsb2NrIGJlZm9yZSBwcmV2b3RpbmcgbmlsCnRpbWVvdXQtcHJvcG9zZSA9ICZxdW90OzNzJnF1b3Q7CiMgSG93IG11Y2ggdGltZW91dC1wcm9wb3NlIGluY3JlYXNlcyB3aXRoIGVhY2ggcm91bmQKdGltZW91dC1wcm9wb3NlLWRlbHRhID0gJnF1b3Q7NTAwbXMmcXVvdDsKIyBIb3cgbG9uZyB3ZSB3YWl0IGFmdGVyIHJlY2VpdmluZyArMi8zIHByZXZvdGVzIGZvciDigJxhbnl0aGluZ+KAnSAoaWUuIG5vdCBhIHNpbmdsZSBibG9jayBvciBuaWwpCnRpbWVvdXQtcHJldm90ZSA9ICZxdW90OzFzJnF1b3Q7CiMgSG93IG11Y2ggdGhlIHRpbWVvdXQtcHJldm90ZSBpbmNyZWFzZXMgd2l0aCBlYWNoIHJvdW5kCnRpbWVvdXQtcHJldm90ZS1kZWx0YSA9ICZxdW90OzUwMG1zJnF1b3Q7CiMgSG93IGxvbmcgd2Ugd2FpdCBhZnRlciByZWNlaXZpbmcgKzIvMyBwcmVjb21taXRzIGZvciDigJxhbnl0aGluZ+KAnSAoaWUuIG5vdCBhIHNpbmdsZSBibG9jayBvciBuaWwpCnRpbWVvdXQtcHJlY29tbWl0ID0gJnF1b3Q7MXMmcXVvdDsKIyBIb3cgbXVjaCB0aGUgdGltZW91dC1wcmVjb21taXQgaW5jcmVhc2VzIHdpdGggZWFjaCByb3VuZAp0aW1lb3V0LXByZWNvbW1pdC1kZWx0YSA9ICZxdW90OzUwMG1zJnF1b3Q7CiMgSG93IGxvbmcgd2Ugd2FpdCBhZnRlciBjb21taXR0aW5nIGEgYmxvY2ssIGJlZm9yZSBzdGFydGluZyBvbiB0aGUgbmV3CiMgaGVpZ2h0ICh0aGlzIGdpdmVzIHVzIGEgY2hhbmNlIHRvIHJlY2VpdmUgc29tZSBtb3JlIHByZWNvbW1pdHMsIGV2ZW4KIyB0aG91Z2ggd2UgYWxyZWFkeSBoYXZlICsyLzMpLgp0aW1lb3V0LWNvbW1pdCA9ICZxdW90OzFzJnF1b3Q7CgojIEhvdyBtYW55IGJsb2NrcyB0byBsb29rIGJhY2sgdG8gY2hlY2sgZXhpc3RlbmNlIG9mIHRoZSBub2RlJ3MgY29uc2Vuc3VzIHZvdGVzIGJlZm9yZSBqb2luaW5nIGNvbnNlbnN1cwojIFdoZW4gbm9uLXplcm8sIHRoZSBub2RlIHdpbGwgcGFuaWMgdXBvbiByZXN0YXJ0CiMgaWYgdGhlIHNhbWUgY29uc2Vuc3VzIGtleSB3YXMgdXNlZCB0byBzaWduIHtkb3VibGUtc2lnbi1jaGVjay1oZWlnaHR9IGxhc3QgYmxvY2tzLgojIFNvLCB2YWxpZGF0b3JzIHNob3VsZCBzdG9wIHRoZSBzdGF0ZSBtYWNoaW5lLCB3YWl0IGZvciBzb21lIGJsb2NrcywgYW5kIHRoZW4gcmVzdGFydCB0aGUgc3RhdGUgbWFjaGluZSB0byBhdm9pZCBwYW5pYy4KZG91YmxlLXNpZ24tY2hlY2staGVpZ2h0ID0gMAoKIyBNYWtlIHByb2dyZXNzIGFzIHNvb24gYXMgd2UgaGF2ZSBhbGwgdGhlIHByZWNvbW1pdHMgKGFzIGlmIFRpbWVvdXRDb21taXQgPSAwKQpza2lwLXRpbWVvdXQtY29tbWl0ID0gZmFsc2UKCiMgRW1wdHlCbG9ja3MgbW9kZSBhbmQgcG9zc2libGUgaW50ZXJ2YWwgYmV0d2VlbiBlbXB0eSBibG9ja3MKY3JlYXRlLWVtcHR5LWJsb2NrcyA9IHRydWUKY3JlYXRlLWVtcHR5LWJsb2Nrcy1pbnRlcnZhbCA9ICZxdW90OzBzJnF1b3Q7CgojIFJlYWN0b3Igc2xlZXAgZHVyYXRpb24gcGFyYW1ldGVycwpwZWVyLWdvc3NpcC1zbGVlcC1kdXJhdGlvbiA9ICZxdW90OzEwMG1zJnF1b3Q7CnBlZXItcXVlcnktbWFqMjMtc2xlZXAtZHVyYXRpb24gPSAmcXVvdDsycyZxdW90OwoKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwojIyMgICBUcmFuc2FjdGlvbiBJbmRleGVyIENvbmZpZ3VyYXRpb24gT3B0aW9ucyAgICAgIyMjCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKW3R4LWluZGV4XQoKIyBXaGF0IGluZGV4ZXIgdG8gdXNlIGZvciB0cmFuc2FjdGlvbnMKIwojIFRoZSBhcHBsaWNhdGlvbiB3aWxsIHNldCB3aGljaCB0eHMgdG8gaW5kZXguIEluIHNvbWUgY2FzZXMgYSBub2RlIG9wZXJhdG9yIHdpbGwgYmUgYWJsZQojIHRvIGRlY2lkZSB3aGljaCB0eHMgdG8gaW5kZXggYmFzZWQgb24gY29uZmlndXJhdGlvbiBzZXQgaW4gdGhlIGFwcGxpY2F0aW9uLgojCiMgT3B0aW9uczoKIyAgIDEpICZxdW90O251bGwmcXVvdDsKIyAgIDIpICZxdW90O2t2JnF1b3Q7IChkZWZhdWx0KSAtIHRoZSBzaW1wbGVzdCBwb3NzaWJsZSBpbmRleGVyLCBiYWNrZWQgYnkga2V5LXZhbHVlIHN0b3JhZ2UgKGRlZmF1bHRzIHRvIGxldmVsREI7IHNlZSBEQkJhY2tlbmQpLgojICAgLSBXaGVuICZxdW90O2t2JnF1b3Q7IGlzIGNob3NlbiAmcXVvdDt0eC5oZWlnaHQmcXVvdDsgYW5kICZxdW90O3R4Lmhhc2gmcXVvdDsgd2lsbCBhbHdheXMgYmUgaW5kZXhlZC4KaW5kZXhlciA9ICZxdW90O2t2JnF1b3Q7CgojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCiMjIyAgICAgICBJbnN0cnVtZW50YXRpb24gQ29uZmlndXJhdGlvbiBPcHRpb25zICAgICAjIyMKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwpbaW5zdHJ1bWVudGF0aW9uXQoKIyBXaGVuIHRydWUsIFByb21ldGhldXMgbWV0cmljcyBhcmUgc2VydmVkIHVuZGVyIC9tZXRyaWNzIG9uCiMgUHJvbWV0aGV1c0xpc3RlbkFkZHIuCiMgQ2hlY2sgb3V0IHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgbGlzdCBvZiBhdmFpbGFibGUgbWV0cmljcy4KcHJvbWV0aGV1cyA9IGZhbHNlCgojIEFkZHJlc3MgdG8gbGlzdGVuIGZvciBQcm9tZXRoZXVzIGNvbGxlY3RvcihzKSBjb25uZWN0aW9ucwpwcm9tZXRoZXVzLWxpc3Rlbi1hZGRyID0gJnF1b3Q7OjI2NjYwJnF1b3Q7CgojIE1heGltdW0gbnVtYmVyIG9mIHNpbXVsdGFuZW91cyBjb25uZWN0aW9ucy4KIyBJZiB5b3Ugd2FudCB0byBhY2NlcHQgYSBsYXJnZXIgbnVtYmVyIHRoYW4gdGhlIGRlZmF1bHQsIG1ha2Ugc3VyZQojIHlvdSBpbmNyZWFzZSB5b3VyIE9TIGxpbWl0cy4KIyAwIC0gdW5saW1pdGVkLgptYXgtb3Blbi1jb25uZWN0aW9ucyA9IDMKCiMgSW5zdHJ1bWVudGF0aW9uIG5hbWVzcGFjZQpuYW1lc3BhY2UgPSAmcXVvdDt0ZW5kZXJtaW50JnF1b3Q7Cgo="}}),I._v(" "),b("h2",{attrs:{id:"empty-blocks-vs-no-empty-blocks"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#empty-blocks-vs-no-empty-blocks"}},[I._v("#")]),I._v(" Empty blocks VS no empty blocks")]),I._v(" "),b("h3",{attrs:{id:"create-empty-blocks-true"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#create-empty-blocks-true"}},[I._v("#")]),I._v(" create-empty-blocks = true")]),I._v(" "),b("p",[I._v("If "),b("code",[I._v("create-empty-blocks")]),I._v(" is set to "),b("code",[I._v("true")]),I._v(" in your config, blocks will be\ncreated ~ every second (with default consensus parameters). You can regulate\nthe delay between blocks by changing the "),b("code",[I._v("timeout-commit")]),I._v(". E.g. "),b("code",[I._v('timeout-commit = "10s"')]),I._v(" should result in ~ 10 second blocks.")]),I._v(" "),b("h3",{attrs:{id:"create-empty-blocks-false"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#create-empty-blocks-false"}},[I._v("#")]),I._v(" create-empty-blocks = false")]),I._v(" "),b("p",[I._v("In this setting, blocks are created when transactions received.")]),I._v(" "),b("p",[I._v("Note after the block H, Tendermint creates something we call a \"proof block\"\n(only if the application hash changed) H+1. The reason for this is to support\nproofs. If you have a transaction in block H that changes the state to X, the\nnew application hash will only be included in block H+1. If after your\ntransaction is committed, you want to get a light-client proof for the new state\n(X), you need the new block to be committed in order to do that because the new\nblock has the new application hash for the state X. That's why we make a new\n(empty) block if the application hash changes. Otherwise, you won't be able to\nmake a proof for the new state.")]),I._v(" "),b("p",[I._v("Plus, if you set "),b("code",[I._v("create-empty-blocks-interval")]),I._v(" to something other than the\ndefault ("),b("code",[I._v("0")]),I._v("), Tendermint will be creating empty blocks even in the absence of\ntransactions every "),b("code",[I._v("create-empty-blocks-interval")]),I._v(". For instance, with\n"),b("code",[I._v("create-empty-blocks = false")]),I._v(" and "),b("code",[I._v('create-empty-blocks-interval = "30s"')]),I._v(",\nTendermint will only create blocks if there are transactions, or after waiting\n30 seconds without receiving any transactions.")]),I._v(" "),b("h2",{attrs:{id:"consensus-timeouts-explained"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#consensus-timeouts-explained"}},[I._v("#")]),I._v(" Consensus timeouts explained")]),I._v(" "),b("p",[I._v("There's a variety of information about timeouts in "),b("RouterLink",{attrs:{to:"/tendermint-core/running-in-production.html"}},[I._v("Running in\nproduction")])],1),I._v(" "),b("p",[I._v("You can also find more detailed technical explanation in the spec: "),b("a",{attrs:{href:"https://arxiv.org/abs/1807.04938",target:"_blank",rel:"noopener noreferrer"}},[I._v("The latest\ngossip on BFT consensus"),b("OutboundLink")],1),I._v(".")]),I._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W2NvbnNlbnN1c10KLi4uCgp0aW1lb3V0LXByb3Bvc2UgPSAmcXVvdDszcyZxdW90Owp0aW1lb3V0LXByb3Bvc2UtZGVsdGEgPSAmcXVvdDs1MDBtcyZxdW90Owp0aW1lb3V0LXByZXZvdGUgPSAmcXVvdDsxcyZxdW90Owp0aW1lb3V0LXByZXZvdGUtZGVsdGEgPSAmcXVvdDs1MDBtcyZxdW90Owp0aW1lb3V0LXByZWNvbW1pdCA9ICZxdW90OzFzJnF1b3Q7CnRpbWVvdXQtcHJlY29tbWl0LWRlbHRhID0gJnF1b3Q7NTAwbXMmcXVvdDsKdGltZW91dC1jb21taXQgPSAmcXVvdDsxcyZxdW90Owo="}}),I._v(" "),b("p",[I._v("Note that in a successful round, the only timeout that we absolutely wait no\nmatter what is "),b("code",[I._v("timeout-commit")]),I._v(".")]),I._v(" "),b("p",[I._v("Here's a brief summary of the timeouts:")]),I._v(" "),b("ul",[b("li",[b("code",[I._v("timeout-propose")]),I._v(" = how long we wait for a proposal block before prevoting\nnil")]),I._v(" "),b("li",[b("code",[I._v("timeout-propose-delta")]),I._v(" = how much timeout-propose increases with each round")]),I._v(" "),b("li",[b("code",[I._v("timeout-prevote")]),I._v(" = how long we wait after receiving +2/3 prevotes for\nanything (ie. not a single block or nil)")]),I._v(" "),b("li",[b("code",[I._v("timeout-prevote-delta")]),I._v(" = how much the timeout-prevote increases with each\nround")]),I._v(" "),b("li",[b("code",[I._v("timeout-precommit")]),I._v(" = how long we wait after receiving +2/3 precommits for\nanything (ie. not a single block or nil)")]),I._v(" "),b("li",[b("code",[I._v("timeout-precommit-delta")]),I._v(" = how much the timeout-precommit increases with\neach round")]),I._v(" "),b("li",[b("code",[I._v("timeout-commit")]),I._v(" = how long we wait after committing a block, before starting\non the new height (this gives us a chance to receive some more precommits,\neven though we already have +2/3)")])]),I._v(" "),b("h2",{attrs:{id:"p2p-settings"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#p2p-settings"}},[I._v("#")]),I._v(" P2P settings")]),I._v(" "),b("p",[I._v("This section will cover settings within the p2p section of the "),b("code",[I._v("config.toml")]),I._v(".")]),I._v(" "),b("ul",[b("li",[b("code",[I._v("external-address")]),I._v(" = is the address that will be advertised for other nodes to use. We recommend setting this field with your public IP and p2p port.\n"),b("ul",[b("li",[b("blockquote",[b("p",[I._v("We recommend setting an external address. When used in a private network, Tendermint Core currently doesn't advertise the node's public address. There is active and ongoing work to improve the P2P system, but this is a helpful workaround for now.")])])])])]),I._v(" "),b("li",[b("code",[I._v("seeds")]),I._v(" = is a list of comma separated seed nodes that you will connect upon a start and ask for peers. A seed node is a node that does not participate in consensus but only helps propagate peers to nodes in the networks")]),I._v(" "),b("li",[b("code",[I._v("persistent-peers")]),I._v(" = is a list of comma separated peers that you will always want to be connected to. If you're already connected to the maximum number of peers, persistent peers will not be added.")]),I._v(" "),b("li",[b("code",[I._v("max-num-inbound-peers")]),I._v(" = is the maximum number of peers you will accept inbound connections from at one time (where they dial your address and initiate the connection).")]),I._v(" "),b("li",[b("code",[I._v("max-num-outbound-peers")]),I._v(" = is the maximum number of peers you will initiate outbound connects to at one time (where you dial their address and initiate the connection).")]),I._v(" "),b("li",[b("code",[I._v("unconditional-peer-ids")]),I._v(" = is similar to "),b("code",[I._v("persistent-peers")]),I._v(" except that these peers will be connected to even if you are already connected to the maximum number of peers. This can be a validator node ID on your sentry node.")]),I._v(" "),b("li",[b("code",[I._v("pex")]),I._v(" = turns the peer exchange reactor on or off. Validator node will want the "),b("code",[I._v("pex")]),I._v(" turned off so it would not begin gossiping to unknown peers on the network. PeX can also be turned off for statically configured networks with fixed network connectivity. For full nodes on open, dynamic networks, it should be turned on.")]),I._v(" "),b("li",[b("code",[I._v("private-peer-ids")]),I._v(" = is a comma-separated list of node ids that will "),b("em",[I._v("not")]),I._v(" be exposed to other peers (i.e., you will not tell other peers about the ids in this list). This can be filled with a validator's node id.")])])],1)}),[],!1,null,null,null);y.default=g.exports}}]);
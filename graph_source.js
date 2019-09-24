// Groups of nodes to be visualized and given to vis.js
// Each group is an array of nodes, here given as objects with the fields:
//   * code (string)
//   * name (string)
//   * group (string)
//   * id (string)
//   * primaryKey (array)
//
// These will be processed later, into something vis.js can use.

node_groups = [
  BIRD_AXLRY,
  BIRD_ENTTY_ENTRPRS_SZ,
  BIRD_ENTTY_GRP,
  BIRD_ENTTY_MN,
  BIRD_FNNCL_INSTRMNTS_CRDT_LNS,
  BIRD_FNNCL_INSTRMNTS_DRVTVS,
  BIRD_FNNCL_INSTRMNTS_LBLTS,
  BIRD_FNNCL_INSTRMNTS_LN,
  BIRD_FNNCL_INSTRMNTS_MSTR,
  BIRD_FNNCL_INSTRMNTS_SH,
  BIRD_LINKS,
  BIRD_NN_FNNCL_ITM,
  BIRD_OTHR_FNNCL_ASSTS,
  BIRD_PRTCTN_FNNCL,
  BIRD_PRTCTN_PHYSCL,
];

BIRD_AXLRY = [{
    "code": "TST_OBJCT",
    "name": "my new test object",
    "group": "BIRD_AXLRY",
    "id": "TEST_OBJECT",
    "primaryKey": [
      "Test key"
    ]
  },
  {
    "code": "CNTRY",
    "name": "Countries reference information",
    "group": "BIRD_AXLRY",
    "id": "BIRD_IL_CNTRY_1",
    "primaryKey": [
      "CNTRY"
    ]
  },
  {
    "code": "EXTRNL_CRDT_ASSSSMNT",
    "name": "External credit assessments",
    "group": "BIRD_AXLRY",
    "id": "BIRD_IL_EXTRNL_CRDT_ASSSSMNT_1",
    "primaryKey": [
      "EXTRNL_CRDT_ASSSSMNT"
    ]
  },
  {
    "code": "PRMTR",
    "name": "Parameters",
    "group": "BIRD_AXLRY",
    "id": "BIRD_IL_PRMTR_1",
    "primaryKey": []
  }
];
BIRD_ENTTY_GRP = [{
    "code": "CMPSTN_LGL_ENTTY",
    "name": "Composition of the legal entity",
    "group": "BIRD_ENTTY_GRP",
    "id": "BIRD_IL_CMPSTN_LGL_ENTTY_1",
    "primaryKey": [
      "CMPNNT_ID",
      "LGL_ENTTY_ID"
    ]
  },
  {
    "code": "GRP",
    "name": "Group",
    "group": "BIRD_ENTTY_GRP",
    "id": "BIRD_IL_GRP_1",
    "primaryKey": [
      "GRP_ID",
      "LGL_ENTTY_ID"
    ]
  }
];
BIRD_ENTTY_MN = [{
    "code": "CNTRPRTS",
    "name": "Counterparties",
    "group": "BIRD_ENTTY_MN",
    "id": "BIRD_IL_CNTRPRTS_1",
    "primaryKey": [
      "CNTRPRTY_ID"
    ]
  },
  {
    "code": "CNTRPRTS_CDS",
    "name": "Counterparty codes",
    "group": "BIRD_ENTTY_MN",
    "id": "BIRD_IL_CNTRPRTS_CDS_1",
    "primaryKey": [
      "CNTRPRTY_ID",
      "TYP_CNTRPRTY_EXTRNL_ID"
    ]
  },
  {
    "code": "CNTRPRTS_PD",
    "name": "Probability of default of the counterparty ",
    "group": "BIRD_ENTTY_MN",
    "id": "BIRD_IL_CNTRPRTS_PD_1",
    "primaryKey": [
      "CNTRPRTY_ID",
      "OBSRVD_AGNT_ID"
    ]
  },
  {
    "code": "JNT_CNTRPRTS",
    "name": "Joint counterparties",
    "group": "BIRD_ENTTY_MN",
    "id": "BIRD_IL_JNT_CNTRPRTS_1",
    "primaryKey": [
      "CNTRPRTY_ID",
      "JNT_CNTRPRTY_CMPNNT"
    ]
  }
];
BIRD_ENTTY_ENTRPRS_SZ = [{
    "code": "GRP_CNTRPRTY_RLTNSHP",
    "name": "Group counterparty relationship",
    "group": "BIRD_ENTTY_ENTRPRS_SZ",
    "id": "BIRD_IL_GRP_CNTRPRTY_RLTNSHP_1",
    "primaryKey": [
      "CNTRPRTY_ID",
      "GRP_INTRNL_ID"
    ]
  },
  {
    "code": "GRP_DT",
    "name": "Group data",
    "group": "BIRD_ENTTY_ENTRPRS_SZ",
    "id": "BIRD_IL_GRP_DT_1",
    "primaryKey": [
      "GRP_INTRNL_ID"
    ]
  },
  {
    "code": "LNKD_ENTRPRSS",
    "name": "Linked enterprises",
    "group": "BIRD_ENTTY_ENTRPRS_SZ",
    "id": "BIRD_IL_LNKD_ENTRPRSS_1",
    "primaryKey": [
      "CNTRPRTY_ID",
      "LNKD_ENTRPRS_ID"
    ]
  },
  {
    "code": "PRTNR_ENTRPRSS",
    "name": "Partner enterprises",
    "group": "BIRD_ENTTY_ENTRPRS_SZ",
    "id": "BIRD_IL_PRTNR_ENTRPRSS_1",
    "primaryKey": [
      "CNTRPRTY_ID",
      "PRTNR_ENTRPRS_ID"
    ]
  }
];
BIRD_FNNCL_INSTRMNTS_LN = [{
    "code": "CRDT_CRD_DBT_CNVNNC_CRDT",
    "name": "Credit card debt: convenience credit",
    "group": "BIRD_FNNCL_INSTRMNTS_LN",
    "id": "BIRD_IL_CRDT_CRD_DBT_CNVNNC_CRDT_1",
    "primaryKey": [
      "INSTRMNT_UNQ_ID"
    ]
  },
  {
    "code": "CRDT_CRD_DBT_EXTNDD_CRDT",
    "name": "Credit card debt: extended credit",
    "group": "BIRD_FNNCL_INSTRMNTS_LN",
    "id": "BIRD_IL_CRDT_CRD_DBT_EXTNDD_CRDT_1",
    "primaryKey": [
      "INSTRMNT_UNQ_ID"
    ]
  },
  {
    "code": "FCTRNG",
    "name": "Factoring",
    "group": "BIRD_FNNCL_INSTRMNTS_LN",
    "id": "BIRD_IL_FCTRNG_1",
    "primaryKey": [
      "INSTRMNT_UNQ_ID"
    ]
  },
  {
    "code": "FNNCL_LSS",
    "name": "Financial leases",
    "group": "BIRD_FNNCL_INSTRMNTS_LN",
    "id": "BIRD_IL_FNNCL_LSS_1",
    "primaryKey": [
      "INSTRMNT_UNQ_ID"
    ]
  },
  {
    "code": "INDRCT_FCTRNG",
    "name": "Indirect factoring",
    "group": "BIRD_FNNCL_INSTRMNTS_LN",
    "id": "BIRD_IL_INDRCT_FCTRNG_1",
    "primaryKey": [
      "INSTRMNT_UNQ_ID"
    ]
  },
  {
    "code": "OTHR_DPSTS",
    "name": "Other deposits",
    "group": "BIRD_FNNCL_INSTRMNTS_LN",
    "id": "BIRD_IL_OTHR_DPSTS_1",
    "primaryKey": [
      "INSTRMNT_UNQ_ID"
    ]
  },
  {
    "code": "OTHR_LNS",
    "name": "Other loans",
    "group": "BIRD_FNNCL_INSTRMNTS_LN",
    "id": "BIRD_IL_OTHR_LNS_1",
    "primaryKey": [
      "INSTRMNT_UNQ_ID"
    ]
  },
  {
    "code": "OTHR_TRD_RCVBLS",
    "name": "Other trade receivables",
    "group": "BIRD_FNNCL_INSTRMNTS_LN",
    "id": "BIRD_IL_OTHR_TRD_RCVBLS_1",
    "primaryKey": [
      "INSTRMNT_UNQ_ID"
    ]
  },
  {
    "code": "OVRDRFTS",
    "name": "Overdrafts",
    "group": "BIRD_FNNCL_INSTRMNTS_LN",
    "id": "BIRD_IL_OVRDRFTS_1",
    "primaryKey": [
      "INSTRMNT_UNQ_ID"
    ]
  },
  {
    "code": "RVRS_RPRCHS_LNS",
    "name": "Reverse repurchase loans",
    "group": "BIRD_FNNCL_INSTRMNTS_LN",
    "id": "BIRD_IL_RVRS_RPRCHS_LNS_1",
    "primaryKey": [
      "INSTRMNT_UNQ_ID"
    ]
  },
  {
    "code": "CRRNT_ACCNT",
    "name": "Current account (including Transferable deposits)",
    "group": "BIRD_FNNCL_INSTRMNTS_LN",
    "id": "CRRNT_ACCNT_1",
    "primaryKey": []
  }
];
BIRD_FNNCL_INSTRMNTS_CRDT_LNS = [{
    "code": "CRDT_FCLTS",
    "name": "Credit facilities",
    "group": "BIRD_FNNCL_INSTRMNTS_CRDT_LNS",
    "id": "BIRD_IL_CRDT_FCLTS_1",
    "primaryKey": [
      "CRDT_FCLTY_UNQ_ID"
    ]
  },
  {
    "code": "CRDT_FCLTS_INSTRMNTS",
    "name": "Credit facilities-Instruments",
    "group": "BIRD_FNNCL_INSTRMNTS_CRDT_LNS",
    "id": "BIRD_IL_CRDT_FCLTS_INSTRMNTS_1",
    "primaryKey": [
      "CRDT_FCLTY_UNQ_ID",
      "INSTRMNT_UNQ_ID"
    ]
  }
];
BIRD_LINKS = [{
    "code": "INSTRMNTS_PRTCTNS",
    "name": "Instruments-protections",
    "group": "BIRD_LINKS",
    "id": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "primaryKey": [
      "INSTRMNT_UNQ_ID",
      "PRTCTN_ID"
    ]
  },
  {
    "code": "TRNSCTNS_CNTRPRTS",
    "name": "Transactions-Counterparties",
    "group": "BIRD_LINKS",
    "id": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "primaryKey": [
      "CNTRPRTY_ID",
      "CNTRPRTY_RL",
      "TRNSCTN_ID",
      "TYP_TRNSCTN"
    ]
  },
  {
    "code": "RPRCHS_AGRMNT_FNNCL_ASST",
    "name": "Repurchase agreements-financial asset",
    "group": "BIRD_LINKS",
    "id": "RPRCHS_AGRMNT_FNNCL_ASST_1",
    "primaryKey": []
  }
];
BIRD_FNNCL_INSTRMNTS_SH = [{
  "code": "OWND_SCRTY",
  "name": "Owned securities",
  "group": "BIRD_FNNCL_INSTRMNTS_SH",
  "id": "BIRD_IL_OWND_SCRTY_1",
  "primaryKey": [
    "OWND_SCRTY_ID"
  ]
}];
BIRD_FNNCL_INSTRMNTS_LBLTS = [{
    "code": "PSTV_CRRNT_ACCNT",
    "name": "Positive current accounts",
    "group": "BIRD_FNNCL_INSTRMNTS_LBLTS",
    "id": "BIRD_IL_PSTV_CRRNT_ACCNT_1",
    "primaryKey": [
      "INSTRMNT_UNQ_ID"
    ]
  },
  {
    "code": "RPRCHS_AGRMNT",
    "name": "Repurchase agreement",
    "group": "BIRD_FNNCL_INSTRMNTS_LBLTS",
    "id": "RPRCHS_AGRMNT_1",
    "primaryKey": []
  },
  {
    "code": "DPSTS_LBLTS",
    "name": "Deposits (liabilities)",
    "group": "BIRD_FNNCL_INSTRMNTS_LBLTS",
    "id": "DPSTS_LBLTS_1",
    "primaryKey": []
  },
  {
    "code": "SCRTS_ISSD",
    "name": "Securities issued",
    "group": "BIRD_FNNCL_INSTRMNTS_LBLTS",
    "id": "SCRTS_ISSD_1",
    "primaryKey": []
  },
  {
    "code": "OTHR_FNNCL_LBLTS",
    "name": "Other financial liabilities",
    "group": "BIRD_FNNCL_INSTRMNTS_LBLTS",
    "id": "OTHR_FNNCL_LBLTS_1",
    "primaryKey": []
  }
];
BIRD_FNNCL_INSTRMNTS_MSTR = [{
    "code": "RGSTRY_TBL_SCRTS",
    "name": "Registry table of securities",
    "group": "BIRD_FNNCL_INSTRMNTS_MSTR",
    "id": "BIRD_IL_RGSTRY_TBL_SCRTS_1",
    "primaryKey": [
      "SCRTY_ID"
    ]
  },
  {
    "code": "SCRTSTNS_OTHR_CRDT_TRNSFRS",
    "name": "Securitisations and other credit transfers",
    "group": "BIRD_FNNCL_INSTRMNTS_MSTR",
    "id": "BIRD_IL_SCRTSTNS_OTHR_CRDT_TRNSFRS_1",
    "primaryKey": [
      "SCRTSTN_TRNSFR_ID"
    ]
  }
];
BIRD_PRTCTN_FNNCL = [{
    "code": "OTHR_FNNCL_PRTCTN",
    "name": "Other financial protection",
    "group": "BIRD_PRTCTN_FNNCL",
    "id": "BIRD_IL_OTHR_FNNCL_PRTCTN_1",
    "primaryKey": [
      "PRTCTN_ID"
    ]
  },
  {
    "code": "PL_ITM",
    "name": "Pool of (repo) items",
    "group": "BIRD_PRTCTN_FNNCL",
    "id": "BIRD_IL_PL_ITM_1",
    "primaryKey": [
      "PRTCTN_ID"
    ]
  },
  {
    "code": "SCRTS_PRTCTN",
    "name": "Securities protection",
    "group": "BIRD_PRTCTN_FNNCL",
    "id": "BIRD_IL_SCRTS_PRTCTN_1",
    "primaryKey": [
      "PRTCTN_ID"
    ]
  }
];
BIRD_PRTCTN_PHYSCL = [{
    "code": "OTHR_PHYSCL_PRTCTN",
    "name": "Other physical protection",
    "group": "BIRD_PRTCTN_PHYSCL",
    "id": "BIRD_IL_OTHR_PHYSCL_PRTCTN_1",
    "primaryKey": [
      "PRTCTN_ID"
    ]
  },
  {
    "code": "RL_ESTT_CLM",
    "name": "Real estate claim",
    "group": "BIRD_PRTCTN_PHYSCL",
    "id": "BIRD_IL_RL_ESTT_CLM_1",
    "primaryKey": [
      "PRTCTN_ID"
    ]
  },
  {
    "code": "RL_ESTT_PRTCTN",
    "name": "Real estate protection",
    "group": "BIRD_PRTCTN_PHYSCL",
    "id": "BIRD_IL_RL_ESTT_PRTCTN_1",
    "primaryKey": [
      "PRTCTN_ITM_ID"
    ]
  },
  {
    "code": "RL_ESTT_PRTCTN_CLM",
    "name": "Real estate protection-Real estate claim",
    "group": "BIRD_PRTCTN_PHYSCL",
    "id": "BIRD_IL_RL_ESTT_PRTCTN_CLM_1",
    "primaryKey": [
      "PRTCTN_ID",
      "PRTCTN_ITM_ID"
    ]
  }
];
BIRD_FNNCL_INSTRMNTS_DRVTVS = [{
    "code": "BIRD_CRDT_DRVTV",
    "name": "Credit derivatives",
    "group": "BIRD_FNNCL_INSTRMNTS_DRVTVS",
    "id": "BIRD_CRDT_DRVTV",
    "primaryKey": []
  },
  {
    "code": "BIRD_FNNCL_OPTN",
    "name": "Financial options",
    "group": "BIRD_FNNCL_INSTRMNTS_DRVTVS",
    "id": "BIRD_FNNCL_OPTN",
    "primaryKey": []
  },
  {
    "code": "BIRD_FNNCL_FRWRD_OPTN",
    "name": "Financial forwards and swaps",
    "group": "BIRD_FNNCL_INSTRMNTS_DRVTVS",
    "id": "BIRD_FNNCL_FRWRD_OPTN",
    "primaryKey": []
  }
];
BIRD_OTHR_FNNCL_ASSTS = [{
    "code": "EQTY_INSTRMNTS_NT_SCRTS",
    "name": "Equity instruments that are not securities",
    "group": "BIRD_OTHR_FNNCL_ASSTS",
    "id": "EQTY_INSTRMNTS_NT_SCRTS_1",
    "primaryKey": []
  },
  {
    "code": "CSH_ON_HND",
    "name": "Cash on hand",
    "group": "BIRD_OTHR_FNNCL_ASSTS",
    "id": "CSH_ON_HND_1",
    "primaryKey": []
  },
  {
    "code": "ADVNCS_NT_LNS",
    "name": "Advances (that are not loans)",
    "group": "BIRD_OTHR_FNNCL_ASSTS",
    "id": "ADVNCS_NT_LNS_1",
    "primaryKey": []
  }
];
BIRD_NN_FNNCL_ITM = [{
    "code": "NN_FNNCL_ASSTS",
    "name": "Non-financial assets (excluding tangible and intangible assets)",
    "group": "BIRD_NN_FNNCL_ITM",
    "id": "NN_FNNCL_ASSTS_1",
    "primaryKey": []
  },
  {
    "code": "PRPRTY_PLNT_EQPMNT",
    "name": "Property, pland and equipment",
    "group": "BIRD_NN_FNNCL_ITM",
    "id": "PRPRTY_PLNT_EQPMNT_1",
    "primaryKey": []
  },
  {
    "code": "INVSTMNT_PRPRTY",
    "name": "Investment property",
    "group": "BIRD_NN_FNNCL_ITM",
    "id": "INVSTMNT_PRPRTY_1",
    "primaryKey": []
  },
  {
    "code": "GDWLL",
    "name": "Goodwill",
    "group": "BIRD_NN_FNNCL_ITM",
    "id": "GDWLL_1",
    "primaryKey": []
  },
  {
    "code": "OTHR_INTNGBL_ASSTS",
    "name": "Other intangible assets",
    "group": "BIRD_NN_FNNCL_ITM",
    "id": "OTHR_INTNGBL_ASSTS_1",
    "primaryKey": []
  },
  {
    "code": "OTHR_ASSTS",
    "name": "Other assets",
    "group": "BIRD_NN_FNNCL_ITM",
    "id": "OTHR_ASSTS_1",
    "primaryKey": []
  },
  {
    "code": "NN_FNNCL_LBLTS",
    "name": "Non-financial liabilities and provisions (excluding financial guarantees and commitments given)",
    "group": "BIRD_NN_FNNCL_ITM",
    "id": "NN_FNNCL_LBLTS_1",
    "primaryKey": []
  }
];

edgesInput = [{
    "from": "BIRD_IL_GRP_1",
    "to": "BIRD_IL_CMPSTN_LGL_ENTTY_1",
    "label": "LGL_ENTTY_ID -> LGL_ENTTY_ID"
  },
  {
    "from": "BIRD_IL_CNTRPRTS_1",
    "to": "BIRD_IL_CNTRPRTS_1",
    "label": "HD_OFFC_UNDRT_ID -> CNTRPRTY_ID"
  },
  {
    "from": "BIRD_IL_CNTRPRTS_1",
    "to": "BIRD_IL_CNTRPRTS_1",
    "label": "IMMDT_PRNT_UNDRT_ID -> CNTRPRTY_ID"
  },
  {
    "from": "BIRD_IL_CNTRPRTS_1",
    "to": "BIRD_IL_CNTRPRTS_1",
    "label": "ULTMT_PRNT_UNDRT_ID -> CNTRPRTY_ID"
  },
  {
    "from": "BIRD_IL_CNTRPRTS_CDS_1",
    "to": "BIRD_IL_CNTRPRTS_1",
    "label": "CNTRPRTY_ID -> CNTRPRTY_ID"
  },
  {
    "from": "BIRD_IL_CNTRPRTS_PD_1",
    "to": "BIRD_IL_CNTRPRTS_1",
    "label": "CNTRPRTY_ID -> CNTRPRTY_ID"
  },
  {
    "from": "BIRD_IL_ENTRPRS_SZ_PRVS_PRD_1",
    "to": "BIRD_IL_CNTRPRTS_1",
    "label": "CNTRPRTY_ID -> CNTRPRTY_ID"
  },
  {
    "from": "BIRD_IL_GRP_CNTRPRTY_RLTNSHP_1",
    "to": "BIRD_IL_CNTRPRTS_1",
    "label": "CNTRPRTY_ID -> CNTRPRTY_ID"
  },
  {
    "from": "BIRD_IL_JNT_CNTRPRTS_1",
    "to": "BIRD_IL_CNTRPRTS_1",
    "label": "CNTRPRTY_ID -> CNTRPRTY_ID"
  },
  {
    "from": "BIRD_IL_LNKD_ENTRPRSS_1",
    "to": "BIRD_IL_CNTRPRTS_1",
    "label": "CNTRPRTY_ID -> CNTRPRTY_ID"
  },
  {
    "from": "BIRD_IL_PRTNR_ENTRPRSS_1",
    "to": "BIRD_IL_CNTRPRTS_1",
    "label": "CNTRPRTY_ID -> CNTRPRTY_ID"
  },
  {
    "from": "BIRD_IL_EXTRNL_CRDT_ASSSSMNT_1",
    "to": "BIRD_IL_CNTRY_1",
    "label": "EXTRNL_CRDT_ASSSSMNT -> EXTRNL_CRDT_ASSSSMNT"
  },
  {
    "from": "BIRD_IL_CRDT_FCLTS_INSTRMNTS_1",
    "to": "BIRD_IL_CRDT_CRD_DBT_CNVNNC_CRDT_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "to": "BIRD_IL_CRDT_CRD_DBT_CNVNNC_CRDT_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_CRDT_FCLTS_INSTRMNTS_1",
    "to": "BIRD_IL_CRDT_CRD_DBT_EXTNDD_CRDT_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "to": "BIRD_IL_CRDT_CRD_DBT_EXTNDD_CRDT_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_CRDT_FCLTS_INSTRMNTS_1",
    "to": "BIRD_IL_CRDT_FCLTS_1",
    "label": "CRDT_FCLTY_UNQ_ID -> CRDT_FCLTY_UNQ_ID"
  },
  {
    "from": "BIRD_IL_CRDT_FCLTS_INSTRMNTS_1",
    "to": "BIRD_IL_FCTRNG_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INDRCT_FCTRNG_1",
    "to": "BIRD_IL_FCTRNG_1",
    "label": "CNNCTD_FCTRNG_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "to": "BIRD_IL_FCTRNG_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_CRDT_FCLTS_INSTRMNTS_1",
    "to": "BIRD_IL_FNNCL_LSS_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "to": "BIRD_IL_FNNCL_LSS_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_GRP_CNTRPRTY_RLTNSHP_1",
    "to": "BIRD_IL_GRP_DT_1",
    "label": "GRP_INTRNL_ID -> GRP_INTRNL_ID"
  },
  {
    "from": "BIRD_IL_CNTRPRTS_1",
    "to": "BIRD_IL_JNT_CNTRPRTS_1",
    "label": "CNTRPRTY_ID -> JNT_CNTRPRTY_CMPNNT"
  },
  {
    "from": "BIRD_IL_CNTRPRTS_1",
    "to": "BIRD_IL_LNKD_ENTRPRSS_1",
    "label": "CNTRPRTY_ID -> LNKD_ENTRPRS_ID"
  },
  {
    "from": "BIRD_IL_CRDT_FCLTS_INSTRMNTS_1",
    "to": "BIRD_IL_OTHR_DPSTS_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "to": "BIRD_IL_OTHR_DPSTS_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "to": "BIRD_IL_OTHR_FNNCL_PRTCTN_1",
    "label": "PRTCTN_ID -> PRTCTN_ID"
  },
  {
    "from": "BIRD_IL_CRDT_FCLTS_INSTRMNTS_1",
    "to": "BIRD_IL_OTHR_LNS_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "to": "BIRD_IL_OTHR_LNS_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "to": "BIRD_IL_OTHR_PHYSCL_PRTCTN_1",
    "label": "PRTCTN_ID -> PRTCTN_ID"
  },
  {
    "from": "BIRD_IL_CRDT_FCLTS_INSTRMNTS_1",
    "to": "BIRD_IL_OTHR_TRD_RCVBLS_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "to": "BIRD_IL_OTHR_TRD_RCVBLS_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_CRDT_FCLTS_INSTRMNTS_1",
    "to": "BIRD_IL_OVRDRFTS_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "to": "BIRD_IL_OVRDRFTS_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "to": "BIRD_IL_PL_ITM_1",
    "label": "PRTCTN_ID -> PRTCTN_ID"
  },
  {
    "from": "BIRD_IL_CNTRPRTS_1",
    "to": "BIRD_IL_PRTNR_ENTRPRSS_1",
    "label": "CNTRPRTY_ID -> PRTNR_ENTRPRS_ID"
  },
  {
    "from": "BIRD_IL_CRDT_FCLTS_INSTRMNTS_1",
    "to": "BIRD_IL_PSTV_CRRNT_ACCNT_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_EXTRNL_CRDT_ASSSSMNT_1",
    "to": "BIRD_IL_RGSTRY_TBL_SCRTS_1",
    "label": "EXTRNL_CRDT_ASSSSMNT -> EXTRNL_CRDT_ASSSSMNT"
  },
  {
    "from": "BIRD_IL_OWND_SCRTY_1",
    "to": "BIRD_IL_RGSTRY_TBL_SCRTS_1",
    "label": "SCRTY_ID -> SCRTY_ID"
  },
  {
    "from": "BIRD_IL_SCRTS_PRTCTN_1",
    "to": "BIRD_IL_RGSTRY_TBL_SCRTS_1",
    "label": "SCRTY_ID -> SCRTY_ID"
  },
  {
    "from": "BIRD_IL_RL_ESTT_PRTCTN_CLM_1",
    "to": "BIRD_IL_RL_ESTT_CLM_1",
    "label": "PRTCTN_ID -> PRTCTN_ID"
  },
  {
    "from": "BIRD_IL_RL_ESTT_PRTCTN_CLM_1",
    "to": "BIRD_IL_RL_ESTT_PRTCTN_1",
    "label": "PRTCTN_ITM_ID -> PRTCTN_ITM_ID"
  },
  {
    "from": "BIRD_IL_CRDT_FCLTS_INSTRMNTS_1",
    "to": "BIRD_IL_RVRS_RPRCHS_LNS_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "to": "BIRD_IL_RVRS_RPRCHS_LNS_1",
    "label": "INSTRMNT_UNQ_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_INSTRMNTS_PRTCTNS_1",
    "to": "BIRD_IL_SCRTS_PRTCTN_1",
    "label": "PRTCTN_ID -> PRTCTN_ID"
  },
  {
    "from": "BIRD_IL_CRDT_CRD_DBT_CNVNNC_CRDT_1",
    "to": "BIRD_IL_SCRTSTNS_OTHR_CRDT_TRNSFRS_1",
    "label": "SCRTSTN_TRNSFR_ID -> SCRTSTN_TRNSFR_ID"
  },
  {
    "from": "BIRD_IL_CRDT_CRD_DBT_EXTNDD_CRDT_1",
    "to": "BIRD_IL_SCRTSTNS_OTHR_CRDT_TRNSFRS_1",
    "label": "SCRTSTN_TRNSFR_ID -> SCRTSTN_TRNSFR_ID"
  },
  {
    "from": "BIRD_IL_FCTRNG_1",
    "to": "BIRD_IL_SCRTSTNS_OTHR_CRDT_TRNSFRS_1",
    "label": "SCRTSTN_TRNSFR_ID -> SCRTSTN_TRNSFR_ID"
  },
  {
    "from": "BIRD_IL_FNNCL_LSS_1",
    "to": "BIRD_IL_SCRTSTNS_OTHR_CRDT_TRNSFRS_1",
    "label": "SCRTSTN_TRNSFR_ID -> SCRTSTN_TRNSFR_ID"
  },
  {
    "from": "BIRD_IL_OTHR_DPSTS_1",
    "to": "BIRD_IL_SCRTSTNS_OTHR_CRDT_TRNSFRS_1",
    "label": "SCRTSTN_TRNSFR_ID -> SCRTSTN_TRNSFR_ID"
  },
  {
    "from": "BIRD_IL_OTHR_LNS_1",
    "to": "BIRD_IL_SCRTSTNS_OTHR_CRDT_TRNSFRS_1",
    "label": "SCRTSTN_TRNSFR_ID -> SCRTSTN_TRNSFR_ID"
  },
  {
    "from": "BIRD_IL_OTHR_TRD_RCVBLS_1",
    "to": "BIRD_IL_SCRTSTNS_OTHR_CRDT_TRNSFRS_1",
    "label": "SCRTSTN_TRNSFR_ID -> SCRTSTN_TRNSFR_ID"
  },
  {
    "from": "BIRD_IL_OVRDRFTS_1",
    "to": "BIRD_IL_SCRTSTNS_OTHR_CRDT_TRNSFRS_1",
    "label": "SCRTSTN_TRNSFR_ID -> SCRTSTN_TRNSFR_ID"
  },
  {
    "from": "BIRD_IL_RVRS_RPRCHS_LNS_1",
    "to": "BIRD_IL_SCRTSTNS_OTHR_CRDT_TRNSFRS_1",
    "label": "SCRTSTN_TRNSFR_ID -> SCRTSTN_TRNSFR_ID"
  },
  {
    "from": "BIRD_IL_TRNSFRBL_DPSTS_1",
    "to": "BIRD_IL_SCRTSTNS_OTHR_CRDT_TRNSFRS_1",
    "label": "SCRTSTN_TRNSFR_ID -> SCRTSTN_TRNSFR_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_IL_CNTRPRTS_1",
    "label": "CNTRPRTY_ID -> CNTRPRTY_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "ADVNCS_NT_LNS_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_CRDT_DRVTV",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_FNNCL_FRWRD_OPTN",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_FNNCL_OPTN",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_IL_CRDT_CRD_DBT_CNVNNC_CRDT_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_IL_CRDT_CRD_DBT_EXTNDD_CRDT_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_IL_CRDT_FCLTS_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "CRRNT_ACCNT_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "DPSTS_LBLTS_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "EQTY_INSTRMNTS_NT_SCRTS_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_IL_FCTRNG_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_IL_FNNCL_LSS_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_IL_OTHR_DPSTS_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "OTHR_FNNCL_LBLTS_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_IL_OTHR_LNS_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_IL_OTHR_TRD_RCVBLS_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_IL_OVRDRFTS_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "RPRCHS_AGRMNT_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_IL_RVRS_RPRCHS_LNS_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_TRNSCTNS_CNTRPRTS_1",
    "to": "BIRD_IL_SCRTSTNS_OTHR_CRDT_TRNSFRS_1",
    "label": "TRNSCTN_ID -> INSTRMNT_UNQ_ID"
  },
  {
    "from": "BIRD_IL_RGSTRY_TBL_SCRTS_1",
    "to": "BIRD_IL_CNTRPRTS_1",
    "label": "ISSR_ID -> CNTRPRTY_ID"
  },
  {
    "from": "RPRCHS_AGRMNT_FNNCL_ASST_1",
    "to": "BIRD_IL_RVRS_RPRCHS_LNS_1",
    "label": "a -> a"
  },
  {
    "from": "RPRCHS_AGRMNT_FNNCL_ASST_1",
    "to": "BIRD_IL_OWND_SCRTY_1",
    "label": "a -> a"
  },
  {
    "from": "SCRTS_ISSD_1",
    "to": "BIRD_IL_RGSTRY_TBL_SCRTS_1",
    "label": "a -> a"
  }
];

/**
 * Teacher-wise Timetable Data (Session 2026-27)
 * The Trust School | ATH Campus
 */

const TIMETABLE_DATA = {
  school: "THE TRUST SCHOOL",
  campus: "ATH CAMPUS",
  session: "2026-27",
  status: "Corrected",
  bellTimes: {
    monToThu: {
      assembly: "8:45-8:55",
      zeroPeriod: "8:55-9:25",
      periods1to4: "9:25-11:25",
      break: "11:25-11:45",
      periods5to8: "11:45-1:35",
      dispersal: "1:35",
      note: "P7 and P8 are 25 min"
    },
    friday: {
      assembly: "8:45-8:55",
      p1: "8:55-9:30",
      p2: "9:30-10:05",
      p3to4: "10:05-11:05",
      break: "11:05-11:30",
      p5to6: "11:30-12:30",
      dispersal: "12:30"
    }
  },
  teachers: [
    {
      name: "Mr Ahsan Ali",
      weeklyLoad: 27,
      schedule: {
        Monday: ["Free", "9A Math", "9A Math", "9A Math", "Pre-9A Math", "Pre-9A Math", "6B Math", "6B Math", "Free", "Free"],
        Tuesday: ["Free", "9A Math", "9A Math", "9A Math", "Pre-9A Math", "Pre-9A Math", "6B Math", "6B Math", "Free", "Free"],
        Wednesday: ["Free", "9A Math", "Pre-9A Math", "6B Math", "Free", "BREAK", "10B Math", "Free", "10B Math", "7B Computer"],
        Thursday: ["Pre-9A Math", "9A Math", "Pre-9A Math", "6B Math", "Free", "BREAK", "10B Math", "Free", "Free", "7B Computer"],
        Friday: ["", "9A Math", "Pre-9A Math", "6B Math", "Free", "BREAK", "10B Math", "Free", "", ""]
      }
    },
    {
      name: "Mr Ahsan Saddique",
      weeklyLoad: 27,
      schedule: {
        Monday: ["Free", "9E Math", "7C Math", "7C Math", "Free", "BREAK", "7D Math", "Free", "10A Math", "Free"],
        Tuesday: ["9E Math", "9E Math", "7C Math", "Free", "Free", "BREAK", "7D Math", "7C Computer", "10A Math", "Free"],
        Wednesday: ["10A Math", "9E Math", "7C Math", "7D Math", "Free", "BREAK", "7D Math", "7C Computer", "Free", "10A Math"],
        Thursday: ["10A Math", "9E Math", "7C Math", "Free", "10A Math", "BREAK", "7D Math", "7C Computer", "Free", "Free"],
        Friday: ["", "9E Math", "7C Math", "Free", "Free", "BREAK", "7D Math", "Free", "", ""]
      }
    },
    {
      name: "Ms Amal",
      weeklyLoad: 25,
      schedule: {
        Monday: ["9A Biology", "Free", "Free", "Pre-9A Biology", "7A Science", "BREAK", "6E Science", "10A Biology", "Free", "9A Biology"],
        Tuesday: ["Free", "Free", "Free", "Pre-9A Biology", "7A Science", "BREAK", "6E Science", "10A Biology", "Free", "9A Biology"],
        Wednesday: ["Free", "Free", "Free", "Pre-9A Biology", "7A Science", "BREAK", "6E Science", "10A Biology", "Free", "9A Biology"],
        Thursday: ["Free", "Free", "Free", "Pre-9A Biology", "7A Science", "BREAK", "6E Science", "10A Biology", "Free", "9A Biology"],
        Friday: ["", "Free", "7A Science", "Pre-9A Biology", "Free", "BREAK", "6E Science", "10A Biology", "", ""]
      }
    },
    {
      name: "Ms Andleeb",
      weeklyLoad: 25,
      schedule: {
        Monday: ["Free", "Free", "Pre-9B Computer", "9E Computer", "9B Computer", "BREAK", "Pre-9E Computer", "10C Computer", "Free", "Free"],
        Tuesday: ["Free", "Free", "Pre-9B Computer", "9E Computer", "9B Computer", "BREAK", "Pre-9E Computer", "10C Computer", "Free", "Free"],
        Wednesday: ["Free", "Free", "Pre-9B Computer", "9E Computer", "9B Computer", "BREAK", "Pre-9E Computer", "10C Computer", "Free", "Free"],
        Thursday: ["Free", "Free", "Pre-9B Computer", "9E Computer", "9B Computer", "BREAK", "Pre-9E Computer", "10C Computer", "Free", "Free"],
        Friday: ["Free", "Free", "Pre-9B Computer", "9E Computer", "9B Computer", "BREAK", "Pre-9E Computer", "10C Computer", "Free", "Free"]
      }
    },
    {
      name: "Ms Asia",
      weeklyLoad: 29,
      schedule: {
        Monday: ["Free", "6C English", "6E English", "9D English", "Free", "BREAK", "Pre-9C English", "Free", "Free", "6C S.Studies"],
        Tuesday: ["Free", "6C English", "6E English", "9D English", "Free", "BREAK", "Pre-9C English", "10B English", "10B English", "6C S.Studies"],
        Wednesday: ["Free", "6C English", "6E English", "9D English", "Pre-9C English", "BREAK", "Free", "10B English", "Free", "6C S.Studies"],
        Thursday: ["Free", "6C English", "6E English", "9D English", "Free", "BREAK", "Pre-9C English", "10B English", "Free", "6C S.Studies"],
        Friday: ["", "6C English", "6E English", "9D English", "Free", "BREAK", "Pre-9C English", "10B English", "", ""]
      }
    },
    {
      name: "Mr Asif Ali",
      weeklyLoad: 30,
      schedule: {
        Monday: ["Free", "Pre-9C Math", "Free", "9C Math", "6F Math", "BREAK", "6F Math", "6C Math", "6A Math", "Free"],
        Tuesday: ["9C Math", "Pre-9C Math", "Free", "9C Math", "6A Math", "BREAK", "6F Math", "6C Math", "6C Math", "Free"],
        Wednesday: ["Free", "Pre-9C Math", "Pre-9C Math", "Free", "6A Math", "BREAK", "6F Math", "6C Math", "Free", "Free"],
        Thursday: ["Free", "Pre-9C Math", "Free", "9C Math", "6A Math", "BREAK", "6F Math", "6C Math", "6A Math", "9C Math"],
        Friday: ["", "Pre-9C Math", "Free", "9C Math", "6A Math", "BREAK", "6F Math", "6C Math", "", ""]
      }
    },
    {
      name: "Mr Asif Majeed",
      weeklyLoad: 27,
      schedule: {
        Monday: ["Pre-9E Math", "10C Math", "Free", "6E Math", "Free", "BREAK", "7E Math", "Pre-9E Math", "Free", "Free"],
        Tuesday: ["Free", "10C Math", "Free", "Free", "Pre-9E Math", "BREAK", "7E Math", "6E Math", "10C Math", "7E Computer"],
        Wednesday: ["Free", "10C Math", "Free", "Free", "Pre-9E Math", "BREAK", "7E Math", "6E Math", "Free", "7E Computer"],
        Thursday: ["Free", "10C Math", "7E Math", "Free", "Pre-9E Math", "BREAK", "7E Math", "6E Math", "Free", "7E Computer"],
        Friday: ["", "10C Math", "Free", "6E Math", "Pre-9E Math", "BREAK", "7E Math", "6E Math", "", ""]
      }
    },
    {
      name: "Ms Farkhanda",
      weeklyLoad: 29,
      schedule: {
        Monday: ["10A English", "6D English", "6D S.Studies", "Free", "Free", "BREAK", "9C English", "Pre-9B English", "6D S.Studies", "7A English"],
        Tuesday: ["Free", "6D English", "10A English", "7A English", "Free", "BREAK", "9C English", "Pre-9B English", "Free", "Pre-9B English"],
        Wednesday: ["Pre-9B English", "6D English", "10A English", "Free", "Free", "BREAK", "9C English", "Free", "6D S.Studies", "7A English"],
        Thursday: ["Free", "6D English", "10A English", "Free", "Free", "BREAK", "9C English", "Pre-9B English", "Free", "7A English"],
        Friday: ["", "6D English", "10A English", "7A English", "6D S. Studies", "BREAK", "9C English", "Free", "", ""]
      }
    },
    {
      name: "Ms Fatima",
      weeklyLoad: 29,
      schedule: {
        Monday: ["9D Physics", "9D Physics", "Pre-9E Physics", "Free", "9A Physics", "BREAK", "Free", "9A Physics", "Pre-9C Physics", "Pre-9E Physics"],
        Tuesday: ["Pre-9C Physics", "9D Physics", "Pre-9E Physics", "Free", "9A Physics", "BREAK", "10C Physics", "Free", "Pre-9C Physics", "10C Physics"],
        Wednesday: ["Pre-9E Physics", "9D Physics", "Pre-9E Physics", "Free", "9A Physics", "BREAK", "10C Physics", "Free", "Pre-9C Physics", "Pre-9C Physics"],
        Thursday: ["Free", "9D Physics", "Free", "Free", "9A Physics", "BREAK", "Free", "Free", "Pre-9C Physics", "10C Physics"],
        Friday: ["", "9D Physics", "Pre-9E Physics", "Free", "9A Physics", "BREAK", "10C Physics", "Free", "", ""]
      }
    },
    {
      name: "Ms Fozia",
      weeklyLoad: 29,
      schedule: {
        Monday: ["Free", "6A English", "6F English", "9A English", "10C English", "BREAK", "Pre-9A English", "Free", "Free", "6A S.Studies"],
        Tuesday: ["Free", "6A English", "6F English", "9A English", "10C English", "BREAK", "Pre-9A English", "Free", "Free", "6A S.Studies"],
        Wednesday: ["Free", "6A English", "6F English", "9A English", "Free", "BREAK", "Pre-9A English", "Free", "10C English", "6A S. Studies"],
        Thursday: ["Free", "6A English", "6F English", "9A English", "Free", "BREAK", "Pre-9A English", "Free", "10C English", "6A S.Studies"],
        Friday: ["", "6A English", "6F English", "9A English", "10C English", "BREAK", "Pre-9A English", "Free", "", ""]
      }
    },
    {
      name: "Mr Hafiz Asif",
      weeklyLoad: 27,
      schedule: {
        Monday: ["Pre-9C TQ", "Free", "Pre-9C TQ", "9B Islamiat", "Free", "BREAK", "Pre-9D Islamiat", "Free", "10C TQ", "9E Islamiat"],
        Tuesday: ["Free", "Free", "9B TQ", "10C TQ", "Free", "BREAK", "Pre-9D Islamiat", "Free", "9B Islamiat", "9E Islamiat"],
        Wednesday: ["9E Islamiat", "Free", "9B TQ", "9B Islamiat", "10C TQ", "BREAK", "Pre-9C TQ", "Free", "9B Islamiat", "9E Islamiat"],
        Thursday: ["Free", "Free", "9B TQ", "Pre-9C TQ", "10C TQ", "BREAK", "Pre-9D Islamiat", "Free", "9B Islamiat", "9E Islamiat"],
        Friday: ["", "Free", "9B TQ", "Free", "Pre-9D Islamiat", "BREAK", "Pre-9D Islamiat", "Free", "", ""]
      }
    },
    {
      name: "Mr Hamza",
      weeklyLoad: 28,
      schedule: {
        Monday: ["Pre-9D Physics", "7E Science", "Pre-9D Physics", "Free", "Pre-9B Physics", "BREAK", "Free", "9C Physics", "Free", "10A Physics"],
        Tuesday: ["10A Physics", "7E Science", "Pre-9D Physics", "Free", "Pre-9B Physics", "BREAK", "Free", "9C Physics", "Free", "10A Physics"],
        Wednesday: ["7E Science", "Free", "Pre-9D Physics", "Free", "Pre-9B Physics", "BREAK", "Free", "9C Physics", "9C Physics", "Pre-9B Physics"],
        Thursday: ["7E Science", "Free", "Pre-9D Physics", "Free", "Pre-9B Physics", "BREAK", "Free", "9C Physics", "10A Physics", "10A Physics"],
        Friday: ["7E Science", "Pre-9D Physics", "Free", "Pre-9B Physics", "BREAK", "Free", "9C Physics", "", "", ""]
      }
    },
    {
      name: "Mr Imtiaz",
      weeklyLoad: 31,
      schedule: {
        Monday: ["9B Chemistry", "Free", "7D Science", "10A Chemistry", "7C Science", "BREAK", "10A Chemistry", "Pre-9A Chemistry", "6B Science", "Free"],
        Tuesday: ["9B Chemistry", "Free", "7D Science", "9B Chemistry", "7C Science", "BREAK", "10A Chemistry", "Pre-9A Chemistry", "6B Science", "Free"],
        Wednesday: ["9B Chemistry", "Free", "7D Science", "Free", "7C Science", "BREAK", "10A Chemistry", "Pre-9A Chemistry", "6B Science", "Free"],
        Thursday: ["9B Chemistry", "Free", "7D Science", "Free", "7C Science", "BREAK", "10A Chemistry", "Pre-9A Chemistry", "6B Science", "6B Science"],
        Friday: ["", "Free", "7D Science", "Free", "7C Science", "BREAK", "10A Chemistry", "Pre-9A Chemistry", "", ""]
      }
    },
    {
      name: "Ms Ismat",
      weeklyLoad: 24,
      schedule: {
        Monday: ["Free", "9B Math", "9B Math", "Pre-9B Math", "Free", "BREAK", "7B Math", "Free", "10D Math", "Pre-9B Math"],
        Tuesday: ["10D Math", "9B Math", "7B Math", "Pre-9B Math", "Free", "BREAK", "7B Math", "Free", "10D Math", "Free"],
        Wednesday: ["Free", "9B Math", "Free", "Pre-9B Math", "Free", "BREAK", "7B Math", "Free", "10D Math", "Free"],
        Thursday: ["10D Math", "9B Math", "Free", "Pre-9B Math", "Free", "BREAK", "7B Math", "Free", "10D Math", "Free"],
        Friday: ["", "9B Math", "Free", "Pre-9B Math", "Free", "BREAK", "Free", "7B Math", "", ""]
      }
    },
    {
      name: "Mr Kaleem",
      weeklyLoad: 18,
      schedule: {
        Monday: ["Free", "Free", "Free", "Free", "Pre-9E Sports", "BREAK", "Free", "9B Sports", "9E Sports", "Free"],
        Tuesday: ["Free", "Free", "7E S.D", "7C S.D", "Pre-9C Sports", "BREAK", "Pre-9B Sports", "7B S.D", "9C Sports", "Free"],
        Wednesday: ["Free", "Free", "Free", "Free", "Free", "BREAK", "Pre-9D Sports", "9A Sports", "Free", "Free"],
        Thursday: ["Free", "Free", "9D Sports", "Free", "Pre-9A Sports", "BREAK", "Free", "7D S.D", "6F Sports", "Free"],
        Friday: ["", "Free", "6D Sports", "Free", "6E Sports", "BREAK", "Free", "7A S.D", "", ""]
      }
    },
    {
      name: "Mr Kamran",
      weeklyLoad: 26,
      schedule: {
        Monday: ["Free", "Free", "Free", "7D S.Studies", "10D P.Studies", "BREAK", "Free", "7E S.Studies", "7C S.Studies", "10B P.Studies"],
        Tuesday: ["10B P.Studies", "Free", "Free", "7D S.Studies", "10D P.Studies", "BREAK", "Free", "Free", "7C S.Studies", "10B P.Studies"],
        Wednesday: ["Free", "Free", "7B S.Studies", "Free", "10D P.Studies", "BREAK", "Free", "7E S.Studies", "7C S.Studies", "10B P.Studies"],
        Thursday: ["Free", "Free", "7B S.Studies", "7D S.Studies", "10D P.Studies", "BREAK", "Free", "7E S.Studies", "7C S.Studies", "10B P.Studies"],
        Friday: ["", "Free", "7B S.Studies", "7D S.Studies", "10D P.Studies", "BREAK", "7B S.Studies", "7E S.Studies", "", ""]
      }
    },
    {
      name: "Mr Khurram",
      weeklyLoad: 27,
      schedule: {
        Monday: ["Free", "7A Math", "7A Math", "6D Math", "Free", "BREAK", "Free", "Pre-9D Math", "Free", "9D Math"],
        Tuesday: ["Pre-9D Math", "7A Math", "6D Math", "6D Math", "Free", "BREAK", "Free", "Pre-9D Math", "7A Computer", "9D Math"],
        Wednesday: ["9D Math", "7A Math", "Free", "6D Math", "Free", "BREAK", "Free", "Pre-9D Math", "7A Computer", "9D Math"],
        Thursday: ["9D Math", "7A Math", "Free", "6D Math", "Free", "BREAK", "Free", "Pre-9D Math", "7A Computer", "9D Math"],
        Friday: ["", "7A Math", "Free", "6D Math", "Free", "BREAK", "Free", "Pre-9D Math", "", ""]
      }
    },
    {
      name: "Ms Maida",
      weeklyLoad: 26,
      schedule: {
        Monday: ["Free", "10A P.Studies", "Free", "7A S.Studies", "Free", "BREAK", "Free", "Free", "6E S.Studies", "10C P.Studies"],
        Tuesday: ["Free", "10A P.Studies", "10C P.Studies", "Free", "6F S.Studies", "BREAK", "Free", "6B S.Studies", "6E S.Studies", "7A S.Studies"],
        Wednesday: ["Free", "10A P.Studies", "Free", "7A S.Studies", "6F S.Studies", "BREAK", "Free", "6B S.Studies", "6E S.Studies", "10C P.Studies"],
        Thursday: ["Free", "10A P.Studies", "10C P.Studies", "7A S.Studies", "6F S.Studies", "BREAK", "Free", "6B S.Studies", "6E S.Studies", "Free"],
        Friday: ["", "10A P.Studies", "10C P.Studies", "Free", "6F S.Studies", "BREAK", "Free", "6B S.Studies", "", ""]
      }
    },
    {
      name: "Ms Maria",
      weeklyLoad: 31,
      schedule: {
        Monday: ["10B Chemistry", "9C Chemistry", "6A Science", "10B Chemistry", "7B Science", "BREAK", "6C Science", "Free", "Free", "6D Science"],
        Tuesday: ["Free", "9C Chemistry", "6A Science", "10B Chemistry", "7B Science", "BREAK", "6C Science", "6D Science", "Free", "6D Science"],
        Wednesday: ["Free", "9C Chemistry", "6A Science", "10B Chemistry", "7B Science", "BREAK", "6C Science", "Free", "Free", "6D Science"],
        Thursday: ["Free", "9C Chemistry", "6A Science", "10B Chemistry", "7B Science", "BREAK", "6C Science", "Free", "Free", "6D Science"],
        Friday: ["", "9C Chemistry", "6A Science", "10B Chemistry", "7B Science", "BREAK", "6C Science", "Free", "", ""]
      }
    },
    {
      name: "New English Teacher",
      weeklyLoad: 28,
      schedule: {
        Monday: ["Free", "Free", "6B English", "7E English", "6E TQ", "BREAK", "Free", "6F TQ", "Pre-9D English", "9B English"],
        Tuesday: ["Free", "Free", "6B English", "7E English", "6E TQ", "BREAK", "Free", "6F TQ", "Pre-9D English", "9B English"],
        Wednesday: ["Pre-9D English", "Free", "6B English", "7E English", "6E TQ", "BREAK", "Free", "6F TQ", "Pre-9D English", "9B English"],
        Thursday: ["Free", "Free", "6B English", "7E English", "6E TQ", "BREAK", "Free", "6F TQ", "Pre-9D English", "9B English"],
        Friday: ["", "Free", "6B English", "7E English", "Free", "BREAK", "Free", "9B English", "", ""]
      }
    },
    {
      name: "Ms Nudrat",
      weeklyLoad: 29,
      schedule: {
        Monday: ["10C Chemistry", "6F Science", "10C Chemistry", "Pre-9D Chemistry", "9E Chemistry", "BREAK", "Free", "9D Chemistry", "Free", "7D Computer"],
        Tuesday: ["10C Chemistry", "6F Science", "Free", "Pre-9D Chemistry", "9E Chemistry", "BREAK", "Free", "9D Chemistry", "Free", "Free"],
        Wednesday: ["10C Chemistry", "6F Science", "10C Chemistry", "Pre-9D Chemistry", "9E Chemistry", "BREAK", "Free", "9D Chemistry", "Free", "7D Computer"],
        Thursday: ["10C Chemistry", "6F Science", "Free", "Pre-9D Chemistry", "9E Chemistry", "BREAK", "Free", "9D Chemistry", "Free", "7D Computer"],
        Friday: ["", "6F Science", "Free", "Pre-9D Chemistry", "9E Chemistry", "BREAK", "Free", "9D Chemistry", "", ""]
      }
    },
    {
      name: "Mr Qari Tahir",
      weeklyLoad: 27,
      schedule: {
        Monday: ["9C TQ", "Free", "10A TQ", "Free", "Pre-9C Islamiat", "BREAK", "Pre-9B Islamiat", "Free", "9C TQ", "9C Islamiat"],
        Tuesday: ["Pre-9B Islamiat", "Free", "Pre-9C Islamiat", "10A TQ", "Free", "BREAK", "Free", "Free", "Pre-9B TQ", "9C Islamiat"],
        Wednesday: ["9C Islamiat", "Free", "9C Islamiat", "9C TQ", "Free", "BREAK", "Pre-9B Islamiat", "Pre-9B TQ", "Pre-9B TQ", "Free"],
        Thursday: ["9C TQ", "Free", "Pre-9C Islamiat", "10A TQ", "Pre-9C Islamiat", "BREAK", "Pre-9B Islamiat", "Free", "9C Islamiat", "Free"],
        Friday: ["", "Free", "Pre-9C Islamiat", "10A TQ", "Free", "BREAK", "Pre-9B Islamiat", "Pre-9B TQ", "", ""]
      }
    },
    {
      name: "Ms Rehana",
      weeklyLoad: 26,
      schedule: {
        Monday: ["Free", "6E Urdu", "10B Urdu", "Free", "7E Urdu", "BREAK", "9E Urdu", "Free", "7E Urdu", "7E Islamiat"],
        Tuesday: ["Free", "6E Urdu", "10B Urdu", "6E Islamiat", "Free", "BREAK", "9E Urdu", "7E Islamiat", "7E Urdu", "Free"],
        Wednesday: ["Free", "6E Urdu", "10B Urdu", "6E Islamiat", "Free", "BREAK", "9E Urdu", "Free", "7E Urdu", "Free"],
        Thursday: ["10B Urdu", "6E Urdu", "10B Urdu", "6E Islamiat", "Free", "BREAK", "9E Urdu", "Free", "7E Urdu", "Free"],
        Friday: ["", "6E Urdu", "7E Islamiat", "Free", "Free", "BREAK", "9E Urdu", "Free", "", ""]
      }
    },
    {
      name: "Ms Rizwana Kousar",
      weeklyLoad: 29,
      schedule: {
        Monday: ["Free", "10D Urdu", "7E TQ", "Pre-9E Urdu", "Free", "BREAK", "6D Urdu", "Free", "9A Urdu", "Pre-9A Urdu"],
        Tuesday: ["Free", "10D Urdu", "Free", "Pre-9E Urdu", "Free", "BREAK", "6D Urdu", "Free", "9A Urdu", "Pre-9A Urdu"],
        Wednesday: ["Pre-9A Urdu", "10D Urdu", "Free", "Pre-9E Urdu", "7E TQ", "BREAK", "6D Urdu", "Free", "9A Urdu", "Pre-9A Urdu"],
        Thursday: ["9A Urdu", "10D Urdu", "Free", "Pre-9E Urdu", "7E TQ", "BREAK", "6D Urdu", "Free", "9A Urdu", "Pre-9A Urdu"],
        Friday: ["", "10D Urdu", "Free", "Pre-9E Urdu", "7E TQ", "BREAK", "6D Urdu", "Free", "", ""]
      }
    },
    {
      name: "Ms Rizwana Shaheen",
      weeklyLoad: 29,
      schedule: {
        Monday: ["Pre-9B Urdu", "7C Urdu", "Free", "Free", "6A Islamiat", "BREAK", "6A Urdu", "7C Islamiat", "Pre-9B Urdu", "6B Islamiat"],
        Tuesday: ["Free", "7C Urdu", "Free", "Free", "Free", "BREAK", "6A Urdu", "9B Urdu", "6A Islamiat", "6B Islamiat"],
        Wednesday: ["Free", "7C Urdu", "Free", "7C Islamiat", "Free", "BREAK", "6A Urdu", "9B Urdu", "6A Islamiat", "6B Islamiat"],
        Thursday: ["Pre-9B Urdu", "7C Urdu", "Free", "9B Urdu", "Free", "BREAK", "6A Urdu", "9B Urdu", "Pre-9B Urdu", "Pre-9B Urdu"],
        Friday: ["", "7C Urdu", "Free", "9B Urdu", "Free", "BREAK", "6A Urdu", "7C Islamiat", "", ""]
      }
    },
    {
      name: "Ms Sabiha",
      weeklyLoad: 30,
      schedule: {
        Monday: ["Free", "Pre-9E English", "10D English", "7B English", "Free", "BREAK", "7C English", "9E English", "7D English", "Free"],
        Tuesday: ["Free", "Pre-9E English", "10D English", "7B English", "Free", "BREAK", "7C English", "9E English", "7D English", "Free"],
        Wednesday: ["Free", "Pre-9E English", "10D English", "7B English", "Free", "BREAK", "7C English", "9E English", "7D English", "Free"],
        Thursday: ["Free", "Pre-9E English", "Free", "7B English", "Free", "BREAK", "7C English", "9E English", "7D English", "10D English"],
        Friday: ["", "Pre-9E English", "10D English", "7B English", "7D English", "BREAK", "7C English", "9E English", "", ""]
      }
    },
    {
      name: "Ms Sajeela",
      weeklyLoad: 30,
      schedule: {
        Monday: ["Free", "Pre-9D Urdu", "9C Urdu", "10C Urdu", "6D Islamiat", "BREAK", "10C Urdu", "6D TQ", "6C Islamiat", "Pre-9C Urdu"],
        Tuesday: ["Free", "Pre-9D Urdu", "9C Urdu", "Free", "6D Islamiat", "BREAK", "Free", "Free", "6D TQ", "Pre-9C Urdu"],
        Wednesday: ["Pre-9C Urdu", "Pre-9D Urdu", "Free", "10C Urdu", "Free", "BREAK", "Free", "Free", "6C Islamiat", "9C Urdu"],
        Thursday: ["Free", "Pre-9D Urdu", "9C Urdu", "10C Urdu", "6D Islamiat", "BREAK", "Free", "6D TQ", "6C Islamiat", "Pre-9C Urdu"],
        Friday: ["", "Pre-9D Urdu", "9C Urdu", "10C Urdu", "Pre-9C Urdu", "BREAK", "Free", "6D TQ", "", ""]
      }
    },
    {
      name: "Ms Samiya",
      weeklyLoad: 30,
      schedule: {
        Monday: ["9E TQ", "Free", "9D Islamiat", "Free", "Pre-9A TQ", "BREAK", "9D TQ", "10B TQ", "10B TQ", "Free"],
        Tuesday: ["9D Islamiat", "Free", "9D Islamiat", "Free", "Pre-9A TQ", "BREAK", "9D TQ", "Pre-9E Islamiat", "9E TQ", "Pre-9E TQ"],
        Wednesday: ["10B TQ", "Free", "9D Islamiat", "Free", "Pre-9A TQ", "BREAK", "9D TQ", "Pre-9E Islamiat", "9E TQ", "Pre-9E TQ"],
        Thursday: ["Pre-9E Islamiat", "Free", "Pre-9E TQ", "Free", "10B TQ", "BREAK", "9D TQ", "Pre-9E Islamiat", "9E TQ", "Pre-9E TQ"],
        Friday: ["", "Free", "9D Islamiat", "Free", "Pre-9A TQ", "BREAK", "Free", "Pre-9E Islamiat", "", ""]
      }
    },
    {
      name: "Mr Shahbaz",
      weeklyLoad: 18,
      schedule: {
        Monday: ["Free", "Free", "Free", "Free", "6C Computer", "BREAK", "6B Computer", "Free", "Free", "6E Computer"],
        Tuesday: ["Free", "Free", "Free", "Free", "6C Computer", "BREAK", "Free", "Free", "Free", "6E Computer"],
        Wednesday: ["Free", "Free", "6D Computer", "6A Computer", "6B Computer", "BREAK", "Free", "6D Computer", "6F Computer", "6E Computer"],
        Thursday: ["Free", "Free", "Free", "6A Computer", "6C Computer", "BREAK", "Free", "Free", "6D Computer", "6F Computer"],
        Friday: ["", "Free", "Free", "6A Computer", "6B Computer", "BREAK", "Free", "6F Computer", "", ""]
      }
    },
    {
      name: "Ms Shahnaz",
      weeklyLoad: 28,
      schedule: {
        Monday: ["Free", "6B Urdu", "7B Urdu", "6C Urdu", "9D Urdu", "BREAK", "Free", "7A TQ", "7B Urdu", "7C TQ"],
        Tuesday: ["Free", "6B Urdu", "Free", "6C Urdu", "9D Urdu", "BREAK", "Free", "7A TQ", "7B Urdu", "7C TQ"],
        Wednesday: ["Free", "6B Urdu", "Free", "6C Urdu", "9D Urdu", "BREAK", "Free", "7A TQ", "7B Urdu", "7C TQ"],
        Thursday: ["Free", "6B Urdu", "Free", "6C Urdu", "9D Urdu", "BREAK", "Free", "7A TQ", "7B Urdu", "7C TQ"],
        Friday: ["", "6B Urdu", "Free", "6C Urdu", "9D Urdu", "BREAK", "Free", "Free", "", ""]
      }
    },
    {
      name: "Ms Sidra",
      weeklyLoad: 29,
      schedule: {
        Monday: ["Pre-9A Islamiat", "7B TQ", "Free", "10D TQ", "Pre-9D TQ", "BREAK", "9A Islamiat", "7B Islamiat", "Pre-9A Islamiat", "Free"],
        Tuesday: ["Free", "7B TQ", "Free", "10D TQ", "Pre-9D TQ", "BREAK", "9A Islamiat", "9A TQ", "Pre-9A Islamiat", "Free"],
        Wednesday: ["9A TQ", "7B TQ", "Free", "10D TQ", "Pre-9D TQ", "BREAK", "9A Islamiat", "7B Islamiat", "Pre-9A Islamiat", "Free"],
        Thursday: ["Free", "7B TQ", "Free", "10D TQ", "Pre-9D TQ", "BREAK", "9A Islamiat", "9A TQ", "Pre-9A Islamiat", "Free"],
        Friday: ["", "7B Islamiat", "Free", "Free", "Free", "BREAK", "9A Islamiat", "9A TQ", "", ""]
      }
    },
    {
      name: "Mr Talib",
      weeklyLoad: 18,
      schedule: {
        Monday: ["Free", "Free", "Free", "6A S.D", "Free", "BREAK", "Free", "6E S.D", "7A Sports", "Free"],
        Tuesday: ["Free", "Free", "Free", "6A Sports", "6B Sports", "BREAK", "10D Sports", "Free", "6F S.D", "Free"],
        Wednesday: ["Free", "Free", "7E Sports", "10A Sports", "6C Sports", "BREAK", "Free", "Free", "Free", "Free"],
        Thursday: ["Free", "Free", "6D S.D", "Free", "6B S.D", "BREAK", "10C Sports", "7B Sports", "Free", "Free"],
        Friday: ["", "Free", "10B Sports", "7C Sports", "6C S.D", "BREAK", "Free", "7D Sports", "", ""]
      }
    },
    {
      name: "Mr Umair",
      weeklyLoad: 30,
      schedule: {
        Monday: ["Free", "10B Computer", "Free", "Free", "9C Computer", "BREAK", "10D Computer", "Pre-9C Computer", "9D Computer", "Pre-9D Computer"],
        Tuesday: ["Free", "10B Computer", "Free", "Free", "9C Computer", "BREAK", "Free", "Pre-9C Computer", "9D Computer", "Pre-9D Computer"],
        Wednesday: ["Free", "10B Computer", "Free", "Free", "9C Computer", "BREAK", "10D Computer", "Pre-9C Computer", "9D Computer", "Pre-9D Computer"],
        Thursday: ["Pre-9D Computer", "10B Computer", "10D Computer", "Free", "9C Computer", "BREAK", "10D Computer", "Pre-9C Computer", "9D Computer", "Pre-9D Computer"],
        Friday: ["", "10B Computer", "Free", "10D Computer", "9C Computer", "BREAK", "9D Computer", "Pre-9C Computer", "", ""]
      }
    },
    {
      name: "Ms Uzma",
      weeklyLoad: 23,
      schedule: {
        Monday: ["Free", "Free", "6C TQ", "Free", "6B Art", "BREAK", "Free", "6A TQ", "6F Art", "7B Art"],
        Tuesday: ["Free", "Free", "6C TQ", "Free", "7E Art", "BREAK", "6B TQ", "6A TQ", "Free", "7D Art"],
        Wednesday: ["Free", "Free", "6C TQ", "Free", "6D Art", "BREAK", "6B TQ", "6A TQ", "Free", "Free"],
        Thursday: ["Free", "Free", "6C TQ", "7C Art", "Free", "BREAK", "6B TQ", "6A TQ", "Free", "6E Art"],
        Friday: ["", "Free", "6C Art", "Free", "7A Art", "BREAK", "6B TQ", "6A Art", "", ""]
      }
    },
    {
      name: "Mr Waseem Abbas",
      weeklyLoad: 28,
      schedule: {
        Monday: ["10D Physics", "Pre-9A Physics", "9E Physics", "Free", "10B Physics", "BREAK", "9B Physics", "Free", "9B Physics", "10D Physics"],
        Tuesday: ["Pre-9A Physics", "Pre-9A Physics", "9E Physics", "Free", "10B Physics", "BREAK", "9B Physics", "Free", "Free", "10D Physics"],
        Wednesday: ["10D Physics", "Pre-9A Physics", "9E Physics", "Free", "10B Physics", "BREAK", "9B Physics", "Free", "Free", "10D Physics"],
        Thursday: ["9E Physics", "Pre-9A Physics", "9E Physics", "Free", "Free", "BREAK", "9B Physics", "Free", "10B Physics", "Free"],
        Friday: ["", "Pre-9A Physics", "9E Physics", "Free", "10B Physics", "BREAK", "9B Physics", "Free", "", ""]
      }
    },
    {
      name: "Mr Waseem Israr",
      weeklyLoad: 30,
      schedule: {
        Monday: ["Free", "Pre-9B Chemistry", "9A Chemistry", "Pre-9C Chemistry", "7D TQ", "BREAK", "Free", "10D Chemistry", "Pre-9E Chemistry", "Free"],
        Tuesday: ["Pre-9E Chemistry", "Pre-9B Chemistry", "9A Chemistry", "Pre-9C Chemistry", "7D TQ", "BREAK", "Free", "10D Chemistry", "Pre-9E Chemistry", "Free"],
        Wednesday: ["Free", "Pre-9B Chemistry", "9A Chemistry", "Pre-9C Chemistry", "7D TQ", "BREAK", "Free", "10D Chemistry", "Pre-9E Chemistry", "Free"],
        Thursday: ["Pre-9C Chemistry", "Pre-9B Chemistry", "9A Chemistry", "Free", "7D TQ", "BREAK", "Free", "10D Chemistry", "Pre-9E Chemistry", "Free"],
        Friday: ["", "Pre-9B Chemistry", "9A Chemistry", "Pre-9C Chemistry", "Free", "BREAK", "10D Chemistry", "10D Chemistry", "", ""]
      }
    },
    {
      name: "Ms Zartashia",
      weeklyLoad: 29,
      schedule: {
        Monday: ["Free", "7D Urdu", "Free", "6F Urdu", "10A Urdu", "BREAK", "7A Urdu", "7D Islamiat", "Free", "6F Islamiat"],
        Tuesday: ["Free", "7D Urdu", "7A Islamiat", "6F Urdu", "10A Urdu", "BREAK", "7A Urdu", "7D Islamiat", "Free", "6F Islamiat"],
        Wednesday: ["Free", "7D Urdu", "7A Islamiat", "6F Urdu", "10A Urdu", "BREAK", "7A Urdu", "7D Islamiat", "10A Urdu", "6F Islamiat"],
        Thursday: ["Free", "7D Urdu", "7A Islamiat", "6F Urdu", "Free", "BREAK", "7A Urdu", "Free", "Free", "Free"],
        Friday: ["", "7D Urdu", "Free", "6F Urdu", "10A Urdu", "BREAK", "7A Urdu", "Free", "", ""]
      }
    }
  ],
  adjustmentsNote: "Lesson positions are exactly as in the original class-wise PDF. Break position is after Period 4 (11:25-11:45 Mon-Thu, 11:05-11:30 Fri). Total weekly lessons: 1,006."
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TIMETABLE_DATA;
}

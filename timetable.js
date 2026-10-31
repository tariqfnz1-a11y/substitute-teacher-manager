/**
 * Teacher-wise Timetable Data Session 2026-27
 * School: The Trust School - ATH Campus
 */

export const timetableData = {
  school: "THE TRUST SCHOOL | ATH CAMPUS",
  session: "2026-27",
  status: "Corrected",
  bellTimes: {
    monToThu: {
      assembly: "8:45 - 8:55",
      zeroPeriod: "8:55 - 9:25",
      periods1To4: "9:25 - 11:25",
      break: "11:25 - 11:45",
      periods5To8: "11:45 - 1:35 (P7, P8 are 25 min)",
      dispersal: "1:35"
    },
    friday: {
      assembly: "8:45 - 8:55",
      p1: "8:55 - 9:30",
      p2: "9:30 - 10:05",
      p3To4: "10:05 - 11:05",
      break: "11:05 - 11:30",
      p5To6: "11:30 - 12:30",
      dispersal: "12:30"
    }
  },
  teachers: [
    {
      name: "Mr Ahsan Ali",
      weeklyLoad: 27,
      schedule: {
        Monday: { zero: "Free", p1: "9A Math", p2: "Pre-9A Math", p3: "6B Math", p4: "Free", break: "BREAK", p5: "10B Math", p6: "6B Math", p7: "Free", p8: "Free" },
        Tuesday: { zero: "9A Math", p1: "9A Math", p2: "Pre-9A Math", p3: "6B Math", p4: "Free", break: "BREAK", p5: "10B Math", p6: "Free", p7: "Free", p8: "7B Computer" },
        Wednesday: { zero: "Free", p1: "9A Math", p2: "Pre-9A Math", p3: "6B Math", p4: "Free", break: "BREAK", p5: "10B Math", p6: "Free", p7: "10B Math", p8: "7B Computer" },
        Thursday: { zero: "Pre-9A Math", p1: "9A Math", p2: "Pre-9A Math", p3: "6B Math", p4: "Free", break: "BREAK", p5: "10B Math", p6: "Free", p7: "Free", p8: "7B Computer" },
        Friday: { zero: "", p1: "9A Math", p2: "Pre-9A Math", p3: "6B Math", p4: "Free", break: "BREAK", p5: "10B Math", p6: "Free", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Ahsan Saddique",
      weeklyLoad: 27,
      schedule: {
        Monday: { zero: "Free", p1: "9E Math", p2: "7C Math", p3: "7C Math", p4: "Free", break: "BREAK", p5: "7D Math", p6: "Free", p7: "10A Math", p8: "Free" },
        Tuesday: { zero: "9E Math", p1: "9E Math", p2: "7C Math", p3: "Free", p4: "Free", break: "BREAK", p5: "7D Math", p6: "7C Computer", p7: "10A Math", p8: "Free" },
        Wednesday: { zero: "10A Math", p1: "9E Math", p2: "7C Math", p3: "7D Math", p4: "Free", break: "BREAK", p5: "7D Math", p6: "7C Computer", p7: "Free", p8: "10A Math" },
        Thursday: { zero: "10A Math", p1: "9E Math", p2: "7C Math", p3: "Free", p4: "10A Math", break: "BREAK", p5: "7D Math", p6: "7C Computer", p7: "Free", p8: "Free" },
        Friday: { zero: "", p1: "9E Math", p2: "7C Math", p3: "Free", p4: "Free", break: "BREAK", p5: "7D Math", p6: "Free", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Amal",
      weeklyLoad: 25,
      schedule: {
        Monday: { zero: "9A Biology", p1: "Free", p2: "Free", p3: "Pre-9A Biology", p4: "7A Science", break: "BREAK", p5: "6E Science", p6: "10A Biology", p7: "Free", p8: "9A Biology" },
        Tuesday: { zero: "Free", p1: "Free", p2: "Free", p3: "Pre-9A Biology", p4: "7A Science", break: "BREAK", p5: "6E Science", p6: "10A Biology", p7: "Free", p8: "9A Biology" },
        Wednesday: { zero: "Free", p1: "Free", p2: "Free", p3: "Pre-9A Biology", p4: "7A Science", break: "BREAK", p5: "6E Science", p6: "10A Biology", p7: "Free", p8: "9A Biology" },
        Thursday: { zero: "Free", p1: "Free", p2: "Free", p3: "Pre-9A Biology", p4: "7A Science", break: "BREAK", p5: "6E Science", p6: "10A Biology", p7: "Free", p8: "9A Biology" },
        Friday: { zero: "", p1: "Free", p2: "7A Science", p3: "Pre-9A Biology", p4: "Free", break: "BREAK", p5: "6E Science", p6: "10A Biology", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Andleeb",
      weeklyLoad: 25,
      schedule: {
        Monday: { zero: "Free", p1: "Free", p2: "Pre-9B Computer", p3: "9E Computer", p4: "9B Computer", break: "BREAK", p5: "Pre-9E Computer", p6: "10C Computer", p7: "Free", p8: "Free" },
        Tuesday: { zero: "Free", p1: "Free", p2: "Pre-9B Computer", p3: "9E Computer", p4: "9B Computer", break: "BREAK", p5: "Pre-9E Computer", p6: "10C Computer", p7: "Free", p8: "Free" },
        Wednesday: { zero: "Free", p1: "Free", p2: "Pre-9B Computer", p3: "9E Computer", p4: "9B Computer", break: "BREAK", p5: "Pre-9E Computer", p6: "10C Computer", p7: "Free", p8: "Free" },
        Thursday: { zero: "Free", p1: "Free", p2: "Pre-9B Computer", p3: "9E Computer", p4: "9B Computer", break: "BREAK", p5: "Pre-9E Computer", p6: "10C Computer", p7: "Free", p8: "Free" },
        Friday: { zero: "", p1: "Free", p2: "Pre-9B Computer", p3: "9E Computer", p4: "9B Computer", break: "BREAK", p5: "Pre-9E Computer", p6: "10C Computer", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Asia",
      weeklyLoad: 29,
      schedule: {
        Monday: { zero: "Free", p1: "6C English", p2: "6E English", p3: "9D English", p4: "Free", break: "BREAK", p5: "Pre-9C English", p6: "Free", p7: "Free", p8: "6C S.Studies" },
        Tuesday: { zero: "Free", p1: "6C English", p2: "6E English", p3: "9D English", p4: "Free", break: "BREAK", p5: "Pre-9C English", p6: "10B English", p7: "10B English", p8: "6C S.Studies" },
        Wednesday: { zero: "Free", p1: "6C English", p2: "6E English", p3: "9D English", p4: "Pre-9C English", break: "BREAK", p5: "Free", p6: "10B English", p7: "Free", p8: "6C S.Studies" },
        Thursday: { zero: "Free", p1: "6C English", p2: "6E English", p3: "9D English", p4: "Free", break: "BREAK", p5: "Pre-9C English", p6: "10B English", p7: "Free", p8: "6C S.Studies" },
        Friday: { zero: "", p1: "6C English", p2: "6E English", p3: "9D English", p4: "Free", break: "BREAK", p5: "Pre-9C English", p6: "10B English", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Asif Ali",
      weeklyLoad: 30,
      schedule: {
        Monday: { zero: "Free", p1: "Pre-9C Math", p2: "Free", p3: "9C Math", p4: "6F Math", break: "BREAK", p5: "6F Math", p6: "6C Math", p7: "6A Math", p8: "Free" },
        Tuesday: { zero: "9C Math", p1: "Pre-9C Math", p2: "Free", p3: "9C Math", p4: "6A Math", break: "BREAK", p5: "6F Math", p6: "6C Math", p7: "6C Math", p8: "Free" },
        Wednesday: { zero: "Free", p1: "Pre-9C Math", p2: "Pre-9C Math", p3: "Free", p4: "6A Math", break: "BREAK", p5: "6F Math", p6: "6C Math", p7: "Free", p8: "Free" },
        Thursday: { zero: "Free", p1: "Pre-9C Math", p2: "Free", p3: "9C Math", p4: "6A Math", break: "BREAK", p5: "6F Math", p6: "6C Math", p7: "6A Math", p8: "9C Math" },
        Friday: { zero: "", p1: "Pre-9C Math", p2: "Free", p3: "9C Math", p4: "6A Math", break: "BREAK", p5: "6F Math", p6: "6C Math", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Asif Majeed",
      weeklyLoad: 27,
      schedule: {
        Monday: { zero: "Pre-9E Math", p1: "10C Math", p2: "Free", p3: "6E Math", p4: "Free", break: "BREAK", p5: "7E Math", p6: "Pre-9E Math", p7: "Free", p8: "Free" },
        Tuesday: { zero: "Free", p1: "10C Math", p2: "Free", p3: "Free", p4: "Pre-9E Math", break: "BREAK", p5: "7E Math", p6: "6E Math", p7: "10C Math", p8: "7E Computer" },
        Wednesday: { zero: "Free", p1: "10C Math", p2: "Free", p3: "Free", p4: "Pre-9E Math", break: "BREAK", p5: "7E Math", p6: "6E Math", p7: "Free", p8: "7E Computer" },
        Thursday: { zero: "Free", p1: "10C Math", p2: "7E Math", p3: "Free", p4: "Pre-9E Math", break: "BREAK", p5: "7E Math", p6: "6E Math", p7: "Free", p8: "7E Computer" },
        Friday: { zero: "", p1: "10C Math", p2: "Free", p3: "6E Math", p4: "Pre-9E Math", break: "BREAK", p5: "7E Math", p6: "6E Math", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Farkhanda",
      weeklyLoad: 29,
      schedule: {
        Monday: { zero: "10A English", p1: "6D English", p2: "6D S.Studies", p3: "Free", p4: "Free", break: "BREAK", p5: "9C English", p6: "Pre-9B English", p7: "6D S.Studies", p8: "7A English" },
        Tuesday: { zero: "Free", p1: "6D English", p2: "10A English", p3: "7A English", p4: "Free", break: "BREAK", p5: "9C English", p6: "Pre-9B English", p7: "Free", p8: "Pre-9B English" },
        Wednesday: { zero: "Pre-9B English", p1: "6D English", p2: "10A English", p3: "Free", p4: "Free", break: "BREAK", p5: "9C English", p6: "Free", p7: "6D S.Studies", p8: "7A English" },
        Thursday: { zero: "Free", p1: "6D English", p2: "10A English", p3: "Free", p4: "Free", break: "BREAK", p5: "9C English", p6: "Pre-9B English", p7: "Free", p8: "7A English" },
        Friday: { zero: "", p1: "6D English", p2: "10A English", p3: "7A English", p4: "6D S.Studies", break: "BREAK", p5: "9C English", p6: "Free", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Fatima",
      weeklyLoad: 29,
      schedule: {
        Monday: { zero: "9D Physics", p1: "9D Physics", p2: "Pre-9E Physics", p3: "Free", p4: "9A Physics", break: "BREAK", p5: "Free", p6: "9A Physics", p7: "Pre-9C Physics", p8: "Pre-9E Physics" },
        Tuesday: { zero: "Pre-9C Physics", p1: "9D Physics", p2: "Pre-9E Physics", p3: "Free", p4: "9A Physics", break: "BREAK", p5: "10C Physics", p6: "Free", p7: "Pre-9C Physics", p8: "10C Physics" },
        Wednesday: { zero: "Pre-9E Physics", p1: "9D Physics", p2: "Pre-9E Physics", p3: "Free", p4: "9A Physics", break: "BREAK", p5: "10C Physics", p6: "Free", p7: "Pre-9C Physics", p8: "Pre-9C Physics" },
        Thursday: { zero: "Free", p1: "9D Physics", p2: "Free", p3: "Free", p4: "9A Physics", break: "BREAK", p5: "Free", p6: "Free", p7: "Pre-9C Physics", p8: "10C Physics" },
        Friday: { zero: "", p1: "9D Physics", p2: "Pre-9E Physics", p3: "Free", p4: "9A Physics", break: "BREAK", p5: "10C Physics", p6: "Free", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Fozia",
      weeklyLoad: 29,
      schedule: {
        Monday: { zero: "Free", p1: "6A English", p2: "6F English", p3: "9A English", p4: "10C English", break: "BREAK", p5: "Pre-9A English", p6: "Free", p7: "Free", p8: "6A S.Studies" },
        Tuesday: { zero: "Free", p1: "6A English", p2: "6F English", p3: "9A English", p4: "10C English", break: "BREAK", p5: "Pre-9A English", p6: "Free", p7: "Free", p8: "6A S.Studies" },
        Wednesday: { zero: "Free", p1: "6A English", p2: "6F English", p3: "9A English", p4: "Free", break: "BREAK", p5: "Pre-9A English", p6: "Free", p7: "10C English", p8: "6A S.Studies" },
        Thursday: { zero: "Free", p1: "6A English", p2: "6F English", p3: "9A English", p4: "Free", break: "BREAK", p5: "Pre-9A English", p6: "Free", p7: "10C English", p8: "6A S.Studies" },
        Friday: { zero: "", p1: "6A English", p2: "6F English", p3: "9A English", p4: "10C English", break: "BREAK", p5: "Pre-9A English", p6: "Free", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Hafiz Asif",
      weeklyLoad: 27,
      schedule: {
        Monday: { zero: "Pre-9C TQ", p1: "Free", p2: "Pre-9C TQ", p3: "9B Islamiat", p4: "Free", break: "BREAK", p5: "Pre-9D Islamiat", p6: "Free", p7: "10C TQ", p8: "9E Islamiat" },
        Tuesday: { zero: "Free", p1: "Free", p2: "9B TQ", p3: "10C TQ", p4: "Free", break: "BREAK", p5: "Pre-9D Islamiat", p6: "Free", p7: "9B Islamiat", p8: "9E Islamiat" },
        Wednesday: { zero: "9E Islamiat", p1: "Free", p2: "9B TQ", p3: "9B Islamiat", p4: "10C TQ", break: "BREAK", p5: "Pre-9C TQ", p6: "Free", p7: "9B Islamiat", p8: "9E Islamiat" },
        Thursday: { zero: "Free", p1: "Free", p2: "9B TQ", p3: "Pre-9C TQ", p4: "10C TQ", break: "BREAK", p5: "Pre-9D Islamiat", p6: "Free", p7: "9B Islamiat", p8: "9E Islamiat" },
        Friday: { zero: "", p1: "Free", p2: "9B TQ", p3: "Free", p4: "Pre-9D Islamiat", break: "BREAK", p5: "Pre-9D Islamiat", p6: "Free", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Hamza",
      weeklyLoad: 28,
      schedule: {
        Monday: { zero: "Pre-9D Physics", p1: "7E Science", p2: "Pre-9D Physics", p3: "Free", p4: "Pre-9B Physics", break: "BREAK", p5: "Free", p6: "9C Physics", p7: "Free", p8: "10A Physics" },
        Tuesday: { zero: "10A Physics", p1: "7E Science", p2: "Pre-9D Physics", p3: "Free", p4: "Pre-9B Physics", break: "BREAK", p5: "Free", p6: "9C Physics", p7: "Free", p8: "10A Physics" },
        Wednesday: { zero: "7E Science", p1: "Free", p2: "Pre-9D Physics", p3: "Free", p4: "Pre-9B Physics", break: "BREAK", p5: "Free", p6: "9C Physics", p7: "9C Physics", p8: "Pre-9B Physics" },
        Thursday: { zero: "7E Science", p1: "Free", p2: "Pre-9D Physics", p3: "Free", p4: "Pre-9B Physics", break: "BREAK", p5: "Free", p6: "9C Physics", p7: "10A Physics", p8: "10A Physics" },
        Friday: { zero: "", p1: "7E Science", p2: "Pre-9D Physics", p3: "Free", p4: "Pre-9B Physics", break: "BREAK", p5: "Free", p6: "9C Physics", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Imtiaz",
      weeklyLoad: 31,
      schedule: {
        Monday: { zero: "9B Chemistry", p1: "Free", p2: "7D Science", p3: "10A Chemistry", p4: "7C Science", break: "BREAK", p5: "10A Chemistry", p6: "Pre-9A Chemistry", p7: "6B Science", p8: "Free" },
        Tuesday: { zero: "9B Chemistry", p1: "Free", p2: "7D Science", p3: "9B Chemistry", p4: "7C Science", break: "BREAK", p5: "10A Chemistry", p6: "Pre-9A Chemistry", p7: "6B Science", p8: "Free" },
        Wednesday: { zero: "9B Chemistry", p1: "Free", p2: "7D Science", p3: "Free", p4: "7C Science", break: "BREAK", p5: "10A Chemistry", p6: "Pre-9A Chemistry", p7: "6B Science", p8: "Free" },
        Thursday: { zero: "9B Chemistry", p1: "Free", p2: "7D Science", p3: "Free", p4: "7C Science", break: "BREAK", p5: "10A Chemistry", p6: "Pre-9A Chemistry", p7: "6B Science", p8: "6B Science" },
        Friday: { zero: "", p1: "Free", p2: "7D Science", p3: "Free", p4: "7C Science", break: "BREAK", p5: "10A Chemistry", p6: "Pre-9A Chemistry", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Ismat",
      weeklyLoad: 24,
      schedule: {
        Monday: { zero: "Free", p1: "9B Math", p2: "9B Math", p3: "Pre-9B Math", p4: "Free", break: "BREAK", p5: "7B Math", p6: "Free", p7: "10D Math", p8: "Pre-9B Math" },
        Tuesday: { zero: "10D Math", p1: "9B Math", p2: "7B Math", p3: "Pre-9B Math", p4: "Free", break: "BREAK", p5: "7B Math", p6: "Free", p7: "10D Math", p8: "Free" },
        Wednesday: { zero: "Free", p1: "9B Math", p2: "Free", p3: "Pre-9B Math", p4: "Free", break: "BREAK", p5: "7B Math", p6: "Free", p7: "10D Math", p8: "Free" },
        Thursday: { zero: "10D Math", p1: "9B Math", p2: "Free", p3: "Pre-9B Math", p4: "Free", break: "BREAK", p5: "7B Math", p6: "Free", p7: "10D Math", p8: "Free" },
        Friday: { zero: "", p1: "9B Math", p2: "Free", p3: "Pre-9B Math", p4: "Free", break: "BREAK", p5: "Free", p6: "7B Math", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Kaleem",
      weeklyLoad: 18,
      schedule: {
        Monday: { zero: "Free", p1: "Free", p2: "Free", p3: "Free", p4: "Pre-9E Sports", break: "BREAK", p5: "Free", p6: "9B Sports", p7: "9E Sports", p8: "Free" },
        Tuesday: { zero: "Free", p1: "Free", p2: "7E S.D", p3: "7C S.D", p4: "Pre-9C Sports", break: "BREAK", p5: "Pre-9B Sports", p6: "7B S.D", p7: "9C Sports", p8: "Free" },
        Wednesday: { zero: "Free", p1: "Free", p2: "Free", p3: "Free", p4: "Free", break: "BREAK", p5: "Pre-9D Sports", p6: "9A Sports", p7: "Free", p8: "Free" },
        Thursday: { zero: "Free", p1: "Free", p2: "9D Sports", p3: "Free", p4: "Pre-9A Sports", break: "BREAK", p5: "Free", p6: "7D S.D", p7: "6F Sports", p8: "Free" },
        Friday: { zero: "", p1: "Free", p2: "6D Sports", p3: "Free", p4: "6E Sports", break: "BREAK", p5: "Free", p6: "7A S.D", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Kamran",
      weeklyLoad: 26,
      schedule: {
        Monday: { zero: "Free", p1: "Free", p2: "Free", p3: "7D S.Studies", p4: "10D P.Studies", break: "BREAK", p5: "Free", p6: "7E S.Studies", p7: "7C S.Studies", p8: "10B P.Studies" },
        Tuesday: { zero: "10B P.Studies", p1: "Free", p2: "Free", p3: "7D S.Studies", p4: "10D P.Studies", break: "BREAK", p5: "Free", p6: "Free", p7: "7C S.Studies", p8: "10B P.Studies" },
        Wednesday: { zero: "Free", p1: "Free", p2: "7B S.Studies", p3: "Free", p4: "10D P.Studies", break: "BREAK", p5: "Free", p6: "7E S.Studies", p7: "7C S.Studies", p8: "10B P.Studies" },
        Thursday: { zero: "Free", p1: "Free", p2: "7B S.Studies", p3: "7D S.Studies", p4: "10D P.Studies", break: "BREAK", p5: "Free", p6: "7E S.Studies", p7: "7C S.Studies", p8: "10B P.Studies" },
        Friday: { zero: "", p1: "Free", p2: "7B S.Studies", p3: "7D S.Studies", p4: "10D P.Studies", break: "BREAK", p5: "7B S.Studies", p6: "7E S.Studies", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Khurram",
      weeklyLoad: 27,
      schedule: {
        Monday: { zero: "Free", p1: "7A Math", p2: "7A Math", p3: "6D Math", p4: "Free", break: "BREAK", p5: "Free", p6: "Pre-9D Math", p7: "Free", p8: "9D Math" },
        Tuesday: { zero: "Pre-9D Math", p1: "7A Math", p2: "6D Math", p3: "6D Math", p4: "Free", break: "BREAK", p5: "Free", p6: "Pre-9D Math", p7: "7A Computer", p8: "9D Math" },
        Wednesday: { zero: "9D Math", p1: "7A Math", p2: "Free", p3: "6D Math", p4: "Free", break: "BREAK", p5: "Free", p6: "Pre-9D Math", p7: "7A Computer", p8: "9D Math" },
        Thursday: { zero: "9D Math", p1: "7A Math", p2: "Free", p3: "6D Math", p4: "Free", break: "BREAK", p5: "Free", p6: "Pre-9D Math", p7: "7A Computer", p8: "9D Math" },
        Friday: { zero: "", p1: "7A Math", p2: "Free", p3: "6D Math", p4: "Free", break: "BREAK", p5: "Free", p6: "Pre-9D Math", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Maida",
      weeklyLoad: 26,
      schedule: {
        Monday: { zero: "Free", p1: "10A P.Studies", p2: "Free", p3: "7A S.Studies", p4: "Free", break: "BREAK", p5: "Free", p6: "Free", p7: "6E S.Studies", p8: "10C P.Studies" },
        Tuesday: { zero: "Free", p1: "10A P.Studies", p2: "10C P.Studies", p3: "Free", p4: "6F S.Studies", break: "BREAK", p5: "Free", p6: "6B S.Studies", p7: "6E S.Studies", p8: "7A S.Studies" },
        Wednesday: { zero: "Free", p1: "10A P.Studies", p2: "Free", p3: "7A S.Studies", p4: "6F S.Studies", break: "BREAK", p5: "Free", p6: "6B S.Studies", p7: "6E S.Studies", p8: "10C P.Studies" },
        Thursday: { zero: "Free", p1: "10A P.Studies", p2: "10C P.Studies", p3: "7A S.Studies", p4: "6F S.Studies", break: "BREAK", p5: "Free", p6: "6B S.Studies", p7: "6E S.Studies", p8: "Free" },
        Friday: { zero: "", p1: "10A P.Studies", p2: "10C P.Studies", p3: "Free", p4: "6F S.Studies", break: "BREAK", p5: "Free", p6: "6B S.Studies", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Maria",
      weeklyLoad: 31,
      schedule: {
        Monday: { zero: "10B Chemistry", p1: "9C Chemistry", p2: "6A Science", p3: "10B Chemistry", p4: "7B Science", break: "BREAK", p5: "6C Science", p6: "Free", p7: "Free", p8: "6D Science" },
        Tuesday: { zero: "Free", p1: "9C Chemistry", p2: "6A Science", p3: "10B Chemistry", p4: "7B Science", break: "BREAK", p5: "6C Science", p6: "6D Science", p7: "Free", p8: "6D Science" },
        Wednesday: { zero: "Free", p1: "9C Chemistry", p2: "6A Science", p3: "10B Chemistry", p4: "7B Science", break: "BREAK", p5: "6C Science", p6: "Free", p7: "Free", p8: "6D Science" },
        Thursday: { zero: "Free", p1: "9C Chemistry", p2: "6A Science", p3: "10B Chemistry", p4: "7B Science", break: "BREAK", p5: "6C Science", p6: "Free", p7: "Free", p8: "6D Science" },
        Friday: { zero: "", p1: "9C Chemistry", p2: "6A Science", p3: "10B Chemistry", p4: "7B Science", break: "BREAK", p5: "6C Science", p6: "Free", p7: "", p8: "" }
      }
    },
    {
      name: "New English Teacher",
      weeklyLoad: 28,
      schedule: {
        Monday: { zero: "Free", p1: "Free", p2: "6B English", p3: "7E English", p4: "6E TQ", break: "BREAK", p5: "Free", p6: "6F TQ", p7: "Pre-9D English", p8: "9B English" },
        Tuesday: { zero: "Free", p1: "Free", p2: "6B English", p3: "7E English", p4: "6E TQ", break: "BREAK", p5: "Free", p6: "6F TQ", p7: "Pre-9D English", p8: "9B English" },
        Wednesday: { zero: "Pre-9D English", p1: "Free", p2: "6B English", p3: "7E English", p4: "6E TQ", break: "BREAK", p5: "Free", p6: "6F TQ", p7: "Pre-9D English", p8: "9B English" },
        Thursday: { zero: "Free", p1: "Free", p2: "6B English", p3: "7E English", p4: "6E TQ", break: "BREAK", p5: "Free", p6: "6F TQ", p7: "Pre-9D English", p8: "9B English" },
        Friday: { zero: "", p1: "Free", p2: "6B English", p3: "7E English", p4: "Free", break: "BREAK", p5: "Free", p6: "9B English", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Nudrat",
      weeklyLoad: 29,
      schedule: {
        Monday: { zero: "10C Chemistry", p1: "6F Science", p2: "10C Chemistry", p3: "Pre-9D Chemistry", p4: "9E Chemistry", break: "BREAK", p5: "Free", p6: "9D Chemistry", p7: "Free", p8: "7D Computer" },
        Tuesday: { zero: "10C Chemistry", p1: "6F Science", p2: "Free", p3: "Pre-9D Chemistry", p4: "9E Chemistry", break: "BREAK", p5: "Free", p6: "9D Chemistry", p7: "Free", p8: "Free" },
        Wednesday: { zero: "10C Chemistry", p1: "6F Science", p2: "10C Chemistry", p3: "Pre-9D Chemistry", p4: "9E Chemistry", break: "BREAK", p5: "Free", p6: "9D Chemistry", p7: "Free", p8: "7D Computer" },
        Thursday: { zero: "10C Chemistry", p1: "6F Science", p2: "Free", p3: "Pre-9D Chemistry", p4: "9E Chemistry", break: "BREAK", p5: "Free", p6: "9D Chemistry", p7: "Free", p8: "7D Computer" },
        Friday: { zero: "", p1: "6F Science", p2: "Free", p3: "Pre-9D Chemistry", p4: "9E Chemistry", break: "BREAK", p5: "Free", p6: "9D Chemistry", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Qari Tahir",
      weeklyLoad: 27,
      schedule: {
        Monday: { zero: "9C TQ", p1: "Free", p2: "10A TQ", p3: "Free", p4: "Pre-9C Islamiat", break: "BREAK", p5: "Pre-9B Islamiat", p6: "Free", p7: "9C TQ", p8: "9C Islamiat" },
        Tuesday: { zero: "Pre-9B Islamiat", p1: "Free", p2: "Pre-9C Islamiat", p3: "10A TQ", p4: "Free", break: "BREAK", p5: "Free", p6: "Free", p7: "Pre-9B TQ", p8: "9C Islamiat" },
        Wednesday: { zero: "9C Islamiat", p1: "Free", p2: "9C Islamiat", p3: "9C TQ", p4: "Free", break: "BREAK", p5: "Pre-9B Islamiat", p6: "Pre-9B TQ", p7: "Pre-9B TQ", p8: "Free" },
        Thursday: { zero: "9C TQ", p1: "Free", p2: "Pre-9C Islamiat", p3: "10A TQ", p4: "Pre-9C Islamiat", break: "BREAK", p5: "Pre-9B Islamiat", p6: "Free", p7: "9C Islamiat", p8: "Free" },
        Friday: { zero: "", p1: "Free", p2: "Pre-9C Islamiat", p3: "10A TQ", p4: "Free", break: "BREAK", p5: "Pre-9B Islamiat", p6: "Pre-9B TQ", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Rehana",
      weeklyLoad: 26,
      schedule: {
        Monday: { zero: "Free", p1: "6E Urdu", p2: "10B Urdu", p3: "Free", p4: "7E Urdu", break: "BREAK", p5: "9E Urdu", p6: "Free", p7: "7E Urdu", p8: "7E Islamiat" },
        Tuesday: { zero: "Free", p1: "6E Urdu", p2: "10B Urdu", p3: "6E Islamiat", p4: "Free", break: "BREAK", p5: "9E Urdu", p6: "7E Islamiat", p7: "7E Urdu", p8: "Free" },
        Wednesday: { zero: "Free", p1: "6E Urdu", p2: "10B Urdu", p3: "6E Islamiat", p4: "Free", break: "BREAK", p5: "9E Urdu", p6: "Free", p7: "7E Urdu", p8: "Free" },
        Thursday: { zero: "10B Urdu", p1: "6E Urdu", p2: "10B Urdu", p3: "6E Islamiat", p4: "Free", break: "BREAK", p5: "9E Urdu", p6: "Free", p7: "7E Urdu", p8: "Free" },
        Friday: { zero: "", p1: "6E Urdu", p2: "7E Islamiat", p3: "Free", p4: "Free", break: "BREAK", p5: "9E Urdu", p6: "Free", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Rizwana Kousar",
      weeklyLoad: 29,
      schedule: {
        Monday: { zero: "Free", p1: "10D Urdu", p2: "7E TQ", p3: "Pre-9E Urdu", p4: "Free", break: "BREAK", p5: "6D Urdu", p6: "Free", p7: "9A Urdu", p8: "Pre-9A Urdu" },
        Tuesday: { zero: "Free", p1: "10D Urdu", p2: "Free", p3: "Pre-9E Urdu", p4: "Free", break: "BREAK", p5: "6D Urdu", p6: "Free", p7: "9A Urdu", p8: "Pre-9A Urdu" },
        Wednesday: { zero: "Pre-9A Urdu", p1: "10D Urdu", p2: "Free", p3: "Pre-9E Urdu", p4: "7E TQ", break: "BREAK", p5: "6D Urdu", p6: "Free", p7: "9A Urdu", p8: "Pre-9A Urdu" },
        Thursday: { zero: "9A Urdu", p1: "10D Urdu", p2: "Free", p3: "Pre-9E Urdu", p4: "7E TQ", break: "BREAK", p5: "6D Urdu", p6: "Free", p7: "9A Urdu", p8: "Pre-9A Urdu" },
        Friday: { zero: "", p1: "10D Urdu", p2: "Free", p3: "Pre-9E Urdu", p4: "7E TQ", break: "BREAK", p5: "6D Urdu", p6: "Free", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Rizwana Shaheen",
      weeklyLoad: 29,
      schedule: {
        Monday: { zero: "Pre-9B Urdu", p1: "7C Urdu", p2: "Free", p3: "Free", p4: "6A Islamiat", break: "BREAK", p5: "6A Urdu", p6: "7C Islamiat", p7: "Pre-9B Urdu", p8: "6B Islamiat" },
        Tuesday: { zero: "Free", p1: "7C Urdu", p2: "Free", p3: "Free", p4: "Free", break: "BREAK", p5: "6A Urdu", p6: "9B Urdu", p7: "6A Islamiat", p8: "6B Islamiat" },
        Wednesday: { zero: "Free", p1: "7C Urdu", p2: "Free", p3: "7C Islamiat", p4: "Free", break: "BREAK", p5: "6A Urdu", p6: "9B Urdu", p7: "6A Islamiat", p8: "6B Islamiat" },
        Thursday: { zero: "Pre-9B Urdu", p1: "7C Urdu", p2: "Free", p3: "9B Urdu", p4: "Free", break: "BREAK", p5: "6A Urdu", p6: "9B Urdu", p7: "Pre-9B Urdu", p8: "Pre-9B Urdu" },
        Friday: { zero: "", p1: "7C Urdu", p2: "Free", p3: "9B Urdu", p4: "Free", break: "BREAK", p5: "6A Urdu", p6: "7C Islamiat", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Sabiha",
      weeklyLoad: 30,
      schedule: {
        Monday: { zero: "Free", p1: "Pre-9E English", p2: "10D English", p3: "7B English", p4: "Free", break: "BREAK", p5: "7C English", p6: "9E English", p7: "7D English", p8: "Free" },
        Tuesday: { zero: "Free", p1: "Pre-9E English", p2: "10D English", p3: "7B English", p4: "Free", break: "BREAK", p5: "7C English", p6: "9E English", p7: "7D English", p8: "Free" },
        Wednesday: { zero: "Free", p1: "Pre-9E English", p2: "10D English", p3: "7B English", p4: "Free", break: "BREAK", p5: "7C English", p6: "9E English", p7: "7D English", p8: "Free" },
        Thursday: { zero: "Free", p1: "Pre-9E English", p2: "Free", p3: "7B English", p4: "Free", break: "BREAK", p5: "7C English", p6: "9E English", p7: "7D English", p8: "10D English" },
        Friday: { zero: "", p1: "Pre-9E English", p2: "10D English", p3: "7B English", p4: "7D English", break: "BREAK", p5: "7C English", p6: "9E English", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Sajeela",
      weeklyLoad: 30,
      schedule: {
        Monday: { zero: "Free", p1: "Pre-9D Urdu", p2: "9C Urdu", p3: "10C Urdu", p4: "6D Islamiat", break: "BREAK", p5: "10C Urdu", p6: "6D TQ", p7: "6C Islamiat", p8: "Pre-9C Urdu" },
        Tuesday: { zero: "Free", p1: "Pre-9D Urdu", p2: "9C Urdu", p3: "Free", p4: "6D Islamiat", break: "BREAK", p5: "Free", p6: "Free", p7: "6D TQ", p8: "Pre-9C Urdu" },
        Wednesday: { zero: "Pre-9C Urdu", p1: "Pre-9D Urdu", p2: "Free", p3: "10C Urdu", p4: "Free", break: "BREAK", p5: "Free", p6: "Free", p7: "6C Islamiat", p8: "9C Urdu" },
        Thursday: { zero: "Free", p1: "Pre-9D Urdu", p2: "9C Urdu", p3: "10C Urdu", p4: "6D Islamiat", break: "BREAK", p5: "Free", p6: "6D TQ", p7: "6C Islamiat", p8: "Pre-9C Urdu" },
        Friday: { zero: "", p1: "Pre-9D Urdu", p2: "9C Urdu", p3: "10C Urdu", p4: "Pre-9C Urdu", break: "BREAK", p5: "Free", p6: "6D TQ", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Samiya",
      weeklyLoad: 30,
      schedule: {
        Monday: { zero: "9E TQ", p1: "Free", p2: "9D Islamiat", p3: "Free", p4: "Pre-9A TQ", break: "BREAK", p5: "9D TQ", p6: "10B TQ", p7: "10B TQ", p8: "Free" },
        Tuesday: { zero: "9D Islamiat", p1: "Free", p2: "9D Islamiat", p3: "Free", p4: "Pre-9A TQ", break: "BREAK", p5: "9D TQ", p6: "Pre-9E Islamiat", p7: "9E TQ", p8: "Pre-9E TQ" },
        Wednesday: { zero: "10B TQ", p1: "Free", p2: "9D Islamiat", p3: "Free", p4: "Pre-9A TQ", break: "BREAK", p5: "9D TQ", p6: "Pre-9E Islamiat", p7: "9E TQ", p8: "Pre-9E TQ" },
        Thursday: { zero: "Pre-9E Islamiat", p1: "Free", p2: "Pre-9E TQ", p3: "Free", p4: "10B TQ", break: "BREAK", p5: "9D TQ", p6: "Pre-9E Islamiat", p7: "9E TQ", p8: "Free" },
        Friday: { zero: "", p1: "Free", p2: "9D Islamiat", p3: "Free", p4: "Pre-9A TQ", break: "BREAK", p5: "Free", p6: "Pre-9E Islamiat", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Shahbaz",
      weeklyLoad: 18,
      schedule: {
        Monday: { zero: "Free", p1: "Free", p2: "Free", p3: "Free", p4: "6C Computer", break: "BREAK", p5: "6B Computer", p6: "Free", p7: "Free", p8: "6E Computer" },
        Tuesday: { zero: "Free", p1: "Free", p2: "Free", p3: "Free", p4: "6C Computer", break: "BREAK", p5: "Free", p6: "Free", p7: "Free", p8: "6E Computer" },
        Wednesday: { zero: "Free", p1: "Free", p2: "6D Computer", p3: "6A Computer", p4: "6B Computer", break: "BREAK", p5: "Free", p6: "6D Computer", p7: "6F Computer", p8: "6E Computer" },
        Thursday: { zero: "Free", p1: "Free", p2: "Free", p3: "6A Computer", p4: "6C Computer", break: "BREAK", p5: "Free", p6: "Free", p7: "6D Computer", p8: "6F Computer" },
        Friday: { zero: "", p1: "Free", p2: "Free", p3: "6A Computer", p4: "6B Computer", break: "BREAK", p5: "Free", p6: "6F Computer", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Shahnaz",
      weeklyLoad: 28,
      schedule: {
        Monday: { zero: "Free", p1: "6B Urdu", p2: "7B Urdu", p3: "6C Urdu", p4: "9D Urdu", break: "BREAK", p5: "Free", p6: "7A TQ", p7: "7B Urdu", p8: "7C TQ" },
        Tuesday: { zero: "Free", p1: "6B Urdu", p2: "Free", p3: "6C Urdu", p4: "9D Urdu", break: "BREAK", p5: "Free", p6: "7A TQ", p7: "7B Urdu", p8: "7C TQ" },
        Wednesday: { zero: "Free", p1: "6B Urdu", p2: "Free", p3: "6C Urdu", p4: "9D Urdu", break: "BREAK", p5: "Free", p6: "7A TQ", p7: "7B Urdu", p8: "7C TQ" },
        Thursday: { zero: "Free", p1: "6B Urdu", p2: "Free", p3: "6C Urdu", p4: "9D Urdu", break: "BREAK", p5: "Free", p6: "7A TQ", p7: "7B Urdu", p8: "7C TQ" },
        Friday: { zero: "", p1: "6B Urdu", p2: "Free", p3: "6C Urdu", p4: "9D Urdu", break: "BREAK", p5: "Free", p6: "Free", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Sidra",
      weeklyLoad: 29,
      schedule: {
        Monday: { zero: "Pre-9A Islamiat", p1: "7B TQ", p2: "Free", p3: "10D TQ", p4: "Pre-9D TQ", break: "BREAK", p5: "9A Islamiat", p6: "7B Islamiat", p7: "Pre-9A Islamiat", p8: "Free" },
        Tuesday: { zero: "Free", p1: "7B TQ", p2: "Free", p3: "10D TQ", p4: "Pre-9D TQ", break: "BREAK", p5: "9A Islamiat", p6: "9A TQ", p7: "Pre-9A Islamiat", p8: "Free" },
        Wednesday: { zero: "9A TQ", p1: "7B TQ", p2: "Free", p3: "10D TQ", p4: "Pre-9D TQ", break: "BREAK", p5: "9A Islamiat", p6: "7B Islamiat", p7: "Pre-9A Islamiat", p8: "Free" },
        Thursday: { zero: "Free", p1: "7B TQ", p2: "Free", p3: "10D TQ", p4: "Pre-9D TQ", break: "BREAK", p5: "9A Islamiat", p6: "9A TQ", p7: "Pre-9A Islamiat", p8: "Free" },
        Friday: { zero: "", p1: "7B Islamiat", p2: "Free", p3: "Free", p4: "Free", break: "BREAK", p5: "9A Islamiat", p6: "9A TQ", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Talib",
      weeklyLoad: 18,
      schedule: {
        Monday: { zero: "Free", p1: "Free", p2: "Free", p3: "6A S.D", p4: "Free", break: "BREAK", p5: "Free", p6: "6E S.D", p7: "7A Sports", p8: "Free" },
        Tuesday: { zero: "Free", p1: "Free", p2: "Free", p3: "6A Sports", p4: "6B Sports", break: "BREAK", p5: "10D Sports", p6: "Free", p7: "6F S.D", p8: "Free" },
        Wednesday: { zero: "Free", p1: "Free", p2: "7E Sports", p3: "10A Sports", p4: "6C Sports", break: "BREAK", p5: "Free", p6: "Free", p7: "Free", p8: "Free" },
        Thursday: { zero: "Free", p1: "Free", p2: "6D S.D", p3: "Free", p4: "6B S.D", break: "BREAK", p5: "10C Sports", p6: "7B Sports", p7: "Free", p8: "Free" },
        Friday: { zero: "", p1: "Free", p2: "10B Sports", p3: "7C Sports", p4: "6C S.D", break: "BREAK", p5: "Free", p6: "7D Sports", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Umair",
      weeklyLoad: 30,
      schedule: {
        Monday: { zero: "Free", p1: "10B Computer", p2: "Free", p3: "Free", p4: "9C Computer", break: "BREAK", p5: "10D Computer", p6: "Pre-9C Computer", p7: "9D Computer", p8: "Pre-9D Computer" },
        Tuesday: { zero: "Free", p1: "10B Computer", p2: "Free", p3: "Free", p4: "9C Computer", break: "BREAK", p5: "Free", p6: "Pre-9C Computer", p7: "9D Computer", p8: "Pre-9D Computer" },
        Wednesday: { zero: "Free", p1: "10B Computer", p2: "Free", p3: "Free", p4: "9C Computer", break: "BREAK", p5: "10D Computer", p6: "Pre-9C Computer", p7: "9D Computer", p8: "Pre-9D Computer" },
        Thursday: { zero: "Pre-9D Computer", p1: "10B Computer", p2: "10D Computer", p3: "Free", p4: "9C Computer", break: "BREAK", p5: "10D Computer", p6: "Pre-9C Computer", p7: "9D Computer", p8: "Pre-9D Computer" },
        Friday: { zero: "", p1: "10B Computer", p2: "Free", p3: "10D Computer", p4: "9C Computer", break: "BREAK", p5: "9D Computer", p6: "Pre-9C Computer", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Uzma",
      weeklyLoad: 23,
      schedule: {
        Monday: { zero: "Free", p1: "Free", p2: "6C TQ", p3: "Free", p4: "6B Art", break: "BREAK", p5: "Free", p6: "6A TQ", p7: "6F Art", p8: "7B Art" },
        Tuesday: { zero: "Free", p1: "Free", p2: "6C TQ", p3: "Free", p4: "7E Art", break: "BREAK", p5: "6B TQ", p6: "6A TQ", p7: "Free", p8: "7D Art" },
        Wednesday: { zero: "Free", p1: "Free", p2: "6C TQ", p3: "Free", p4: "6D Art", break: "BREAK", p5: "6B TQ", p6: "6A TQ", p7: "Free", p8: "Free" },
        Thursday: { zero: "Free", p1: "Free", p2: "6C TQ", p3: "7C Art", p4: "Free", break: "BREAK", p5: "6B TQ", p6: "6A TQ", p7: "Free", p8: "6E Art" },
        Friday: { zero: "", p1: "Free", p2: "6C Art", p3: "Free", p4: "7A Art", break: "BREAK", p5: "6B TQ", p6: "6A Art", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Waseem Abbas",
      weeklyLoad: 28,
      schedule: {
        Monday: { zero: "10D Physics", p1: "Pre-9A Physics", p2: "9E Physics", p3: "Free", p4: "10B Physics", break: "BREAK", p5: "9B Physics", p6: "Free", p7: "9B Physics", p8: "10D Physics" },
        Tuesday: { zero: "Pre-9A Physics", p1: "Pre-9A Physics", p2: "9E Physics", p3: "Free", p4: "10B Physics", break: "BREAK", p5: "9B Physics", p6: "Free", p7: "Free", p8: "10D Physics" },
        Wednesday: { zero: "10D Physics", p1: "Pre-9A Physics", p2: "9E Physics", p3: "Free", p4: "10B Physics", break: "BREAK", p5: "9B Physics", p6: "Free", p7: "Free", p8: "10D Physics" },
        Thursday: { zero: "9E Physics", p1: "Pre-9A Physics", p2: "9E Physics", p3: "Free", p4: "Free", break: "BREAK", p5: "9B Physics", p6: "Free", p7: "10B Physics", p8: "Free" },
        Friday: { zero: "", p1: "Pre-9A Physics", p2: "9E Physics", p3: "Free", p4: "10B Physics", break: "BREAK", p5: "9B Physics", p6: "Free", p7: "", p8: "" }
      }
    },
    {
      name: "Mr Waseem Israr",
      weeklyLoad: 30,
      schedule: {
        Monday: { zero: "Free", p1: "Pre-9B Chemistry", p2: "9A Chemistry", p3: "Pre-9C Chemistry", p4: "7D TQ", break: "BREAK", p5: "Free", p6: "10D Chemistry", p7: "Pre-9E Chemistry", p8: "Free" },
        Tuesday: { zero: "Pre-9E Chemistry", p1: "Pre-9B Chemistry", p2: "9A Chemistry", p3: "Pre-9C Chemistry", p4: "7D TQ", break: "BREAK", p5: "Free", p6: "10D Chemistry", p7: "Pre-9E Chemistry", p8: "Free" },
        Wednesday: { zero: "Free", p1: "Pre-9B Chemistry", p2: "9A Chemistry", p3: "Pre-9C Chemistry", p4: "7D TQ", break: "BREAK", p5: "Free", p6: "10D Chemistry", p7: "Pre-9E Chemistry", p8: "Free" },
        Thursday: { zero: "Pre-9C Chemistry", p1: "Pre-9B Chemistry", p2: "9A Chemistry", p3: "Free", p4: "7D TQ", break: "BREAK", p5: "Free", p6: "10D Chemistry", p7: "Pre-9E Chemistry", p8: "Free" },
        Friday: { zero: "", p1: "Pre-9B Chemistry", p2: "9A Chemistry", p3: "Pre-9C Chemistry", p4: "Free", break: "BREAK", p5: "10D Chemistry", p6: "10D Chemistry", p7: "", p8: "" }
      }
    },
    {
      name: "Ms Zartashia",
      weeklyLoad: 29,
      schedule: {
        Monday: { zero: "Free", p1: "7D Urdu", p2: "Free", p3: "6F Urdu", p4: "10A Urdu", break: "BREAK", p5: "7A Urdu", p6: "7D Islamiat", p7: "Free", p8: "6F Islamiat" },
        Tuesday: { zero: "Free", p1: "7D Urdu", p2: "7A Islamiat", p3: "6F Urdu", p4: "10A Urdu", break: "BREAK", p5: "7A Urdu", p6: "7D Islamiat", p7: "10A Urdu", p8: "6F Islamiat" },
        Wednesday: { zero: "Free", p1: "7D Urdu", p2: "7A Islamiat", p3: "6F Urdu", p4: "10A Urdu", break: "BREAK", p5: "7A Urdu", p6: "7D Islamiat", p7: "10A Urdu", p8: "6F Islamiat" },
        Thursday: { zero: "Free", p1: "7D Urdu", p2: "7A Islamiat", p3: "6F Urdu", p4: "Free", break: "BREAK", p5: "7A Urdu", p6: "Free", p7: "Free", p8: "Free" },
        Friday: { zero: "", p1: "7D Urdu", p2: "Free", p3: "6F Urdu", p4: "10A Urdu", break: "BREAK", p5: "7A Urdu", p6: "Free", p7: "", p8: "" }
      }
    }
  ],
  adjustmentsNotes: [
    "Lesson positions match the original class-wise PDF schedule.",
    "6F Wednesday P7 Computer teacher corrected to Mr Shahbaz.",
    "6A Friday P6, 6C Friday P2: Art (Ms Uzma) corrected.",
    "7A Friday P4: Art (Ms Uzma) corrected.",
    "7E Friday P2: Islamiat (Ms Rehana) restored.",
    "Total lessons count: 1,006.",
    "Break positioned after Period 4 daily.",
    "AQ and T.Q standardized to TQ."
  ]
};

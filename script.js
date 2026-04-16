var currentIndex = 0;
var bootRunning = false;
var terminalLocked = false;
var versionVisible = false;

var loadingPresets = {
  login: {
    title: "TERMINAL BOOT // AUTHENTICATION",
    lines: [
      "INITIALIZING SECURE TERMINAL...",
      "VERIFYING BADGE CREDENTIALS...",
      "CONNECTING TO TACTICAL DATABASE...",
      "MOUNTING OFFICER FILE...",
      "SESSION VALIDATED."
    ]
  },

  operations: {
    title: "ARCHIVE ACCESS // SWAT INCIDENT REGISTRY",
    lines: [
      "CLOSING OFFICER PROFILE VIEW...",
      "REQUESTING INCIDENT ARCHIVE ACCESS...",
      "VERIFYING TACTICAL CLEARANCE...",
      "MOUNTING SWAT INCIDENT REGISTRY...",
      "ARCHIVE READY."
    ]
  },

  operationsReturn: {
    title: "ARCHIVE ACCESS // SWAT INCIDENT REGISTRY",
    lines: [
      "CLOSING INCIDENT FILE...",
      "RETURNING TO ARCHIVE INDEX...",
      "VERIFYING SESSION INTEGRITY...",
      "RESTORING INCIDENT REGISTRY...",
      "ARCHIVE READY."
    ]
  },

  operator: {
    title: "PROFILE ACCESS // OFFICER RECORD",
    lines: [
      "CLOSING ARCHIVE VIEW...",
      "RESTORING OFFICER FILE...",
      "VERIFYING LOCAL SESSION...",
      "LOADING PERSONNEL RECORD...",
      "OFFICER FILE READY."
    ]
  },

  records: {
    title: "RECORD ACCESS // INTERNAL REVIEW INDEX",
    lines: [
      "REQUESTING ADMINISTRATIVE RECORDS...",
      "VERIFYING TACTICAL SUPERVISION ACCESS...",
      "RESTORING COMMENDATION LOG...",
      "MOUNTING INTERNAL REVIEW INDEX...",
      "RECORDS READY."
    ]
  },

  missionDefault: {
    title: "FILE ACCESS // INCIDENT DOSSIER",
    lines: [
      "REQUESTING INCIDENT FILE...",
      "VERIFYING INTERNAL CLEARANCE...",
      "RESTORING TACTICAL REPORT...",
      "LOADING FIELD TIMELINE...",
      "INCIDENT FILE READY."
    ]
  },

  mission_lockdown_12: {
    title: "FILE ACCESS // LOCKDOWN 12",
    lines: [
      "REQUESTING HOSTAGE INCIDENT FILE...",
      "VERIFYING TACTICAL CLEARANCE...",
      "RESTORING RESIDENTIAL ENTRY REPORT...",
      "LOADING HOSTAGE RESPONSE TIMELINE...",
      "LOCKDOWN 12 FILE READY."
    ]
  },

  mission_harbor_nine: {
    title: "FILE ACCESS // HARBOR NINE",
    lines: [
      "REQUESTING PORT DISTRICT INCIDENT FILE...",
      "VERIFYING TACTICAL CLEARANCE...",
      "RESTORING ARMED INTERCEPTION REPORT...",
      "LOADING SEIZURE AND ARREST LOG...",
      "HARBOR NINE FILE READY."
    ]
  },

  mission_glass_hall: {
    title: "FILE ACCESS // GLASS HALL",
    lines: [
      "REQUESTING ADMINISTRATIVE SITE FILE...",
      "VERIFYING TACTICAL CLEARANCE...",
      "RESTORING BUILDING EVACUATION LOG...",
      "LOADING INTERIOR CONTACT REPORT...",
      "GLASS HALL FILE READY."
    ]
  },

  mission_dead_air: {
    title: "FILE ACCESS // DEAD AIR",
    lines: [
      "REQUESTING ISOLATED SITE FILE...",
      "VERIFYING TACTICAL CLEARANCE...",
      "RESTORING COMMUNICATIONS RECOVERY LOG...",
      "LOADING LOW-LIGHT ENTRY TIMELINE...",
      "DEAD AIR FILE READY."
    ]
  },

  mission_ivory_line: {
    title: "FILE ACCESS // IVORY LINE",
    lines: [
      "REQUESTING RESIDENTIAL EXTRACTION FILE...",
      "VERIFYING TACTICAL CLEARANCE...",
      "RESTORING ENTRY AND EXTRACTION LOG...",
      "LOADING MINOR PROTECTION REPORT...",
      "IVORY LINE FILE READY."
    ]
  },

  mission_night_warrant: {
    title: "FILE ACCESS // NIGHT WARRANT",
    lines: [
      "REQUESTING WARRANT EXECUTION FILE...",
      "VERIFYING INTERNAL ACCESS...",
      "RESTORING RESIDENTIAL ENTRY LOG...",
      "LOADING EVIDENCE AND ARREST REPORT...",
      "NIGHT WARRANT FILE READY."
    ]
  },

  mission_redline_yard: {
    title: "FILE ACCESS // REDLINE YARD",
    lines: [
      "REQUESTING INDUSTRIAL SITE FILE...",
      "VERIFYING INTERNAL ACCESS...",
      "RESTORING YARD CONTROL REPORT...",
      "LOADING SECTOR CLEARANCE TIMELINE...",
      "REDLINE YARD FILE READY."
    ]
  },

  mission_civic_echo: {
    title: "FILE ACCESS // CIVIC ECHO",
    lines: [
      "REQUESTING CIVIC BUILDING FILE...",
      "VERIFYING INTERNAL ACCESS...",
      "RESTORING EVACUATION LOG...",
      "LOADING FLOOR-BY-FLOOR REPORT...",
      "CIVIC ECHO FILE READY."
    ]
  },

  mission_twin_palms: {
    title: "FILE ACCESS // TWIN PALMS",
    lines: [
      "REQUESTING MOTEL INCIDENT FILE...",
      "VERIFYING INTERNAL ACCESS...",
      "RESTORING ROOM ENTRY LOG...",
      "LOADING ARREST AND EVIDENCE REPORT...",
      "TWIN PALMS FILE READY."
    ]
  },

  mission_long_march: {
    title: "FILE ACCESS // LONG MARCH",
    lines: [
      "REQUESTING RESIDENTIAL BLOCK FILE...",
      "VERIFYING INTERNAL ACCESS...",
      "RESTORING STAIRWELL PROGRESSION LOG...",
      "LOADING SUSTAINED SEARCH REPORT...",
      "LONG MARCH FILE READY."
    ]
  },

  mission_static_breach: {
    title: "FILE ACCESS // STATIC BREACH",
    lines: [
      "REQUESTING RESTRICTED INCIDENT FILE...",
      "VERIFYING RESTRICTED CLEARANCE...",
      "RESTORING COMPLEX ENTRY LOG...",
      "LOADING ENGAGEMENT AND WITHDRAWAL REPORT...",
      "STATIC BREACH FILE READY."
    ]
  },

  mission_blue_room: {
    title: "FILE ACCESS // BLUE ROOM",
    lines: [
      "REQUESTING RESTRICTED MEDICAL SITE FILE...",
      "VERIFYING RESTRICTED CLEARANCE...",
      "RESTORING CIVILIAN PROTECTION LOG...",
      "LOADING CRITICAL CONTACT REPORT...",
      "BLUE ROOM FILE READY."
    ]
  },

  mission_crosswind: {
    title: "FILE ACCESS // CROSSWIND",
    lines: [
      "REQUESTING HIGHWAY INCIDENT FILE...",
      "VERIFYING RESTRICTED CLEARANCE...",
      "RESTORING TRAFFIC LOCKDOWN LOG...",
      "LOADING CIVILIAN EXTRACTION REPORT...",
      "CROSSWIND FILE READY."
    ]
  },

  mission_saint_elias: {
    title: "FILE ACCESS // SAINT ELIAS",
    lines: [
      "REQUESTING SENSITIVE SITE FILE...",
      "VERIFYING RESTRICTED CLEARANCE...",
      "RESTORING STRUCTURE CONTROL REPORT...",
      "LOADING SUSPECT LOCATION TIMELINE...",
      "SAINT ELIAS FILE READY."
    ]
  },

  mission_winter_garden: {
    title: "FILE ACCESS // WINTER GARDEN",
    lines: [
      "REQUESTING SENSITIVE PUBLIC SITE FILE...",
      "VERIFYING RESTRICTED CLEARANCE...",
      "RESTORING ENVIRONMENTAL MOVEMENT LOG...",
      "LOADING CONTACT AND EXTRACTION REPORT...",
      "WINTER GARDEN FILE READY."
    ]
  },

  default: {
    title: "TERMINAL BOOT // AUTHENTICATION",
    lines: [
      "INITIALIZING SECURE TERMINAL...",
      "VERIFYING BADGE CREDENTIALS...",
      "CONNECTING TO TACTICAL DATABASE...",
      "MOUNTING OFFICER FILE...",
      "SESSION VALIDATED."
    ]
  }
};

function showVersionStamp() {
  var stamp = document.getElementById("versionStamp");
  if (!stamp || versionVisible) return;

  versionVisible = true;
  stamp.classList.add("visible");
}

function hideVersionStamp() {
  var stamp = document.getElementById("versionStamp");
  if (!stamp) return;

  versionVisible = false;
  stamp.classList.remove("visible");
}

function getMissionPresetName(key) {
  var presetName = "mission_" + key;
  if (loadingPresets[presetName]) return presetName;
  return "missionDefault";
}

function getScreenCount() {
  var track = document.getElementById("track");
  if (track && track.classList.contains("track-5")) return 5;
  return 4;
}

function getScreenWidthPercent() {
  return 100 / getScreenCount();
}

function getScrollBox(index) {
  var screens = document.querySelectorAll(".screen");
  if (!screens[index]) return null;
  return screens[index].querySelector(".screen-scroll");
}

function scrollScreenTop(index) {
  var scrollBox = getScrollBox(index);
  if (!scrollBox) return;

  scrollBox.scrollTop = 0;

  requestAnimationFrame(function () {
    scrollBox.scrollTop = 0;
  });

  setTimeout(function () {
    scrollBox.scrollTop = 0;
  }, 60);
}

function goTo(index) {
  if (terminalLocked) return;

  var track = document.getElementById("track");
  if (!track) return;

  currentIndex = index;
  track.style.transform = "translateX(-" + (index * getScreenWidthPercent()) + "%)";

  scrollScreenTop(index);
}

function resetLoading() {
  var bar = document.getElementById("progressBar");
  if (bar) bar.style.width = "0%";

  var ids = ["line1", "line2", "line3", "line4", "line5"];
  for (var i = 0; i < ids.length; i++) {
    var el = document.getElementById(ids[i]);
    if (el) {
      el.classList.remove("visible");
      el.textContent = "";
    }
  }
}

function resetShutdown() {
  var ids = ["shutdownLine1", "shutdownLine2", "shutdownLine3", "shutdownLine4", "shutdownLine5"];
  for (var i = 0; i < ids.length; i++) {
    var el = document.getElementById(ids[i]);
    if (el) {
      el.classList.remove("visible");
      el.textContent = "";
    }
  }

  var finalEl = document.getElementById("shutdownFinal");
  if (finalEl) {
    finalEl.classList.remove("visible");
  }
}

function ensureCrtFlash() {
  var viewport = document.querySelector(".viewport");
  if (!viewport) return null;

  var existing = document.getElementById("crtFlash");
  if (existing) return existing;

  var flash = document.createElement("div");
  flash.id = "crtFlash";
  flash.className = "crt-flash";
  viewport.appendChild(flash);
  return flash;
}

function playCrtShutdownEffect() {
  var viewport = document.querySelector(".viewport");
  var flash = ensureCrtFlash();

  if (!viewport || !flash) return;

  flash.classList.remove("active");
  viewport.classList.remove("crt-off");

  void flash.offsetWidth;

  flash.classList.add("active");

  setTimeout(function () {
    viewport.classList.add("crt-off");
  }, 120);
}

function typeText(element, text, speed, callback) {
  if (!element) {
    if (callback) callback();
    return;
  }

  element.textContent = "";
  var i = 0;

  function step() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(step, speed);
    } else if (callback) {
      callback();
    }
  }

  step();
}

function bootTo(index, presetName) {
  if (terminalLocked) return;
  if (bootRunning) return;
  if (index === currentIndex) return;

  var overlay = document.getElementById("loadingOverlay");
  var bar = document.getElementById("progressBar");
  var titleEl = document.getElementById("loadingTitle");

  if (!overlay || !bar) {
    goTo(index);
    if (index > 0) showVersionStamp();
    return;
  }

  var preset = loadingPresets[presetName] || loadingPresets.default;
  var lines = preset.lines;
  var ids = ["line1", "line2", "line3", "line4", "line5"];
  var progress = [18, 39, 62, 84, 100];
  var currentLine = 0;

  if (titleEl) {
    titleEl.textContent = preset.title;
  }

  bootRunning = true;
  resetLoading();
  overlay.classList.add("active");

  var glitchCount = 1 + Math.floor(Math.random() * 2);
  for (var g = 0; g < glitchCount; g++) {
    (function(delay) {
      setTimeout(function() {
        overlay.classList.remove("glitch");
        void overlay.offsetWidth;
        overlay.classList.add("glitch");
      }, delay);
    })(180 + Math.floor(Math.random() * 700));
  }

  function writeNextLine() {
    if (currentLine >= lines.length) {
      setTimeout(function () {
        if (!terminalLocked) {
          goTo(index);
          if (index > 0) {
            showVersionStamp();
          }
        }
        overlay.classList.remove("active");
        bootRunning = false;
        scrollScreenTop(index);
      }, 260);
      return;
    }

    var el = document.getElementById(ids[currentLine]);
    if (!el) {
      currentLine++;
      writeNextLine();
      return;
    }

    el.classList.add("visible");

    typeText(el, lines[currentLine], 14, function () {
      bar.style.width = progress[currentLine] + "%";
      currentLine++;
      setTimeout(writeNextLine, 90);
    });
  }

  writeNextLine();
}

function openMission(key) {
  if (terminalLocked) return;

  var mission = missions[key];
  if (!mission) return;

  var systemEl = document.getElementById("detailSystemLine");
  var titleEl = document.getElementById("detailMainTitle");
  var subEl = document.getElementById("detailSub");
  var contextEl = document.getElementById("detailContext");
  var outcomeEl = document.getElementById("detailOutcome");
  var timelineEl = document.getElementById("detailTimeline");

  var clearanceEl = document.getElementById("detailClearance");
  var theatreEl = document.getElementById("detailTheatre");
  var riskEl = document.getElementById("detailRisk");

  var arrestEl = document.getElementById("detailArrest");
  var civilianEl = document.getElementById("detailCivilian");
  var evidenceEl = document.getElementById("detailEvidence");
  var reviewEl = document.getElementById("detailReview");

  var dispatchEl = document.getElementById("detailDispatch");
  var witnessEl = document.getElementById("detailWitness");
  var attachmentEl = document.getElementById("detailAttachment");

  var dispatchBoxEl = document.getElementById("detailDispatchBox");
  var witnessBoxEl = document.getElementById("detailWitnessBox");
  var attachmentBoxEl = document.getElementById("detailAttachmentBox");

  var noteEl = document.getElementById("detailNote");
  var noteBoxEl = document.getElementById("detailNoteBox");

  if (systemEl) systemEl.textContent = mission.system;
  if (titleEl) titleEl.textContent = mission.title;
  if (subEl) subEl.textContent = mission.sub;
  if (clearanceEl) clearanceEl.textContent = mission.clearance || "—";
  if (theatreEl) theatreEl.textContent = mission.theatre || "—";
  if (riskEl) riskEl.textContent = mission.risk || "—";

  if (contextEl) contextEl.textContent = "";
  if (outcomeEl) outcomeEl.textContent = "";
  if (timelineEl) timelineEl.innerHTML = "";

  if (arrestEl) arrestEl.textContent = mission.arrest || "—";
  if (civilianEl) civilianEl.textContent = mission.civilian || "—";
  if (evidenceEl) evidenceEl.textContent = mission.evidence || "—";
  if (reviewEl) reviewEl.textContent = mission.review || "—";

  if (dispatchEl) dispatchEl.textContent = mission.dispatch || "";
  if (witnessEl) witnessEl.textContent = mission.witness || "";
  if (attachmentEl) attachmentEl.textContent = mission.attachment || "";

  if (dispatchBoxEl) dispatchBoxEl.style.display = mission.dispatch ? "" : "none";
  if (witnessBoxEl) witnessBoxEl.style.display = mission.witness ? "" : "none";
  if (attachmentBoxEl) attachmentBoxEl.style.display = mission.attachment ? "" : "none";

  if (noteEl) noteEl.textContent = "";
  if (noteBoxEl) {
    noteBoxEl.style.display = mission.note ? "" : "none";
  }

  scrollScreenTop(3);
  bootTo(3, getMissionPresetName(key));

  setTimeout(function () {
    if (terminalLocked) return;

    scrollScreenTop(3);

    typeText(contextEl, mission.context, 5, function () {
      var i = 0;

      function addNext() {
        if (terminalLocked) return;

        if (i >= mission.timeline.length) {
          typeText(outcomeEl, mission.outcome, 5, function () {
            if (mission.note && noteEl) {
              typeText(noteEl, mission.note, 5);
            }
          });
          return;
        }

        var li = document.createElement("li");
        timelineEl.appendChild(li);

        typeText(li, mission.timeline[i], 5, function () {
          i++;
          setTimeout(addNext, 50);
        });
      }

      addNext();
    });

  }, 500);
}

function lockTerminalPermanently() {
  terminalLocked = true;
  document.body.classList.add("terminal-dead");

  var app = document.querySelector(".app");
  if (app) {
    app.style.pointerEvents = "none";
  }
}

function terminateSession() {
  if (terminalLocked || bootRunning) return;

  var shutdownOverlay = document.getElementById("shutdownOverlay");
  if (!shutdownOverlay) return;

  lockTerminalPermanently();
  resetShutdown();

  shutdownOverlay.classList.add("active");
  shutdownOverlay.setAttribute("aria-hidden", "false");

  var lines = [
    "CLOSING ACTIVE SESSION...",
    "REVOKING TERMINAL ACCESS...",
    "UNMOUNTING INCIDENT REGISTRY...",
    "SEALING TACTICAL DATABASE...",
    "SYSTEM SHUTDOWN CONFIRMED."
  ];

  var ids = ["shutdownLine1", "shutdownLine2", "shutdownLine3", "shutdownLine4", "shutdownLine5"];
  var currentLine = 0;

  function writeNextShutdownLine() {
    if (currentLine >= lines.length) {
      var finalEl = document.getElementById("shutdownFinal");
      if (finalEl) {
        setTimeout(function () {
          finalEl.classList.add("visible");
        }, 120);
      }

      setTimeout(function () {
        playCrtShutdownEffect();
      }, 1200);

      return;
    }

    var el = document.getElementById(ids[currentLine]);
    if (!el) {
      currentLine++;
      writeNextShutdownLine();
      return;
    }

    el.classList.add("visible");

    typeText(el, lines[currentLine], 18, function () {
      currentLine++;
      setTimeout(writeNextShutdownLine, 180);
    });
  }

  writeNextShutdownLine();
}

window.addEventListener("resize", function () {
  if (!terminalLocked) {
    scrollScreenTop(currentIndex);
  }
});

document.addEventListener("click", function (event) {
  if (!terminalLocked) return;

  var shutdownOverlay = document.getElementById("shutdownOverlay");
  if (shutdownOverlay && shutdownOverlay.contains(event.target)) {
    event.preventDefault();
    event.stopPropagation();
  }
}, true);

document.addEventListener("keydown", function (event) {
  if (!terminalLocked) return;
  event.preventDefault();
}, true);

window.onload = function () {
  hideVersionStamp();
  goTo(0);
  scrollScreenTop(0);
};
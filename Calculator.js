class Calculator {
  constructor(
    XPPool,
    DRPool,
    ACPool,
    GearXP,
    OnyxCount,
    DailyXP,
    DailyDR,
    DailyAC,
    DailyTpose,
    CTFarming,
    CTTpose,
    Bombard
  ) {
    this.XPPool = XPPool;
    this.DRPool = DRPool;
    this.ACPool = ACPool;
    this.GearXP = GearXP;
    this.OnyxCount = OnyxCount;
    this.DailyXP = DailyXP;
    this.DailyDR = DailyDR;
    this.DailyAC = DailyAC;
    this.DailyTpose = DailyTpose;
    this.CTFarming = CTFarming;
    this.CTTpose = CTTpose;
    this.Bombard = Bombard;
    this.Day = 0;
    this.Table = [];
    this.XPTposeCount = 0;
    this.DRTposeCount = 0;
  }

  calculate() {
    while (this.GearXP < 2000000000) {
      if (this.Day == 0) {
        this.Table.push([
          this.Day,
          this.XPPool,
          this.DRPool,
          this.ACPool,
          this.GearXP,
          this.XPTposeCount,
          this.DRTposeCount,
        ]);
        this.Day++;
      } else {
        if (this.GearXP < 2000000000) {
          this.grind();
        }
        if (this.GearXP < 2000000000) {
          this.bombard();
        }
        if (this.GearXP < 2000000000) {
          for (let i = 0; i < this.DailyTpose; i++) {
            if (this.GearXP < 2000000000 && this.ACPool > 10 * i) {
              this.transpose();
              this.ACPool -= i * 10;
            } else {
              break;
            }
          }
        }
        this.Table.push([
          this.Day,
          this.XPPool,
          this.DRPool,
          this.ACPool,
          this.GearXP,
          this.XPTposeCount,
          this.DRTposeCount,
        ]);
        this.Day++;
        this.XPTposeCount = 0;
        this.DRTposeCount = 0;
        if (this.Day > 2000) {
          break;
        }
      }
    }
  }

  grind() {
    this.XPPool += this.DailyXP;
    this.DRPool += this.DailyDR;
    this.ACPool += this.DailyAC;
    let GearXPGain;
    if (this.CTFarming) {
      GearXPGain = this.DailyXP / (4444 * (8 - this.OnyxCount));
    } else {
      GearXPGain = this.DailyXP / (8888 * (8 - this.OnyxCount));
    }
    this.GearXP += round(GearXPGain);
  }

  bombard() {
    if (this.Bombard) {
      let StoreXPPool = this.XPPool;
      let StoreDRPool = this.DRPool;
      let StoreACPool = this.ACPool;
      let StoreGearXP = this.GearXP;
      for (let i = 0; i < 100; i++) {
        if (this.GearXP < 2000000000 && this.ACPool > 10 * i) {
          this.transpose();
          this.ACPool -= 10 * i;
        } else {
          break;
        }
      }
      if (this.GearXP < 2000000000) {
        this.XPPool = StoreXPPool;
        this.DRPool = StoreDRPool;
        this.ACPool = StoreACPool;
        this.GearXP = StoreGearXP;
        this.XPTposeCount = 0;
        this.DRTposeCount = 0;
      }
    }
  }

  transpose() {
    if (this.XPPool / 8888 > this.DRPool / 13333) {
      this.XPtranspose();
    } else {
      this.DRtranspose();
    }
  }

  XPtranspose() {
    let GearXPGain = this.XPPool * (1 - 0.99);
    if (this.CTTpose) {
      GearXPGain = GearXPGain / 4444;
    } else {
      GearXPGain = GearXPGain / 8888;
    }
    this.GearXP += round(GearXPGain);
    this.XPPool -= round(this.XPPool * (1 - 0.99));
    this.XPTposeCount++;
  }

  DRtranspose() {
    let GearXPGain = this.DRPool * (1 - 0.99);
    if (this.CTTpose) {
      GearXPGain = GearXPGain / 6666.5;
    } else {
      GearXPGain = GearXPGain / 13333;
    }
    this.GearXP += round(GearXPGain);
    this.DRPool -= round(this.DRPool * (1 - 0.99));
    this.DRTposeCount++;
  }
}

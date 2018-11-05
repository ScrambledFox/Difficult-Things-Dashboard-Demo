using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Dashboard_Demo {
    public partial class MainDemoForm : Form {
        public MainDemoForm () {
            InitializeComponent();
        }

        HScrollbarAdaptable scroll;
        private void MainDemoForm_Load ( object sender, EventArgs e ) {
            scroll = new HScrollbarAdaptable((int)(Size.Width / 1.5f), 25, this);
        }

        protected override void OnPaint ( PaintEventArgs e ) {
            base.OnPaint(e);

            scroll.Size((int)(Size.Width / 1.5f), 25);
            scroll.Draw();
        }
    }
}

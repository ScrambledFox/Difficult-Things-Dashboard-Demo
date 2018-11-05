using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;
using System.Windows.Forms;

namespace Dashboard_Demo {
    public class HScrollbarAdaptable {

        int width = 10;
        int height = 50;

        Form currentForm;

        Graphics formGraphics;

        public HScrollbarAdaptable (int width, int height, Form form) {
            this.width = width;
            this.height = height;
            this.currentForm = form;
        }

        public void Draw () {
            // Background
            formGraphics = currentForm.CreateGraphics();
            SolidBrush brush = new SolidBrush(Color.LightGray);
            formGraphics.FillRectangle(brush, new Rectangle(0, 0, width, height));
            brush.Dispose();
            formGraphics.Dispose();
        }

        internal void Size ( int width, int height ) {
            this.width = width;
            this.height = height;
        }
    }
}

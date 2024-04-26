using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form5 : Form
    {
        public Form5()
        {
            InitializeComponent();
        }

        private void Form5_Load(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            Form1 f = new Form1();
            this.Visible = false;
            f.ShowDialog();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form1 f = new Form1();
            this.Visible = false;
            f.ShowDialog();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            Form1 f = new Form1();
            this.Visible = false;
            f.ShowDialog();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Form1 f = new Form1();
            this.Visible = false;
            f.ShowDialog();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            Form1 f = new Form1();
            this.Visible = false;
            f.ShowDialog();
        }
    }
}

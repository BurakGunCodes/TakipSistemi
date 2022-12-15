﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TakipSistemi.Models;

#nullable disable

namespace TakipSistemi.Migrations
{
    [DbContext(typeof(SystemDbContext))]
    [Migration("20221212132047_Route_Coordinate_Table_Added")]
    partial class RouteCoordinateTableAdded
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("TakipSistemi.Models.Entities.Coordinate", b =>
                {
                    b.Property<int>("CoordinateId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CoordinateId"));

                    b.Property<string>("Lat")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lng")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RouteId")
                        .HasColumnType("int");

                    b.HasKey("CoordinateId");

                    b.HasIndex("RouteId");

                    b.ToTable("Coordinates");
                });

            modelBuilder.Entity("TakipSistemi.Models.Entities.RoadRoute", b =>
                {
                    b.Property<int>("RouteId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RouteId"));

                    b.Property<string>("RouteName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RouteId");

                    b.ToTable("Routes");
                });

            modelBuilder.Entity("TakipSistemi.Models.Entities.UserData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Birthdate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EmailAddr")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TakipSistemi.Models.Entities.Coordinate", b =>
                {
                    b.HasOne("TakipSistemi.Models.Entities.RoadRoute", "Route")
                        .WithMany()
                        .HasForeignKey("RouteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Route");
                });
#pragma warning restore 612, 618
        }
    }
}